import React from 'react';
import 'bulma/css/bulma.css';
import './index.css';

export default function Footer() {
  return (
    <footer className="container is-fluid footer btm-footer">
      <div className="content has-text-centered">
        <div className="content">
          <p className="title is-5 has-text-centered">“If I had asked people what they wanted, they would have said faster horses.”</p>
          <p className="subtitle has-text-centered">- Henry Ford</p>
        </div>

        <p className="find-me">
          <span className="my-name-footer">Jacob Stanger</span> Find me on Linkedin, GitHub & Twitter
                    </p>
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
    </footer>
  );
}