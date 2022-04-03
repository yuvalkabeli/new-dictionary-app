const AWS = require('aws-sdk');
require('dotenv').config();
//Create a .env file and input your AWS access key, secret key and table name.
const accessKeyId = process.env.ACCESSKEYID;
const secretAccessKey = process.env.SECRETACCESSKEY;
const TABLE_NAME = process.env.TABLE_NAME;


AWS.config.update({
    region: "eu-west-1",
    accessKeyId,
    secretAccessKey,
    apiVersion: '2012-08-10'
});

const dynamoClient = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();
const getWords = async () => {
    const params = {
        TableName: TABLE_NAME,
    };
    const words = await dynamoClient.scan(params).promise();
    return words;
};

const getWordById = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id,
        },
    };
    return await dynamoClient.get(params).promise();
};

const addOrUpdateWord = async (words) => {
    const params = {
        RequestItems: {
            sagig: words.map(({ id, word, partOfSpeech, definition }) => {
                return {
                    PutRequest: {
                        Item: {
                            id: {
                                S: id
                            },
                            word: {
                                S: word
                            },
                            partOfSpeech: {
                                S: partOfSpeech
                            },
                            definition: {
                                S: definition
                            }
                        }
                    }
                }
            })
        }
    };
    try {
        console.log(params);
        await dynamoClient.batchWriteItem(params).promise();
    } catch (error) {
        console.log('error in index :');
        setTimeout(async () => {
            await dynamoClient.batchWriteItem(params).promise();
        }, 3000);
        console.log('trying again');
    }
};



const deleteWord = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id,
        },
    };
    return await dynamoClient.delete(params).promise();
};

const getWord = async (word) => {
    const params = {
        TableName: 'sagig',
        IndexName: 'word-partOfSpeech-index',
        KeyConditionExpression: 'word = :w',
        ExpressionAttributeValues: { ':w': word }
    };
    return await docClient.query(params).promise();
};

const getWordByPart = async (word, partOfSpeech) => {
    const params = {
        TableName: 'sagig',
        IndexName: 'word-partOfSpeech-index',
        KeyConditionExpression: 'word = :w and partOfSpeech = :p',
        ExpressionAttributeValues: { ':w': word, ':p': partOfSpeech }
    };
    return await docClient.query(params).promise();
};
const getRandomWordByPart = async (partOfSpeech) => {
    const params = {
        TableName: 'sagig',
        IndexName: 'partOfSpeech-id-index',
        KeyConditionExpression: 'partOfSpeech = :p',
        ExpressionAttributeValues: { ':p': partOfSpeech }
    };
    const { Items } = await docClient.query(params).promise();
    return [Items[Math.floor(Math.random() * Items.length)]];
};
module.exports = {
    dynamoClient,
    getWords,
    getWordById,
    addOrUpdateWord,
    deleteWord,
    getWord,
    getWordByPart,
    getRandomWordByPart,
};