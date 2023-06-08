import React, { Component } from 'react'
import Photo from '../src/assets/logo.jpg'

export class Home extends Component {
  render() {
    return (
    <div className='home'>
        <h2 className='home_title'>Welcome to my personal page</h2>
        <p className='home_description'>My name is Jorge, I live in Bilbao and I am passionate about technology and programming.</p>
        <p className='home_description'>I'm doing a bootcamp at The Bridge and I'm finding it very interesting.</p>
        <p className='home_description'>JavaScript is my favorite technology for programming.</p>
        <p className='home_description'>I also use these technologies:</p>
        <ul className='home_ul'>
            <li>Node</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
        <div className='photo'>
            <img src={Photo} alt='logo' className='home_photo'/>
            <img src={Photo} alt='logo' className='home_photo'/>
            <img src={Photo} alt='logo' className='home_photo'/>
       </div>
       <h1>jorge escobedo ranero</h1>
    </div>
    )
  }
}

export default Home