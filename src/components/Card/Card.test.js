import React from 'react';
import ReactDOM from 'react-dom';
import Card from './index';

const card = {
  title: 'React Book App',
  imageUrl: 'https://jcstang-s3.s3-us-west-1.amazonaws.com/img-assets/react-books-app-screenshot.png',
  imgAtl: 'screenshot of react book app',
  description: 'A React app that uses the Google Book API. Also using React hooks like useReducer to manage state. MongoDB and Mongoose.',
  githubUrl: 'https://github.com/jcstang/react-books',
  projectUrl: 'https://react-roogle-books.herokuapp.com/'
};

it('Card renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card cardDetails={card} />, div);
});