import React from 'react';
import './index.css';

export default function Social(props) {
  return (
    <div className='social-container'>
      {/* Email me */}
      <a
        className='button is-info'
        href='mailto:jacobcstanger@gmail.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='icon'>
          <i className='fas fa-envelope'></i>
        </span>
        <span>Email</span>
      </a>

      {/* LinkedIn Link */}
      <a
        className='button is-link'
        href='https://www.linkedin.com/in/jacob-stanger/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='icon'>
          <i className='fab fa-linkedin'></i>
        </span>
        <span>LinkedIn</span>
      </a>

      {/* Github link */}
      <a
        className='button is-link'
        href='https://github.com/jcstang'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='icon'>
          <i className='fab fa-github'></i>
        </span>
        <span>GitHub</span>
      </a>

      {/* Twitter Link */}
      <a
        className='button is-info'
        href='https://twitter.com/jc_stang'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='icon'>
          <i className='fab fa-twitter'></i>
        </span>
        <span>Twitter</span>
      </a>

      {/* Resume link */}
      <a
        className='button is-info'
        href='https://www.dropbox.com/s/yk8fwp7ud19zyd3/Jacob%20Stanger%20-%20Resume.docx?dl=0'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='icon'>
          <i className='fab fa-dropbox'></i>
        </span>
        <span>My Resume</span>
      </a>
    </div>
  );
}
