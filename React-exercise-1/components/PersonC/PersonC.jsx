import React, { Component } from 'react'

export class PersonC extends Component {
  render() {
    return (
    <div>
       <span><h2>My name is {this.props.name}</h2></span>
       <span><h2>My surname is {this.props.surname}</h2></span>
       <span><h2>I am {this.props.age} years old</h2></span>
    </div>
    )
  }
}

export default PersonC