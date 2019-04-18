import axios from "axios";
import React, { Component } from "react";
import EggButton from "./Button";
import DisplayCardEgg from "./DisplayCardEgg";

class GetEggs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eggs: []
    };
  }

  componentDidMount() {
    axios.get("http://easteregg.wildcodeschool.fr/api/eggs/random").then(res => {
      this.setState({ eggs: {image:res.data.image, name:res.data.name, rarity:res.data.rarity} });
      
    });
  }
  render() {
      const eggs= this.state
      console.log(eggs);
      

    
    return (
      <div>
        <EggButton {...eggs} />
        <DisplayCardEgg {...eggs} />
      </div>
    );
  }
  }

export default GetEggs;
