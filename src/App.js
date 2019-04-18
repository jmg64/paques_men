import React, { Component } from 'react';
import './App.css';
import GetData from './GetDataFromAPI';

class App extends Component {
  render() {
    return (<div className='App' >
    
      <GetData />
    </div>
    );
  }
}

export default App;
