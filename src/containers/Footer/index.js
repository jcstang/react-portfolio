import React from 'react';
import 'bulma/css/bulma.css';
import './index.css';

export default function Footer() {
    return (
        <footer class="container is-fluid footer btm-footer">
            <div class="content has-text-centered">
                    <div class="content">
                        <p class="title is-5 has-text-centered">“If I had asked people what they wanted, they would have said faster horses.”</p>
                        <p class="subtitle has-text-centered">- Henry Ford</p>
                    </div>

                    <p class="find-me">
                        <span class="my-name-footer">Jacob Stanger</span> Find me on Linkedin, GitHub & Twitter
                    </p>
                    <a class="button is-link social-btn" href="https://www.linkedin.com/in/jacob-stanger/" target="_blank" rel="noopener noreferrer">
                        <span class="icon"><i class="fab fa-linkedin"></i></span>
                        <span>LinkedIn</span>
                    </a>

                    <a class="button is-link social-btn" href="https://github.com/jcstang" target="_blank" rel="noopener noreferrer">
                        <span class="icon"><i class="fab fa-github"></i></span>
                        <span>GitHub</span>
                    </a>

                    <a class="button is-info social-btn" href="https://twitter.com/jc_stang" target="_blank" rel="noopener noreferrer">
                        <span class="icon"><i class="fab fa-twitter"></i></span>
                        <span>Twitter</span>
                    </a>

            </div>
        </footer>
    );
}