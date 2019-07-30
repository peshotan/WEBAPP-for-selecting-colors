import React from 'react';
import {withStyles} from '@material-ui/styles';
import myStyles from './styles/PalleteFooterStyles'


let  PalleteFooter = (props) => {
    let {classes} = props;

    console.log("this is from footer: ", props);

    return(
        <footer className={classes.palleteFooter}>
            {props.paletteName}
            <span className={classes.palleteFooterEmoji}>{props.emoji}</span>
        </footer>
    )
}


export default withStyles(myStyles)(PalleteFooter)