import './index.css';
import React from 'react';

export default function SpaceWalker() {

  return (
    <h3>List of space walkers</h3>
  );
}

// $.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
//     var number = data['number'];
//     $('#spacepeeps').html(number);

//     data['people'].forEach(function (d) {
//          $('#astronames').append('<li>' + d['name'] + '</li>');
//     });
// });