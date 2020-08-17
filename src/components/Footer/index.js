import React, { useState } from "react";
import "bulma/css/bulma.css";
import "./index.css";
import Social from "../Social";
import SpaceWalker from "../SpaceWalker";
import axios from 'axios';

export default function Footer() {
  
  const getPeopleInSpace = () => {
    const url = "http://api.open-notify.org/astros.json?callback=";
    axios.get(url)
      .then( function(response) {
        if(response.status === 200) {
          console.log(response.data.people);
          setPeople(response.data.peopele);
        }
      })
      .catch(function(error) {
        console.log(error);
      });

  }

  const [people, setPeople] = useState([]);
  // getPeopleInSpace();

  const spaceClickHandler = (event) => {
    // console.log(event.target);
    console.log('ive been clicked!');
    // getPeopleInSpace();
  }



  return (
    <footer className="container is-fluid footer btm-footer">
      {/* <p id="space-man">
        <button className="btn" onClick={spaceClickHandler}>
          <i className="fas fa-user-astronaut"></i>
        </button>
      </p> */}
      <div className="content has-text-centered">
        <div className="content">
          <p className="title is-5 has-text-centered">
            “If I had asked people what they wanted, they would have said faster
            horses.”
          </p>
          <p className="subtitle has-text-centered">- Henry Ford</p>
        </div>

        <p className="find-me">
          <span className="my-name-footer">Jacob Stanger</span> Find me on
          Linkedin, GitHub & Twitter
        </p>
        <Social />
        {/* <SpaceWalker people={people}/> */}
      </div>
    </footer>
  );
}
