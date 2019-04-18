import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import GetCharacter from "./GetCharacterFromAPI"
import "./DisplayCardEgg.css";

class DisplayCardEgg extends Component {
    constructor(props) {
        super(props);
        this.state = {
          characterButton:false,
        };
    }

    clickHandle= () => {
      this.setState({characterButton : true});
    };

    render() {
      const character=this.state
      
        let button;
        this.props.eggButton ? (button = "") : (button = "Content-toggle");
        return (
            <div className="Cards">
                <Card className={button}>
                    <CardBody>
                        <CardTitle>Name : {this.props.eggs.name}</CardTitle>
                        <Button onClick={()=> this.clickHandle } >
                            <CardImg style={{ width: "50%" }} src={this.props.eggs.image} alt="Egg" />
                        </Button>
                        <CardSubtitle>Rarity : {this.props.eggs.rarity}</CardSubtitle>
                        <GetCharacter {...character}/>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default DisplayCardEgg;
