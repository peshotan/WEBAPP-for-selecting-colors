import React , {Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './ColorBox.css';


class ColorBox extends Component {

    constructor(props){
        super(props);
        this.state = {
            isCoping : false
        }
    }

    // handleClick = (e) => {
    //     this.setState({isCoping : true})
    //     setTimeout(()=>this.setState({isCoping : false}), 1500)
    // }

    handleClick = (e) => {
        this.setState(
            {isCoping : true},
            () => setTimeout(()=> {this.setState({isCoping : false})}, 2000)
        )
    }

    render() {

        let copingOrNot = "";

        (this.state.isCoping) ? copingOrNot = "colorbox__copy-overlay colorbox__copy-overlay__expanded" : copingOrNot = 'colorbox__copy-overlay';

        return(
            <CopyToClipboard onCopy={this.handleClick} text={this.props.background.color}>
                <div style={{background : this.props.background.color}} className={'colorbox'}>

                    <div style={{background : this.props.background.color}} className={copingOrNot}>
                    </div>

                    <div className={`colorbox__copy-msg ${this.state.isCoping && "show"}`}>
                        <h1>COPIED!</h1>
                        <p>{this.props.background.color}</p>
                    </div>


                    <div className={"colorbox__copy-container"}>
                    <div className={"colorbox__box-content"}>
                        <span>{this.props.background.name}</span>
                    </div>
                    <button className={"colorbox__copy-button"}>Copy</button>
                    </div>
                    <span className={"colorbox__see-more"}>More</span>
                </div>
            </CopyToClipboard>

        )
    }
}

export default ColorBox