import React, { Component } from 'react';
import {Button} from 'reactstrap'

class EggButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div>
            <Button color="info">info</Button>{' '}
        </div>  );
    }
}
  
export default EggButton ;