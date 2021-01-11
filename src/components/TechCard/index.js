import React from 'react';
import './index.css';

export default function TechCard(props) {
  return (
    <div className='column'>
      <div className='tile is-parent notification is-centered'>
        <div className='card-content'>
          <i className={`${props.iconCode} ${props.sizeCode}`} id='tech-icon'></i>
          <p className='title is-4' id='tech-title'>{props.title}</p>
        </div>
      </div>
    </div>
  );
}
