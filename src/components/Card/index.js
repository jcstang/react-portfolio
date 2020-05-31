import React from 'react';
import 'bulma/css/bulma.css';

export default function Card(props) {
  const defaultImage = "https://jcstang-s3.s3-us-west-1.amazonaws.com/img-assets/code-background.svg";
  return (
    <div className="column is-two-fifths-tablet is-two-fifths-desktop is-one-third-widescreen is-one-quarter-fullhd">
      <div className="card">

        <div className="card-header">
          <p className="card-header-title">{props.cardDetails.title}</p>
        </div>

            <div className="card-content">
              <div className="card-image">
                <figure class="image is-4by3">
                  <img src={props.cardDetails.imageUrl || defaultImage} alt={props.cardDetails.imgAlt} />
                </figure>
              </div>
              <p className="card-text">{props.cardDetails.description}</p>
            </div>


            <footer className="card-footer">
              <div className="column is-half-mobile is-half-tablet is-half-desktop">
                <p className="card-footer-item">
                  <a href={props.cardDetails.githubUrl} target="_blank" rel="noopener noreferrer">
                    <button className="button is-primary is-outlined">
                      <span className="icon"><i className="fab fa-github"></i></span>
                      <span>GitHub</span>
                    </button>
                  </a>
                </p>
              </div>
              <div className="column is-half-mobile is-half-tablet is-half-desktop">
                <p className="card-footer-item">
                  <a href={props.cardDetails.projectUrl} target="_blank" rel="noopener noreferrer">
                    <button className="button is-link is-outlined">
                      <span className="icon"><i className="fas fa-external-link-alt"></i></span>
                      <span>View Site</span>
                    </button>
                  </a>
                </p>
              </div>
            </footer>

          </div>
        </div>
  );
}