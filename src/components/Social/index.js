import React from 'react';
import './index.css';

export default function Social(props) {
  const defaultLink = "https://github.com/jcstang";
  return (
    <div className="columns">
      <div className="column is-half-mobile is-half-tablet is-half-desktop">
        <p className="card-footer-item">
          <a href={defaultLink} target="_blank" rel="noopener noreferrer">
            <button className="button is-primary is-outlined">
              <span className="icon"><i className="fab fa-github"></i></span>
              <span>GitHub</span>
            </button>
          </a>
        </p>
      </div>
      <div className="column is-half-mobile is-half-tablet is-half-desktop">
        <p className="card-footer-item">
          <a href={defaultLink} target="_blank" rel="noopener noreferrer">
            <button className="button is-link is-outlined">
              <span className="icon"><i className="fas fa-external-link-alt"></i></span>
              <span>View Site</span>
            </button>
          </a>
        </p>
      </div>
    </div>
  );
}