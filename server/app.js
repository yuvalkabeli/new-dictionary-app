const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080
const { getWord, getWordByPart, getRandomWordByPart } = require('./dynamo')
//Body parser
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Default render
app.get('/part-of-speech/:part', async (req, res) => {
    const { part } = req.params
    const response = await getRandomWordByPart(part);
    res.send(response);
})
app.get('/:word', async (req, res) => {
    const { word } = req.params
    const response = await getWord(word);
    res.send(response.Items);
})

app.get('/:word/:partOfSpeech', async (req, res) => {
    const { word, partOfSpeech } = req.params
    const response = await getWordByPart(word, partOfSpeech);
    res.send(response.Items);
})



app.listen(port, async (req, res) => {
    console.log(`Listening on port http://localhost:${port}:`);
})
