import React from 'react';

export default function Item() {
  return (
    <div class="container">
      <div class="columns is-centered">
          {/* Cards */}
          <div class="column ">
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

          {/* <!-- card 2 --> */}
          <div class="column ">
            <div class="card">
              <div class="card-header">
                <p class="card-header-title">Word Guess Game - 80s style</p>
              </div>

              <div class="card-content">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="./assets/img/word-guess-screen.png" alt="Hangman game - 80s" />
                  </figure>
                </div>
                  <p class="card-text">HTML/CSS/JS stack app that will take user input to guess correct word. Frontend 80s theme. </p>
                </div>

                <footer class="card-footer">
                  <p class="card-footer-item">
                    <a href="https://github.com/jcstang/Word-Guess-Game" target="_blank">
                      <button class="button is-primary is-outlined">
                        <span class="icon"><i class="fab fa-github"></i></span>
                        <span>GitHub</span>
                      </button>
                    </a>
                  </p>
                  <p class="card-footer-item">
                    <a href="https://jcstang.github.io/Word-Guess-Game/" target="_blank">
                      <button class="button is-link is-outlined">
                        <span class="icon"><i class="fas fa-external-link-alt"></i></span>
                        <span>View Site</span>
                      </button>
                    </a>
                  </p>
                </footer>

              </div>
            </div>

            {/* <!-- card 3 - end of top row --> */}
          <div class="column ">
            <div class="card">
              <div class="card-header">
                <p class="card-header-title">PASSMAN | modern password manager</p>
              </div>

              <div class="card-content">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="./assets/img/passman-project-screenshot.png" alt="screenshot passman" />
                </figure>
              </div>
                  <p class="card-text">Fullstack HTML/CSS/JS/JQuery, Node, Express, Handlebars and MySQL. Encrypted passwords using the C++ version of bcrypt npm package.</p>
                </div>

                <footer class="card-footer">
                  <p class="card-footer-item">
                    <a href="https://github.com/jcstang/passMan" target="_blank">
                      <button class="button is-primary is-outlined">
                        <span class="icon"><i class="fab fa-github"></i></span>
                        <span>GitHub</span>
                      </button>
                    </a>
                  </p>
                  <p class="card-footer-item">
                    <a href="https://github.com/jcstang" target="_blank">
                      <button class="button is-link is-outlined" disabled>
                        <span class="icon"><i class="fas fa-external-link-alt"></i></span>
                        <span>View Site</span>
                      </button>
                    </a>
                  </p>
                </footer>
            </div>

          </div>
        </div>
      </div>
    );
}