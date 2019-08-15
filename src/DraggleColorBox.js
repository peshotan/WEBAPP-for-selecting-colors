import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import {SortableElement} from 'react-sortable-hoc';
import styles from './styles/DraggableColorBoxStyles';


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

export default withStyles(styles)(DraggleColorBox);