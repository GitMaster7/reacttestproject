import React from 'react';
import './Person.css';


function Person(props) {
    return (
      <div className="person">
        <h1>{props.name}</h1>
        <p>Your Age: {props.age}</p>
      </div>
    );
  }
  
  var app = (
    <div>
       <Person name="Max" age="28" />
       <Person name="Manu" age="29" />
    </div>
  );
  
  export default Person;




