import axios from "axios";
import React, { Component } from "react";
import EggButton from "./Button";
import DisplayCardCharacter from "./DisplayCardCharacter";

class GetCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: []
    };
  }

  componentDidMount() {
    axios.get("http://easteregg.wildcodeschool.fr/api/characters/random").then(res => {
      this.setState({ character: {image:res.data.image, name:res.data.name, species:res.data.species, origin: res.data.origin} });
      
    });
  }
  render() {
      const character= this.state
      console.log(character);
      

    
    return (
      <div>
        <EggButton {...character} />
        <DisplayCardCharacter {...character} />
      </div>
    );
  }
  }

export default GetCharacter;