import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import './DisplayCardCharacter.css'

class DisplayCardCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        let button;
        this.props.characterButton ? (button = "") : (button = "Content-toggle");
        return (
            <div className="Cards">
                <Card className={button}>
                    <CardBody>
                        <CardTitle>Name : {this.props.character.name}</CardTitle>
                        <CardImg style={{ width: "25%" }} src={this.props.character.image} alt="Egg" />
                        <CardSubtitle>Species : {this.props.character.species}</CardSubtitle>
                        <CardSubtitle>Origin : {this.props.character.origin}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default DisplayCardCharacter;
