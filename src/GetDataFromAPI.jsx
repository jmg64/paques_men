import axios from "axios";
import React, { Component } from "react";
import EggButton from "./Button";

class GetData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eggs: []
    };
  }

  componentDidMount() {
    axios.get("http://easteregg.wildcodeschool.fr/api/eggs/random").then(res => {
      this.setState({ eggs: res.data });
      
    });
  }
  render() {
    const { eggs } = this.state;
    console.log(eggs);
    
    return (
      <div>
        <EggButton {...eggs} />
      </div>
    );
  }
}

export default GetData;
