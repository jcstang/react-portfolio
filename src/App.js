import React, { useState } from 'react';
import NavbarComp from './components/NavbarComp';
import CardContainer from './containers/CardContainer';
import Footer from './containers/Footer';
import 'bulma/css/bulma.css';
import './App.css';
import Header from './components/Header';

function App() {

  const [ firstRow, setFirstRow ] = useState([
    {
      title: 'The Salty Beard | Recipe App',
      imageUrl: '',
      imgAtl: '',
      description: 'API driven app that dynamic rendered results using HTML, CSS, JQuery and Javascript.',
      githubUrl: 'https://github.com/Darkthistle982/recipe_box_app',
      projectUrl: 'https://darkthistle982.github.io/recipe_box_app/'
    },
    {
      title: 'Word Guess Game - 80s style',
      imageUrl: '',
      imgAtl: '',
      description: 'HTML/CSS/JS stack app that will take user input to guess correct word. Frontend 80s theme. ',
      githubUrl: 'https://github.com/jcstang/Word-Guess-Game',
      projectUrl: 'https://jcstang.github.io/Word-Guess-Game/'
    },
    {
      title: 'PASSMAN | modern password manager',
      imageUrl: '',
      imgAtl: '',
      description: 'Fullstack HTML/CSS/JS/JQuery, Node, Express, Handlebars and MySQL. Encrypted passwords using the C++ version of bcrypt npm package.',
      githubUrl: 'https://github.com/jcstang/passMan',
      projectUrl: ''
    }
  ]);
  const [ secondRow, setSecondRow ] = useState([
    {
      title: 'Giphy API App',
      imageUrl: '',
      imgAtl: '',
      description: 'API driven app that dynamic rendered results using HTML, CSS, JQuery and Javascript.',
      githubUrl: 'https://github.com/jcstang/giphy-api-app',
      projectUrl: 'https://jcstang.github.io/giphy-api-app/'
    },
    {
      title: 'LIRI - node cli',
      imageUrl: '',
      imgAtl: '',
      description: 'API driven app that dynamic rendered results using HTML, CSS, JQuery and Javascript.',
      githubUrl: 'https://github.com/jcstang/liri-node-app',
      projectUrl: ''
    },
    {
      title: '@jcstang/get-movie - my npm package ',
      imageUrl: '',
      imgAtl: '',
      description: 'API driven app that dynamic rendered results using HTML, CSS, JQuery and Javascript.',
      githubUrl: 'https://github.com/Darkthistle982/recipe_box_app',
      projectUrl: ''
    }
  ]);

  return (
    <>
      <NavbarComp />
      <Header />
      <CardContainer cardList={firstRow} />
      <CardContainer cardList={secondRow} />
      <Footer />
    </>
  );
}

export default App;
