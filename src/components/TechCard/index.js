import React from 'react';

export default function TechCard(props) {
  return (
    <div className="column">
      <div className="tile is-parent notification is-centered">
        <div className="card-content">
          <i className={`${props.iconCode} ${props.sizeCode}`}></i>
          <p className="title is-4">
            {props.title}
          </p>
        </div>
      </div>
    </div>
  );
}