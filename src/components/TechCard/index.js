import React from 'react';

export default function TechCard(props) {
  return (
    <div className="column">
      <div className="card">
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