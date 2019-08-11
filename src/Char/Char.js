import React from 'react'


const char = (props) => {
const style = {
    display: 'inline-block',
    border: '1px solid black',
    margin: '16px',
    padding: '16px',
    boxShadow: '1px 2px 3px red'
}

return (
    <div style={style} onClick={props.clicked}>
    {props.character}
    </div>
    
)

}

export default char;