import React from 'react';
import 'bulma/css/bulma.css';

export default function Card(props) {
  const defaultImage = "https://jcstang-s3.s3-us-west-1.amazonaws.com/img-assets/code-background.svg";
  return (
    <div className="column is-two-fifths-tablet is-two-fifths-desktop is-one-third-widescreen is-one-quarter-fullhd">
      <div class="card">

        <div class="card-header">
          <p class="card-header-title">{props.cardDetails.title}</p>
        </div>

            <div class="card-content">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src={props.cardDetails.imageUrl || defaultImage} alt={props.cardDetails.imgAlt} />
                </figure>
              </div>
              <p class="card-text">{props.cardDetails.description}</p>
            </div>


            <footer class="card-footer">
              <div className="column is-half-mobile is-half-tablet is-half-desktop">
                <p class="card-footer-item">
                  <a href={props.cardDetails.githubUrl} target="_blank" rel="noopener noreferrer">
                    <button class="button is-primary is-outlined">
                      <span class="icon"><i class="fab fa-github"></i></span>
                      <span>GitHub</span>
                    </button>
                  </a>
                </p>
              </div>
              <div className="column is-half-mobile is-half-tablet is-half-desktop">
                <p class="card-footer-item">
                  <a href={props.cardDetails.projectUrl} target="_blank" rel="noopener noreferrer">
                    <button class="button is-link is-outlined">
                      <span class="icon"><i class="fas fa-external-link-alt"></i></span>
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