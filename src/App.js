// import React from 'react';
import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import Wel from './Wel';
import Thx from './Thx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wel></Wel>
        <Thx/>
      </div>
    );
  }
}

export default App;
