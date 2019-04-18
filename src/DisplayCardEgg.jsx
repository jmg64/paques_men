import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

class DisplayCardEgg extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>Name : {this.props.eggs.name}</CardTitle>
            <CardImg style={{width:"25%"}} src={this.props.eggs.image} alt="Egg" />
            <CardSubtitle>Rarity : {this.props.eggs.rarity}</CardSubtitle>
          </CardBody>
        </Card>
      </div>
      
      
    );
  }
}

export default DisplayCardEgg;
