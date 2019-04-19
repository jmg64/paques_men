import React, { Component } from 'react';
import './App.css';
import GetEggs from './GetEggFromAPI';


class App extends Component {
  render() {
    return (<div>
      <body>
      <GetEggs />
      </body>
    </div>
    );
  }
}

export default App;
