<div id="top"></div>


<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://media.npr.org/assets/img/2021/07/16/gettyimages-630263206-e21e85c1e9121a8f6204ccb11ffc0fd973406ae5-s1100-c50.jpg" alt="Logo" wihttps://media.npr.org/assets/img/2021/07/16/gettyimages-630263206-e21e85c1e9121a8f6204ccb11ffc0fd973406ae5-s1100-c50.jpgdth="80" height="80">
  </a>

  <h3 align="center">Best-README-Template# English-Dictionary-App

<div id="top"></div>




<!-- PROJECT LOGO -->
</br>
<div style= "text-align:center;cursor: default;">
    <img target="blank" src="https://www.coachingpositiveperformance.com/wp-content/uploads/2015/11/rsz_contextualised-lists.png" alt="Logo" width="80" height="80">
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <ul>
    <li><a href="#assignment">Assignment</a></li>
    <li><a href="#database">Database</a></li>
    <li><a href="#server-requirements">Server Requirements</a></li>
    <li><a href="#client-requirements">Client Requirements</a></li>
    <li><a href="#architecture">Architecture</a></li>
        <li><a href="#built-with">Built With</a></li>
          <ul>
        <li><a href="#ide">IDE</a></li>
        <li><a href="#frameworks-platforms-and-libraries">Frameworks, Platforms and Libraries</a></li>
        <li><a href="#languages">Languages</a></li>
        <li><a href="#databases">Databases</a></li>
        <li><a href="#deployment">Deployment</a></li>
          </ul>        
      </ul>
    </li>
  </ol>
</details>
</br>

<p style= "text-align:right">(<a href="#top">back to top</a>)</p>

## Assignment

#### Your about to build an english-dictionary app.

- Download [English Dictionary in CSV format](https://www.bragitoff.com/2016/03/english-dictionary-in-csv-format/)
- Set up a DynamoDB with `Dictionary` table.

<p style= "text-align:right">(<a href="#top">back to top</a>)</p>

## DATABASE

- Parse & Insert all words, in a common structure, to `Dictionary` table.

<p style= "text-align:right">(<a href="#top">back to top</a>)</p>


## Server Requirements

- Build a REST API with the following end point(s):

* [x] `GET /:word` - if word has more than one parts of speech will return all words part of speech, else, will return a word + definition + part of speech.
* [x] `GET /:word/:partOfSpeech` - will return a word + definition + part of speech [(noun, verb, adjectives, etc...)](https://www.dictionary.com/e/parts-of-speech/) `{updated: true}` if succeed.
* [x] `GET /part-of-speech/:part` - for example, `/part-of-speech/adjective`, will return a random word + definition + part of speech (`part` is enum).

<p style= "text-align:right">(<a href="#top">back to top</a>)</p>

<!-- Running-tests-->

## Client Requirements

- [x] Build a `create-react-app` english dictionary app (mobile first)
- [x] URL routes:
    - `/:word` - dynamic route - `word` is dynamic URL parameter, used to request backend api.
    - `/:word/:partOfSpeech` - dynamic route - `word` is dynamic URL parameter, used to request backend api.
    - `/part-of-speech/:part` - `part` is enum URL parameter, used to request backend api.
    - Each word in dictionary is clickable and will redirect to a common URL.
    - **BONUS** should be deployed to `S3 bucket`.


<p style= "text-align:right">(<a href="#top">back to top</a>)</p>

## Architecture

![Architecture](./images/Dictionary-Architecture.png)


<p style= "text-align:right">(<a href="#top">back to top</a>)</p>

### Built With

- #### IDE

  [![Vscode][vscode-shield]][vscode-url]

- #### Frameworks, Platforms and Libraries
  [![AWS][aws-shield]][aws-url]
  [![React][react-shield]][react-url]
  [![Npm][npm-shield]][npm-url]
  [![Nodejs][nodejs-shield]][nodejs-url]
  [![Express][express-shield]][express-url]
  [![Mui][mui-shield]][mui-url]
  [![Css3][css3-shield]][css3-url]
  [![Bootstrap][bootstrap-shield]][bootstrap-url]

- #### Languages

  [![Html5][html5-shield]][html5-url]
  [![JavaScript][javascript-shield]][javascript-url]

- #### Databases
  [![DynamoDB][dynamoDB-shield]][dynamoDB-url]
  

<p style= "text-align:right">(<a href="#top">back to top</a>)</p>

- #### Deployment
- [x] [DictionaryApp](https://english-dictionary-sagi.s3.us-east-2.amazonaws.com/index.html)   

<p style= "text-align:right">(<a href="#top">back to top</a>)</p>

<!-- Badges -->

<!-- build with -->

<!-- IDE -->

[vscode-url]: https://code.visualstudio.com/
[vscode-shield]: https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white

<!-- Frameworks -->
<!-- Nodejs -->

[nodejs-url]: https://nodejs.org/en/
[nodejs-shield]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=whit

<!-- Npm -->

[npm-url]: https://www.npmjs.com/
[npm-shield]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white

<!-- Aws-->

[aws-shield]: https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white
[aws-url]: https://aws.amazon.com/

<!-- Express -->

[express-shield]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[express-url]: https://expressjs.com/

<!--React  -->

[react-shield]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/

<!-- Mui -->

[mui-shield]: https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white
[mui-url]: https://mui.com/

<!-- Css3 -->
[css3-shield]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[css3-url]: https://en.wikipedia.org/wiki/CSS

<!-- Bootstrap -->

[bootstrap-shield]: https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com/

<!-- Languages -->

<!-- Html5-->

[html5-url]: https://developer.mozilla.org/en-US/docs/Glossary/HTML5
[html5-shield]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white

<!-- JavaScript -->

[javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[javascript-shield]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E

<!-- Databases -->
   <!--AWS-DynamoDB -->
[dynamoDB-shield]: https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white
[dynamoDB-url]: https://aws.amazon.com/dynamodb/
<!-- Linters -->





</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

There are many great README templates available on GitHub; however, I didn't find one that really suited my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.

Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should implement DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

Use the `BLANK_README.md` to get started.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [Next.js](https://nextjs.org/)
* [React.js](https://reactjs.org/)
* [Vue.js](https://vuejs.org/)
* [Angular](https://angular.io/)
* [Svelte](https://svelte.dev/)
* [Laravel](https://laravel.com)
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
