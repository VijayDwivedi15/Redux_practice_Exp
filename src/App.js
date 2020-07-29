import React, { Component } from 'react';

import Persons from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li style={{fontWeight:"bold"}}>Redux Practice with combining Local UI State and Redux</li>
        </ul>
        <Persons />
      </div>
    );
  }
}

export default App;
