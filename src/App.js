import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Roster from './components/Roster';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Roster/>
      </div>
    );
  }
}

export default App;
