// this is FUNCTIONAL Component and NOT a class component

import React from 'react';
import {withStyles} from '@material-ui/styles';


const myStyles = {
    root :{
        backgroundColor : "white",
        borderRadius : "5px",
        padding : "0.5rem",
        position: "relative",
        overflow: "hidden",

        "&:hover" : {
            cursor: "pointer"
        }
    },

    colors: {
        backgroundColor: "transparent",
        height: "150px",
        width : "100%",
        borderRadius : "5px",
        overflow : "hidden"
    },

    title: {
        // "&h5": {
        display: "flex",
        justifyContent : "space-between",
        alignItems : "center",
        margin: 0,
        color: "black",
        paddingTop : "0.5rem",
        position : "relative",
        textTransform : "uppercase",
        fontWeight : "100",
        fontSize : "0.8rem"
        // }
    },

    emoji :{
        marginLeft : "0.5rem",
        fontSize : "1.5rem"
    },

    miniColor : {
        height : "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom : "-3.5px"
    }

}


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