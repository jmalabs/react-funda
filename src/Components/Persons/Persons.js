import React from 'react'
import Person from './Person/Person'

const persons = (props) =>   props.persons.map((person, index) => {
    console.log(props.clicked)
           return <Person 
                name ={person.name}
                age = {person.age}
                key = {person.id}
                clicked ={() => props.clicked(index)}
                changed ={(event) => props.changed(event, person.id)}
            />
}
);




export default persons;