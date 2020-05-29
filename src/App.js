import React from 'react';
import './App.css';
import NavbarComp from './components/NavbarComp';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import headshot from './headshot-2.png';
import Media from 'react-bootstrap/Media';
import PortfolioBoard from './containers/PortfolioBoard';
import 'bulma/css/bulma.css'
import CardContainer from './containers/CardContainer';

function App() {
  return (
    <div className="home-me">
      <NavbarComp />
      <Container className="main-content">
      <Row>
        <h1>Full Stack Web Developer</h1>
        <Media>
          <Col md={3}>
            <img
              width={180}
              height={180}
              className="align-self-start mr-3"
              src={headshot}
              alt="Generic placeholder"
            />
          </Col>
          <Col md={9}>
            <Media.Body>
              <h5>About me</h5>
              <p>
                Full stack web developer with a passion for iOS development. Educated in computer science at Weber State University and recently earned a coding certificate from the University of Utah. Life-long learner that thrives in team environments and is driven by complex problem solving with more than 100 hours on Udemy and Pluralsight. Expertise interfacing and scoping solutions with clients and clearly explaining technical topics to stakeholders.
              </p>
            </Media.Body>
          </Col>
        </Media>
      </Row>

      <CardContainer />

      </Container>
      <footer className="text-muted">
        <div className="container">
          <p className="float-right">
            <a href="#">Back to top</a>
          </p>
          <p>Some footer text</p>
          <p>Some footer text2</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
