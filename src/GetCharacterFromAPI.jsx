import axios from "axios";
import React, { Component } from "react";
import DisplayCardCharacter from "./DisplayCardCharacter";

class GetCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: []
    };
  }

  componentDidMount() {
    axios
      .get("http://easteregg.wildcodeschool.fr/api/characters/random")
      .then(res => {
        this.setState({
          character: {
            image: res.data.image,
            name: res.data.name,
            species: res.data.species,
            origin: res.data.origin
          }
        });
      });
  }
  render() {
    console.log(this.props.character);
    const character = this.state;

    return (
      <div>
        <DisplayCardCharacter {...character} {...this.props.characterButton}/>
      </div>
    );
  }
}

export default GetCharacter;
