import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import Movie from './component/Movie';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Movie/>
     </div>
    )
  }
}


