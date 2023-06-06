import React from 'react'

const PersonF = (props) => {
  return (
    <div>
       <span><h2>My name is {props.name}</h2></span>
       <span><h2>My surname is {props.surname}</h2></span>
       <span><h2>I am {props.age} years old</h2></span>
    </div>
  )
}

export default PersonF