import React from 'react';
// import headshot from '../../headshot-trees-300x311.png';
import headshot from '../../images/headshot-trees-300x311.png';
import './index.css';

export default function Header() {
  return (
    <section className="header-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img
              className="align-self-start mr-3"
              src={headshot}
              alt="Generic placeholder"
            />
          </div>
          <div className="col-md-9">
            <h5 className="title is-2">Jacob Stanger</h5>
            <h5 className="title is-3">About me</h5>
            <p>
              Full stack web developer with a passion for iOS development. Educated in computer science at Weber State University and recently earned a coding certificate from the University of Utah. Life-long learner that thrives in team environments and is driven by complex problem solving with more than 100 hours on Udemy and Pluralsight. Expertise interfacing and scoping solutions with clients and clearly explaining technical topics to stakeholders.
            </p>
            <hr />
            <p><strong>Email</strong> JacobcStanger@gmail.com</p>
            <div className="row container is-fluid">
              <a className="button is-link social-btn" href="https://www.linkedin.com/in/jacob-stanger/" target="_blank" rel="noopener noreferrer">
                <span className="icon"><i className="fab fa-linkedin"></i></span>
                <span>LinkedIn</span>
              </a>

              <a className="button is-link social-btn" href="https://github.com/jcstang" target="_blank" rel="noopener noreferrer">
                <span className="icon"><i className="fab fa-github"></i></span>
                <span>GitHub</span>
              </a>

              <a className="button is-info social-btn" href="https://twitter.com/jc_stang" target="_blank" rel="noopener noreferrer">
                <span className="icon"><i className="fab fa-twitter"></i></span>
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}