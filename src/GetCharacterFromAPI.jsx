import axios from "axios";
import React, { Component } from "react";
import DisplayCardCharacter from "./DisplayCardCharacter";

class GetCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: {}
        };
    }

    componentDidMount() {
        axios.get("http://easteregg.wildcodeschool.fr/api/characters/random").then(res => {
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
        const character = this.state.character;

        return (
            <div>
                <DisplayCardCharacter character={character} characterButton={this.props.characterButton} />
            </div>
        );
    }
}

export default GetCharacter;
