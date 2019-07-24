import React , {Component} from 'react';
import './ColorBox.css';

class ColorBox extends Component {


    render() {
        return(
            <div style={{background : this.props.background.color}} className={'colorbox'}>
                <div className={"colorbox__copy-container"}>
                <div className={"colorbox__box-content"}>
                    <span>{this.props.background.name}</span>
                </div>
                <button className={"colorbox__copy-button"}>Copy</button>
                </div>
                <span className={"colorbox__see-more"}>More</span>
            </div>
        )
    }
}

export default ColorBox