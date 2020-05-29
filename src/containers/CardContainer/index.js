import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from '../../components/Project';
import Item from '../../components/Item';
import Card from '../../components/Card';


export default function CardContainer() {

  const [projectList, setProjectList] = useState([
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
    },
    {
      title: 'The Salty Beard | Recipe App',
      imageUrl: '',
      description: 'API driven app that dynamic rendered results using HTML, CSS, JQuery and Javascript.',
      githubUrl: 'https://github.com/Darkthistle982/recipe_box_app',
      projectUrl: 'https://darkthistle982.github.io/recipe_box_app/'
    },
  ]);


  return (
    <div className="container">
      <div className="columns is-centered">
        {
          projectList.map((card, index) => (
            <Card />
          ))
        }
      </div>
    </div>
  );
}