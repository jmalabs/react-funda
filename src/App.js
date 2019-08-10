import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './Person/Person'
import './App.css';

class App extends Component {

 personList = [{
  name: 'John',
  age: 28
},
{
  name: 'Richard',
  age: 28
}

]
  state = {
    persons: [...this.personList

    ]
  }

  swithNameHandler = () => {
    this.personList[0].name = "bevs"
    this.setState({persons: [...this.personList]})

  }
  render() {
    return (
      <div className="App">
        <h1>Hi, React World!</h1>
        <button onClick={this.swithNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: ML</Person>
      </div>
    );
  }
}

export default App;
