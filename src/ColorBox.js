import React , {Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
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
        console.log("HELLO");
        this.setState({isCoping : true},
            () => setTimeout(()=> {this.setState({isCoping : false})}, 2000)
        )
    }

    render() {

        let name = this.props.name;
        let color = this.props.color;

        let copingOrNot = "";
        (this.state.isCoping) ? copingOrNot = "colorbox__copy-overlay colorbox__copy-overlay__expanded" : copingOrNot = 'colorbox__copy-overlay';

        return(
            <CopyToClipboard onCopy={this.handleClick} text={color}>
                <div style={{background : color}} className={'colorbox'}>

                    {/*The div below is the that expands*/}
                    <div style={{background : color}} className={copingOrNot}></div>

                    <div className={`colorbox__copy-msg ${this.state.isCoping && "show"}`}>
                        <h1>COPIED!</h1>
                        <p>{color}</p>
                    </div>


                    <div className={"colorbox__copy-container"}>
                    <div className={"colorbox__box-content"}>
                        <span>{name}</span>
                    </div>
                    <button className={"colorbox__copy-button"}>Copy</button>
                    </div>
                    <Link exact to={this.props.moreURL} onClick={(e)=> e.stopPropagation()}>
                    <span className={"colorbox__see-more"}>More</span>
                    </Link>
                </div>
            </CopyToClipboard>

        )
    }
}

export default ColorBox