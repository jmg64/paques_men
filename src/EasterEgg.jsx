import React, { Component } from "react";
import { Button } from "reactstrap";
import KEKE from "./Easter-egg.jpg";
import "./EasterEgg.css";

class Easter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            easterEgg: false
        };
    }

    bidule = () => {
        this.setState({ easterEgg: !this.state.easterEgg });
    };

    render() {
        console.log(this.state.easterEgg);
        let modal = this.state.easterEgg ? "" : "keke";
        console.log(modal);

        return (
            <div>
                <img className={modal} src={KEKE} alt="KEKE" />;
                <Button className="ButtonEaster" onClick={() => this.bidule()} />
            </div>
        );
    }
}

export default Easter;
