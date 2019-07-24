import React , {Component} from 'react';
import './ColorBox.css';

class ColorBox extends Component {


    render() {
        return(
            <div style={{background : this.props.background.color}} className={'colorbox'}>
                <span> {this.props.background.name} <br/></span>
                <span>MORE</span>
            </div>
        )
    }
}

export default ColorBox