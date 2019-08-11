import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './Person/Person'
import './App.css';
import UserInput from './UserInput/UserInput'
import person from './Person/Person';
import Validation from './Validation/Validation'
import Char from './Char/Char'
import { log } from 'util';

class App extends Component {
  personList = [{
    name: 'John',
    age: 28,
    id: 1
  },
  {
    name: 'Bevs',
    age: 27,
    id: 2
  },
  {
    name: 'Richard',
    age: 28,
    id: 3
  }]

  state = {
    persons: [...this.personList],
    showPersons: false,
    userInput: ''
  }

  swithNameHandler = (name) => {
    this.personList[0].name = name;
    this.setState({ persons: [...this.personList] })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons
    })

  }

  newNameHandler = (event, id) => {
    // this.personList[0].name = event.target.value;
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    let person = {...this.state.persons[personIndex]}

    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({ persons: [...persons] })

  }

  togglePersons = () => {
    console.log(this.state.showPersons)
    this.setState({ showPersons: !this.state.showPersons });
  }

  inputChangeHandler = (event)=> {
    console.log(event.target.value);
    this.setState({userInput: event.target.value})

  }
  deleteCharacterHandler = (index) => {

    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');

    this.setState({userInput : updatedText});
  }

  render() {
    let persons = null;

    const charList = [...this.state.userInput.split('').map((ch, index) => {
      return (<Char 
        character={ch}
        key ={index}
        clicked ={ () => this.deleteCharacterHandler(index)}
      />)
    })]

    const style = {
      backgroundColor: 'blue',
      color: 'white',
      fontWeight: '600',
      padding: '10px',
      boxShadow: '1px 2px 3px #ccc',
      borderRadius: '2px',
      cursor: 'pointer'
    }

    console.log('this.state.showPersons' + this.state.showPersons)
    if (this.state.showPersons) {
      persons = this.state.persons.map((person, index) => {
        return (
          <Person
          click={() => this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          key = {person.id}
          changed={(event) => this.newNameHandler(event, person.id)} />
        )
     
      });
    }
    
  
    return (
      <div className="App">
        <h1>Hi, React World!</h1>
        <button style={style} onClick={this.togglePersons}>Toggle Persons</button>
        <UserInput></UserInput>
        <input type="text" onChange={this.inputChangeHandler} value={this.state.userInput}></input>
        <Validation inputLength ={this.state.userInput.length}></Validation>
        {persons}
        {charList}

      </div>

    );
  }
}

export default App;
