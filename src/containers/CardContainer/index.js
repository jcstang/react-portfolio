import React from 'react';
import Card from '../../components/Card';
import 'bulma/css/bulma.css';
import './index.css';


export default function CardContainer(props) {
  return (
    <div className="container">
      <div className="columns is-centered is-full-mobile">
        {
          props.cardList.map((card, index) => (
            <Card key={index} cardDetails={card}/>
          ))
        }
      </div>
    </div>
  );
}