import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Hike Uintah Basin Trails</h1>
        </header>
        <p className="App-intro">
          A project to highlight the world class hiking trails in the Uintah Basin.
        </p>
      </div>
    );
  }
}

export default App;
