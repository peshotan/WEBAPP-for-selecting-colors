import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles';

const Styles = {
    root : {
        width: "20%",
        height:"25%",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        margin: "0 auto",
        marginBottom: "-3.5px",
    },
}

class DraggleColorBox extends Component {
    render() {
        let {classes} = this.props;

        return(
            <div className={classes.root} style={{backgroundColor : this.props.color.color}}>{this.props.color.name}</div>
        )
    }
}

export default withStyles(Styles)(DraggleColorBox);