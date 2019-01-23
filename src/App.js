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
        <form id="send first name" role="form" aria-label="Details Form">
          <label for="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" aria-label="first_name_field"/><br/>
          <label for="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" aria-label="last_name_field" /><br/><br/>
          <label for="age">Age:</label>
          <input type="text" name="age" id="age" aria-label="age_field" /><br/><br/>
          <input type="submit" aria-label="submit button"/>
        </form>
      </div>
    );
  }
}

export default App;
