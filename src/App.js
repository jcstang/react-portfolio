import React from 'react';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Jumbotron>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Brand text</Navbar.Brand>
      </Navbar>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hi</h1>
        </Jumbotron>
      </Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello this is my portfolio in  <code>React</code>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <article>
        <p>stuff here</p>
      </article>
    </div>
  );
}

export default App;
