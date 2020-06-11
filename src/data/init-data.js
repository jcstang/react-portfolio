
const row1Data = [
    {
        title: 'Not reddit, Seenit ',
        imageUrl: 'https://jcstang-s3.s3-us-west-1.amazonaws.com/img-assets/seenit-screenshot.png',
        imgAtl: 'Seenit screenshot',
        description: 'Full Stack MERN app. API routes on Express using Mongo and Mongoose. React with React hooks',
        githubUrl: 'https://github.com/jcstang/not-reddit',
        projectUrl: 'https://not-reddit-seenit.herokuapp.com/'
    },
    {
        title: 'React Book App',
        imageUrl: 'https://jcstang-s3.s3-us-west-1.amazonaws.com/img-assets/react-books-app-screenshot.png',
        imgAtl: 'screenshot of react book app',
        description: 'A React app that uses the Google Book API. Also using React hooks like useReducer to manage state. MongoDB and Mongoose.',
        githubUrl: 'https://github.com/jcstang/react-books',
        projectUrl: 'https://react-roogle-books.herokuapp.com/'
    },
    {
        title: 'PASSMAN | modern password manager',
        imageUrl: 'https://jcstang-s3.s3-us-west-1.amazonaws.com/img-assets/passman-project-screenshot.png',
        imgAtl: 'PASSMAN app screenshot',
        description: 'Fullstack HTML/CSS/JS/JQuery, Node, Express, Handlebars and MySQL. Encrypted passwords using the C++ version of bcrypt npm package.',
        githubUrl: 'https://github.com/jcstang/passMan',
        projectUrl: undefined
    },

];

const row2Data = [
    {
        title: 'Word Guess Game - 80s style',
        imageUrl: 'https://jcstang-s3.s3-us-west-1.amazonaws.com/img-assets/word-guess-screen.png',
        imgAtl: 'Word guess game screenshot',
        description: 'HTML/CSS/JS stack app that will take user input to guess correct word. Frontend 80s theme. ',
        githubUrl: 'https://github.com/jcstang/Word-Guess-Game',
        projectUrl: 'https://jcstang.github.io/Word-Guess-Game/'
    },
    {
        title: 'Giphy API App',
        imageUrl: 'https://jcstang-s3.s3-us-west-1.amazonaws.com/img-assets/giphy-screen.png',
        imgAtl: 'giphy api app screenshot',
        description: 'API app using the giphy api. Using meyerweb reset css, fontawesome and Google fonts. jQuery AJAX calls.',
        githubUrl: 'https://github.com/jcstang/giphy-api-app',
        projectUrl: 'https://jcstang.github.io/giphy-api-app/'
    },
    {
        title: 'LIRI - node cli',
        imageUrl: 'https://jcstang-s3.s3-us-west-1.amazonaws.com/img-assets/Node.js_logo.svg',
        imgAtl: 'node logo',
        description: 'Just like Siri but its Liri. Node CLI that I am proud has a very clean entry point. Using Node, DotEnv, OMDB API, Axios and Node-spotify-api.',
        githubUrl: 'https://github.com/jcstang/liri-node-app',
        projectUrl: undefined
    },
];

const row3Data = [
    {
        title: 'The Salty Beard | Recipe App',
        imageUrl: 'https://jcstang-s3.s3-us-west-1.amazonaws.com/img-assets/project1-screen.png',
        imgAtl: 'salty beard app screenshot',
        description: 'API driven app that dynamic rendered results using HTML, CSS, JQuery and Javascript.',
        githubUrl: 'https://github.com/Darkthistle982/recipe_box_app',
        projectUrl: 'https://darkthistle982.github.io/recipe_box_app/'
    },
    {
        title: '@jcstang/get-movie - my npm package ',
        imageUrl: 'https://jcstang-s3.s3-us-west-1.amazonaws.com/img-assets/Npm-logo.svg',
        imgAtl: 'npm logo',
        description: 'Wanted to publish a package to npm, found a tutorial and decided to give it a shot! Node and npm',
        githubUrl: 'https://github.com/Darkthistle982/recipe_box_app',
        projectUrl: undefined
    },
];

// fab fa-twitter-square
// fab fa-ubuntu
// fab fa-salesforce
// fab fa-sass
// fab fa-safari
// fab fa-slack
// fab fa-grunt
// fab fa-github
// fab fa-gitkraken
// fab fa-gulp
// fab fa-linux
// fab fa-linode
// fab fa-markdown
// fab fa-microsoft
// fab fa-apple
// fab fa-aws
// fab fa-bootstrap
// fab fa-chrome
// fab fa-codepen
// fab fa-cpanel
// fab fa-dev
// fab fa-docker
// fab fa-font-awesome
// fab fa-free-code-camp
// fab fa-swift
// fab fa-vuejs
// fab fa-yarn

const defaultIcon = "fas fa-code";

const techIKnow1Row = [
    {
        title: 'HTML5',
        iconCode: 'fab fa-html5',
        sizeCode: 'fa-5x'
    },
    {
        title: 'CSS3',
        iconCode: 'fab fa-css3',
        sizeCode: 'fa-5x'
    },
    {
        title: 'Javascript',
        iconCode: 'fab fa-js',
        sizeCode: 'fa-5x'
    },
    {
        title: 'Node JS',
        iconCode: 'fab fa-node',
        sizeCode: 'fa-5x'
    },
    {
        title: 'npm',
        iconCode: 'fab fa-npm',
        sizeCode: 'fa-5x'
    },
    {
        title: 'SASS',
        iconCode: 'fab fa-sass',
        sizeCode: 'fa-5x'
    },
    {
        title: 'Bootstrap',
        iconCode: defaultIcon,
        sizeCode: 'fa-5x'
    },
    {
        title: 'React JS',
        iconCode: 'fab fa-react',
        sizeCode: 'fa-5x'
    },
];
const techIKnow2Row = [
    {
        title: 'jQuery',
        iconCode: 'fas fa-people-carry',
        sizeCode: 'fa-5x'
    },
    {
        title: 'Bulma',
        iconCode: 'fab fa-css3-alt',
        sizeCode: 'fa-5x'
    },
    {
        title: 'Handlebars',
        iconCode: 'fas fa-bicycle',
        sizeCode: 'fa-5x'
    },
    {
        title: 'MongoDB',
        iconCode: 'fas fa-database',
        sizeCode: 'fa-5x'
    },
    {
        title: 'Express',
        iconCode: 'fas fa-terminal',
        sizeCode: 'fa-5x'
    },
    {
        title: 'MySQL',
        iconCode: 'fas fa-database',
        sizeCode: 'fa-5x'
    }

];


module.exports = {
    row1: row1Data,
    row2: row2Data,
    row3: row3Data,
    techRow1: techIKnow1Row,
    techRow2: techIKnow2Row
}