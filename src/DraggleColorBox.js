import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const Styles = {
    root : {
        width: "20%",
        height:"25%",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        margin: "0 auto",
        marginBottom: "-3.5px",
        transition: "1s ease",
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

class DraggleColorBox extends Component {



    render() {
        let {classes} = this.props;

        return(
            <div
                className={classes.root}
                style={{backgroundColor : this.props.color.color}}
            >
                <div className={classes.boxContent}>
                    <span>{this.props.color.name}</span>
                    <span onClick={()=> this.props.handleDeleteIcon(this.props.color.name)}><DeleteIcon/></span>
                </div>

            </div>
        )
    }
}

export default withStyles(Styles)(DraggleColorBox);