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
      description: 'API driven app that dynamic rendered results using HTML, CSS, JQuery and Javascript.',
      githubUrl: 'https://github.com/Darkthistle982/recipe_box_app',
      projectUrl: 'https://darkthistle982.github.io/recipe_box_app/'
    },
    {
      title: 'The Salty Beard | Recipe App',
      imageUrl: '',
      description: 'API driven app that dynamic rendered results using HTML, CSS, JQuery and Javascript.',
      githubUrl: 'https://github.com/Darkthistle982/recipe_box_app',
      projectUrl: 'https://darkthistle982.github.io/recipe_box_app/'
    },
    {
      title: 'The Salty Beard | Recipe App',
      imageUrl: '',
      description: 'API driven app that dynamic rendered results using HTML, CSS, JQuery and Javascript.',
      githubUrl: 'https://github.com/Darkthistle982/recipe_box_app',
      projectUrl: 'https://darkthistle982.github.io/recipe_box_app/'
    }
  ]);
  const [ secondRow, setSecondRow ] = useState([
    {
      title: 'The Salty Beard | Recipe App',
      imageUrl: '',
      description: 'API driven app that dynamic rendered results using HTML, CSS, JQuery and Javascript.',
      githubUrl: 'https://github.com/Darkthistle982/recipe_box_app',
      projectUrl: 'https://darkthistle982.github.io/recipe_box_app/'
    },
    {
      title: 'The Salty Beard | Recipe App',
      imageUrl: '',
      description: 'API driven app that dynamic rendered results using HTML, CSS, JQuery and Javascript.',
      githubUrl: 'https://github.com/Darkthistle982/recipe_box_app',
      projectUrl: 'https://darkthistle982.github.io/recipe_box_app/'
    },
    {
      title: 'The Salty Beard | Recipe App',
      imageUrl: '',
      description: 'API driven app that dynamic rendered results using HTML, CSS, JQuery and Javascript.',
      githubUrl: 'https://github.com/Darkthistle982/recipe_box_app',
      projectUrl: 'https://darkthistle982.github.io/recipe_box_app/'
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
