import React from 'react'
import './UserInput.css'


const userInput = () => {
    const userInputStyle = {
        marginTop: '3rem'
    }
    return (
        <div>
        <span>Enter Username:</span>
        <input className="UserInputText" style ={userInputStyle} type="text"></input>
        </div>
    )

}

export default userInput;