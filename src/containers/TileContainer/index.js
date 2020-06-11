import React from 'react';
import './index.css';
import Social from '../../components/Social';

export default function TileContainer(props) {
  
  return (
    <>
      {/* nice space around it like a bubble */}
      <div className="container">
        {/* Start of the tiles */}
        <div class="tile is-ancestor">

          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification">
                  <p class="title">Seenit</p>
                  <p class="subtitle">Full Stack MERN app. API routes on Express using Mongo and Mongoose. React with React hooks</p>
                  <figure class="image is-4by3">
                    <img src="https://jcstang-s3.s3-us-west-1.amazonaws.com/img-assets/seenit-screenshot.png" alt='blah'/>
                  </figure>
                  <Social githubUrl='https://not-reddit-seenit.herokuapp.com/' siteUrl='https://github.com/jcstang/not-reddit' />
                </article>
                <article class="tile is-child notification is-warning">
                  <p class="title">...tiles</p>
                  <p class="subtitle">middle Bottom tile</p>
                </article>
                <article class="tile is-child notification is-warning">
                  <p class="title">...tiles2</p>
                  <p class="subtitle">very Bottom tile</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-info">
                  <p class="title">Middle tile</p>
                  <p class="subtitle">With an image</p>
                  <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png" alt='blah'/>
                  </figure>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-danger">
                <p class="title">Wide tile</p>
                <p class="subtitle">Aligned with the right tile</p>
                <div class="content">
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-success">
              <div class="content">
                <p class="title">Tall tile</p>
                <p class="subtitle">With even more content</p>
                <div class="content">
                </div>
              </div>
            </article>
          </div>

        </div>

      </div>
    </>
  );
}