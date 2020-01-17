// this is FUNCTIONAL Component and NOT a class component

import React from 'react';
import {withStyles} from '@material-ui/styles';
import myStyles from './styles/MiniPalleteStyles';
import DeleteIcon from '@material-ui/icons/Delete';


class MiniPallete extends React.Component{

    deleteMiniPallete = (evt) => {
        evt.stopPropagation();
        this.props.openDialog(this.props.id);
    };

    handleClick2 = (id) => {
        this.props.handleRoute(this.props.id)
    };

    render() {
        let {classes, paletteName, colors, emoji, id} = this.props;
        const miniColorBoxes = colors.map((color, idx) => (
            <div className={classes.miniColor}
                 style={{backgroundColor: color.color}}
                 key={idx}
            ></div>
        ));

        return (
            // DON'T use this.props just use props because this is function NOT a class
            // HERE WE USE the correct spelling for Pallete which is PALETTE

            <div onClick={this.handleClick2} className={classes.root}>
                <DeleteIcon
                    className={classes.deleteIcon}
                    style={{transition: "all 0.4s ease"}}
                    onClick={this.deleteMiniPallete}
                />
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
}

export default withStyles(myStyles)(MiniPallete)