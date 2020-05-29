import React from 'react';

export default function Card() {
  return (
    <div className="column">
      <div class="card">

        <div class="card-header">
          <p class="card-header-title">The Salty Beard | Recipe App</p>
        </div>

        <div class="card-content">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="./assets/img/project1-screen.png" alt="The Salty Beard" />
            </figure>
          </div>
          <p class="card-text">API driven app that dynamic rendered results using HTML, CSS, JQuery and Javascript.</p>
        </div>

        <footer class="card-footer">
          <p class="card-footer-item">
            <a href="https://github.com/Darkthistle982/recipe_box_app" target="_blank">
              <button class="button is-primary is-outlined">
                <span class="icon"><i class="fab fa-github"></i></span>
                <span>GitHub</span>
              </button>
            </a>
          </p>
          <p class="card-footer-item">
            <a href="https://darkthistle982.github.io/recipe_box_app/" target="_blank">
              <button class="button is-link is-outlined">
                <span class="icon"><i class="fas fa-external-link-alt"></i></span>
                <span>View Site</span>
              </button>
            </a>
          </p>
        </footer>

      </div>
    </div>
  );
}