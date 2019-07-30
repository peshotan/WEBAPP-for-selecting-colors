import React , {Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/styles';
import chroma from 'chroma-js';
import './ColorBox.css';

const myStyles = {

    isDarkBackground : {
        color: (props) => chroma(props.color).luminance() < 0.4 ? "white" : "black"
    },

    isLightBackground : {
        color: (props) => chroma(props.color).luminance() < 0.4 ? "white" : "black"
    },

    seeMore: {
        position: "absolute",
        right: "0",
        bottom: "0",
        background: "rgba(255,255,255,0.3)",
        color: (props) => chroma(props.color).luminance() < 0.4 ? "white" : "black",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase"
    },
    copyButton : {
        height: "30px",
        width: "100px",
        display: "inline-block",
        top: "50%",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        outline: "none",
        background: "rgba(255,255,255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        color: (props) => chroma(props.color).luminance() < 0.4 ? "white" : "black",
        textTransform: "uppercase",
        border : "none",
        opacity: "0",
        transition: "0.3s ease"
    },

    colorbox : {
        width: "20%",
        height: props => props.showFullPallete ? "25%" : "50%",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        margin: "0 auto",
        marginBottom: "-3.5px",

        "&:hover button" : {
            opacity : 1
        }
    }

};




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


        let {name, color, classes} = this.props;
        console.log(name, color, chroma(color).luminance());
        // let isDarkBackground = chroma(color).luminance() < 0.09;
        // let isLightBackground = chroma(color).luminance() > 0.4;

        return(
            <CopyToClipboard onCopy={this.handleClick} text={color}>
                <div style={{background : color}} className={classes.colorbox}>

                    {/*The div below is the one that EXPANDS */}

                    <div style={{background : color}}
                         className={
                             `colorbox__copy-overlay ${this.state.isCoping && "colorbox__copy-overlay__expanded"}`}>
                    </div>

                    <div className={`colorbox__copy-msg ${this.state.isCoping && "show"}`}>
                        <h1>COPIED!</h1>
                        <p className={classes.isLightBackground}>{color}</p>
                    </div>


                    <div className={"colorbox__copy-container"}>
                    <div className={"colorbox__box-content"}>
                        <span className={classes.isDarkBackground}>
                            {name}
                        </span>
                    </div>
                    <button
                        className={classes.copyButton}>Copy</button>
                    </div>

                    {/*Adding logic to check whether we need to show the more URL*/}

                    {this.props.showFullPallete
                    &&
                    <Link exact to={this.props.moreURL} onClick={(e)=> e.stopPropagation()}>
                        <span className={classes.seeMore}>More</span>
                    </Link>}

                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(myStyles)(ColorBox)