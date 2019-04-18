import React, { Component } from 'react';
import {Button} from 'reactstrap'
import './Button.css'

class EggButton extends Component {
    render() {         
        return (<div>
            <Button color="info">Get random egg</Button>{' '}
        </div>  );
    }
}
  
export default EggButton ;