import React, { Component } from 'react';
import './App.css';
import Party from './Party';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo-bg">
            <img src="https://robohash.org/set_set4/bgset_bg1/party" className="App-logo" alt="logo" />
          </div>
          <h1 className="App-title">Brendan's Party Cats!</h1>
        </header>
        <p className="App-intro">
          Welcome to the party! Enter some text below to find your dance partner
        </p>
        <Party />
      </div>
    );
  }
}

export default App;
