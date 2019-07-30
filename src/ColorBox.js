import React , {Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/styles';
import chroma from 'chroma-js';
import myStyles from './styles/ColorBoxStyles';
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
                             `${classes.copyOverlay} ${this.state.isCoping && classes.expanded}`}>
                    </div>

                    <div className={`${classes.copyMsg} ${this.state.isCoping && classes.show}`}>
                        <h1>COPIED!</h1>
                        <p className={classes.isLightBackground}>{color}</p>
                    </div>


                    <div>
                    <div className={classes.boxContent}>
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