import React from 'react';
import styles from './Person.css'

const person = props => {

    return (
  <div  className={styles.Person}>
            <p onClick={props.clicked}>I'm {props.name} and I'm {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>

        </div>
    
    )
      

    

};

export default person;