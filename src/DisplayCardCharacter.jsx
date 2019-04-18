import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

class DisplayCardCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="Cards1">
                <Card style={{ width: "40%" }}>
                    <CardBody>
                        <CardTitle>Name : {this.props.character.name}</CardTitle>
                        <CardImg style={{ width: "30%" }} src={this.props.character.image} alt="Egg" />
                        <CardSubtitle>Species : {this.props.character.species}</CardSubtitle>
                        <CardSubtitle>Origin : {this.props.character.origin}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default DisplayCardCharacter;
