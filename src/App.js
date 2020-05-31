import React, { useState } from 'react';
import NavbarComp from './components/NavbarComp';
import CardContainer from './containers/CardContainer';
import Footer from './containers/Footer';
import Header from './components/Header';
import 'bulma/css/bulma.css';
import './App.css';

function App() {

  const [ firstRow, setFirstRow ] = useState([
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
    {
      title: 'The Salty Beard | Recipe App',
      imageUrl: 'https://jcstang-s3.s3-us-west-1.amazonaws.com/img-assets/project1-screen.png',
      imgAtl: 'salty beard app screenshot',
      description: 'API driven app that dynamic rendered results using HTML, CSS, JQuery and Javascript.',
      githubUrl: 'https://github.com/Darkthistle982/recipe_box_app',
      projectUrl: 'https://darkthistle982.github.io/recipe_box_app/'
    },
    
  ]);
  const [ secondRow, setSecondRow ] = useState([
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
  ]);
  
  const [ thirdRow ] = useState([
    {
      title: 'not reddit, Seenit - COMING SOON',
      imageUrl: undefined,
      imgAtl: 'code',
      description: 'Full Stack MERN app. API routes on Express using Mongo and Mongoose. React with React hooks',
      githubUrl: 'https://github.com/jcstang/not-reddit',
      projectUrl: 'https://not-reddit-seenit.herokuapp.com/'
    },
    {
      title: '@jcstang/get-movie - my npm package ',
      imageUrl: 'https://jcstang-s3.s3-us-west-1.amazonaws.com/img-assets/Npm-logo.svg',
      imgAtl: 'npm logo',
      description: 'Wanted to publish a package to npm, found a tutorial and decided to give it a shot! Node and npm',
      githubUrl: 'https://github.com/Darkthistle982/recipe_box_app',
      projectUrl: undefined
    },
  ]);

  return (
    <>
      <NavbarComp />
      <Header />
      <CardContainer cardList={firstRow} />
      <CardContainer cardList={secondRow} />
      <CardContainer cardList={thirdRow} />
      <Footer />
    </>
  );
}

export default App;
