import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import "./DisplayCardEgg.css";

class DisplayCardEgg extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let button;
        this.props.eggButton ? (button = "") : (button = "Content-toggle");
        return (
            <div className="Cards">
                <Card className={button}>
                    <CardBody>
                        <CardTitle>Name : {this.props.eggs.name}</CardTitle>
                        <Button>
                            <CardImg style={{ width: "25%" }} src={this.props.eggs.image} alt="Egg" />
                        </Button>
                        <CardSubtitle>Rarity : {this.props.eggs.rarity}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default DisplayCardEgg;
