import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import {SortableElement} from 'react-sortable-hoc'

const Styles = {
    root : {
        width: "20%",
        height:"25%",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        margin: "0 auto",
        marginBottom: "-3.5px",
        "&:hover svg" : {
            color: "#fff",
            transform: "Scale(1.5)"
        },

        "& svg" : {
            transition: "all 1s ease"
        }
    },
    boxContent: {
        width: "100%",
        position: "absolute",
        left: "0",
        bottom: "0",
        padding: "10px",
        textAlign: "left",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
        lineHeight: "12px",

        "& span": {
            verticalAlign: "middle"
        }

    }


}

const DraggleColorBox = SortableElement( (props) => {

        let {classes} = props;

        return(
            <div
                className={classes.root}
                style={{backgroundColor : props.color.color}}
            >
                <div className={classes.boxContent}>
                    <span>{props.color.name}</span>
                    <span onClick={()=> props.handleDeleteIcon(props.color.name)}><DeleteIcon/></span>
                </div>

            </div>
        )
})

export default withStyles(Styles)(DraggleColorBox);