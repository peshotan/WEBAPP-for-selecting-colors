// this is FUNCTIONAL Component and NOT a class component

import React from 'react';
import {withStyles} from '@material-ui/styles';
import myStyles from './styles/MiniPalleteStyles'


function MiniPallete(props){


    let {classes, paletteName, colors, emoji } = props;
    const miniColorBoxes = colors.map((color,idx)=>(
        <div className={classes.miniColor}
             style={{backgroundColor : color.color}}
             key={idx}
        ></div>
    ));

    return(
        // DON'T use this.props just use props because this is function NOT a class
        // HERE WE USE the correct spelling for Pallete which is PALETTE

        <div onClick={props.handleRoute} className={classes.root}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>
                {paletteName}
                <span className={classes.emoji}>
                    {emoji}
                </span>
            </h5>
        </div>
    )
}

export default withStyles(myStyles)(MiniPallete)