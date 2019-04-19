import React, { Component } from "react";
import { Container, Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
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
            <Container className="Cards text-aligns: center ">
                <Card style={{ width: "100%" }} className={button}>
                    <CardBody>
                        <CardTitle>Name : {this.props.eggs.name}</CardTitle>
                        <Button class="col-12" onClick={this.clickHandle}>
                            <CardImg style={{ width: "50%" }} src={this.props.eggs.image} alt="Egg" />
                        </Button>
                        <CardSubtitle>Rarity : {this.props.eggs.rarity}</CardSubtitle>
                        <GetCharacter characterButton={this.state.characterButton} />
                    </CardBody>
                </Card>
            </Container>
        );
    }
}

export default DisplayCardEgg;
