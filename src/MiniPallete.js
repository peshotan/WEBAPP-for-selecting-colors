// this is FUNCTIONAL Component and NOT a class component

import React from 'react';
import {withStyles} from '@material-ui/styles';


const myStyles = {
    root :{
        backgroundColor : "white",
        border: "2px solid darkgreen",
        borderRadius : "5px",
        padding : "0.5rem",
        position: "relative",
        overflow: "hidden",

        "&:hover" : {
            cursor: "pointer"
        }
    },

    colors: {
        backgroundColor: "grey",
    },

    title: {
        // "&h5": {
        display: "flex",
        justifyContent : "space-between",
        alignItems : "center",
        margin: 0,
        color: "black",
        paddingTop : "0.5rem",
        fontSize : "1rem",
        position : "relative"
        // }
    },

    emoji :{
        marginLeft : "0.5rem",
        fontSize : "1.5rem"
    }
}


function MiniPallete(props){

    console.log(props);

    let {classes, paletteName, id, colors, emoji } = props;

    return(
        <div className={classes.root}>
            <div className={classes.colors}></div>
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