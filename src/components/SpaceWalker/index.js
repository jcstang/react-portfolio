import './index.css';
import React from 'react';

export default function SpaceWalker(props) {

  return (
    <div>
      <h3>List of space walkers</h3>
      {
        props.people.map((person, index) => (
          <p>person.name</p>
        ))
      }
    </div>
    // <ol>
    //   {
    //     props.people.map((person, index) => (
    //       <p>person.name<p/>
    //     ))
    //   }
    // </ol>

  );
}

// $.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
//     var number = data['number'];
//     $('#spacepeeps').html(number);

//     data['people'].forEach(function (d) {
//          $('#astronames').append('<li>' + d['name'] + '</li>');
//     });
// });