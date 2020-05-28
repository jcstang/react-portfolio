import React from 'react';
import './App.css';
import NavbarComp from './components/NavbarComp';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import headshot from './headshot-trees.png';
import headshot2 from './headshot-2.png';

function App() {
  return (
    <div className="home-me">
      <NavbarComp />
      <Container fluid>
        <Row>
          <Col md={4}>
            <img 
              src={headshot2} 
              className="App-headshot" 
              alt="headshot"
            />
          </Col>
          <Col md={8}>
            <p>
            Full stack web developer with a passion for iOS development. Educated in computer science at Weber State University and recently earned a coding certificate from the University of Utah. Life-long learner that thrives in team environments and is driven by complex problem solving with more than 100 hours on Udemy and Pluralsight. Expertise interfacing and scoping solutions with clients and clearly explaining technical topics to stakeholders.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
