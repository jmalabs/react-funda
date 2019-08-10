import React, { Component, useState } from 'react';
import logo from './logo.svg';
import Person from './Person/Person'
import './App.css';

const app = (props) => {

 const personList = [{
      name: 'John',
      age: 28
    },
    {
      name: 'Richard',
      age: 28
    }
  ]

  var [personState, personSetState] = useState( {
    persons: [...personList]
  });

  const swithNameHandler = () => {
    personList[0].name = "bevs"
    personSetState({persons: [...personList]})

  }
  
    return (
      <div className="App">
        <h1>Hi, React World!</h1>
        <button onClick={swithNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}>My Hobbies: Racing</Person>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: ML</Person>
      </div>
    );
}

export default app;
