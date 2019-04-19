import React, { Component } from "react";
import { Container, Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./DisplayCardCharacter.css";

class DisplayCardCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let buttonStyle = this.props.characterButton ? "" : "button";
        return (
            <Container className="Cards-character">
                <Card className={buttonStyle}>
                    <CardBody>
                        <CardTitle>Name : {this.props.character.name}</CardTitle>
                        <CardImg style={{ width: "30%" }} src={this.props.character.image} alt="Egg" />
                        <CardSubtitle className="Marge">Species : {this.props.character.species}</CardSubtitle>
                        <CardSubtitle>Origin : {this.props.character.origin}</CardSubtitle>
                    </CardBody>
                </Card>
            </Container>
        );
    }
}

export default DisplayCardCharacter;
