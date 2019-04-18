import React, { Component } from 'react';
import './App.css';
import GetEggs from './GetEggFromAPI';
import GetCharacter from "./GetCharacterFromAPI"

class App extends Component {
  render() {
    return (<div>
      <GetEggs />
      <GetCharacter />
    </div>
    );
  }
}

export default App;
