import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import headshot from '../../headshot-trees-2.svg';
import './index.css';

export default function Header() {
  return (
    <div className="container">
      <Row>
        <h1 className="title">Full Stack Web Developer</h1>
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
              <h5 className="title is-5">About me</h5>
              <p>
                Full stack web developer with a passion for iOS development. Educated in computer science at Weber State University and recently earned a coding certificate from the University of Utah. Life-long learner that thrives in team environments and is driven by complex problem solving with more than 100 hours on Udemy and Pluralsight. Expertise interfacing and scoping solutions with clients and clearly explaining technical topics to stakeholders.
              </p>
            </Media.Body>
          </Col>
        </Media>
      </Row>
    </div>
  );
}