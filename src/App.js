import React, { Component } from "react";
import "./App.css";
import GetEggs from "./GetEggFromAPI";
import Easter from "./EasterEgg";

class App extends Component {
    render() {
        return (
            <div>
                <GetEggs />
                <Easter />
            </div>
        );
    }
}

export default App;
