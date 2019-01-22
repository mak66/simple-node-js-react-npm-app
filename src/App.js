import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="Alt4-logo" alt="logo" />
        <img src={logo} className="Alt3-logo" alt="logo" />
        <img src={logo} className="Alt2-logo" alt="logo" />
        <img src={logo} className="Alt1-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="Alt1-logo" alt="logo" />
        <img src={logo} className="Alt2-logo" alt="logo" />
        <img src={logo} className="Alt3-logo" alt="logo" />
        <img src={logo} className="Alt4-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Mark</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form id="send first name" aria-lable="Enter your first name">
          First name:<br/>
          <input type="text" name="firstname" aria-label="firstname_field"/><br/>
          <input type="submit" aria-label="submit button"/>
        </form>
      </div>
    );
  }
}

export default App;
