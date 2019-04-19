import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import GetCharacter from "./GetCharacterFromAPI";
import "./DisplayCardEgg.css";

class DisplayCardEgg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterButton: false
        };
    }

    clickHandle = () => {
        this.setState({ characterButton: !this.state.characterButton });
    };

    render() {
        let button;
        this.props.eggButton ? (button = "") : (button = "Content-toggle");
        return (
            <div className="Cards">
                <Card style={{ width: "100%" }} className={button}>
                    <CardBody>
                        <CardTitle>Name : {this.props.eggs.name}</CardTitle>
                        <Button onClick={this.clickHandle}>
                            <CardImg style={{ width: "50%" }} src={this.props.eggs.image} alt="Egg" />
                        </Button>
                        <CardSubtitle>Rarity : {this.props.eggs.rarity}</CardSubtitle>
                        <GetCharacter characterButton={this.state.characterButton} />
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default DisplayCardEgg;
