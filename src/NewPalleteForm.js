import React, {Component} from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableColorList from './DraggableColorList';
import {arrayMove} from 'react-sortable-hoc';
import PalleteFormNav from './PalleteFormNav';
import ColorPickerForm from './ColorPickerForm';
import styles from './styles/NewPalleteFormStyles';
import SeedColors from './seedColors'


class NewPalleteForm extends Component {
    static defaultProps = {
        maxLength : 20
    };

    constructor(props){
        super(props);
        this.state = {
            open : true,
            colors : SeedColors[0].colors
        };
    }

    // Component did Mount doesn't require binding


    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };


    handleSubmitColor = (newColor, newColorName) => {
        let newColorObject = {name : newColorName, color: newColor};
        this.setState({colors : [...this.state.colors, newColorObject]})
    };


    savePallete = (newPallete) => {
        // we are creating a new pallete OBJECT and then adding it do the MAIN array through APP.JS
        let pallete = {
            paletteName : newPallete.palleteName,
            id: newPallete.palleteName.toLowerCase().replace(/ /g, "-"),
            emoji: newPallete.emoji,
            colors : this.state.colors
        };
        this.props.savePallete(pallete);
        this.props.history.push('/')
    };

    handleDeleteIcon = (colorName) =>{
        this.setState(
            (curState)=> ({colors : curState.colors.filter((color) => color.name !== colorName )})
        )
    };

    //======= This method is for the draggable color box sorting =========
    onSortEnd = (arg) => {
        this.setState(curState => ({colors : arrayMove(curState.colors ,arg.oldIndex, arg.newIndex)}))
    };

    clearColors = (arg) => {
        this.setState({colors : []})
    };

    addRandomColor = (arg) => {
        const allColors = this.props.palletes.map(pallete => pallete.colors).flat();
        // now lets get a random color from this array
        let randomColor = allColors[Math.floor(Math.random()*allColors.length)];
        let isDuplicate = true;
        while (isDuplicate) {
            randomColor = allColors[Math.floor(Math.random()*allColors.length)]
            isDuplicate = this.state.colors.some(color => color === randomColor)
        }

        this.setState({colors : [...this.state.colors, randomColor]})
    };

    render() {
        const { classes} = this.props;
        const { open, colors } = this.state;
        const isPalleteFull = this.state.colors.length === this.props.maxLength;
        return (
            <div className={classes.root}>

                <PalleteFormNav
                    open={open}
                    palletes ={this.props.palletes}
                    savePallete = {this.savePallete}
                    handleDrawerOpen = {this.handleDrawerOpen}
                />

                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                           <ChevronLeftIcon />
                        </IconButton>
                    </div>

                    <Divider />


                    <div className={classes.container}>

                        <Typography variant={'h4'} gutterBottom>
                            Design Your Palette
                        </Typography>

                        <div className={classes.buttons}>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                onClick={this.clearColors}
                            >
                                Clear Pallete
                            </Button>
                            <Button
                                variant = "contained"
                                color = "primary"
                                className = {classes.button}
                                onClick = {this.addRandomColor}
                                disabled = {isPalleteFull}
                            >
                                Random Color!
                            </Button>
                        </div>

                        <ColorPickerForm
                            isPalleteFull = {isPalleteFull}
                            colors = {colors}
                            handleSubmitColor = {this.handleSubmitColor}
                        />
                    </div>
                </Drawer>
                <main
                    // the following syntax uses a prop called classNames
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />

                    <DraggableColorList
                        distance={20}
                        handleDeleteIcon={this.handleDeleteIcon}
                        colors={colors}
                        axis='xy'
                        onSortEnd = {this.onSortEnd}
                    />

                    {/*{colors.map(color=> (<DraggleColorBox*/}
                        {/*key={color.name}*/}
                        {/*color={color}*/}
                        {/*handleDeleteIcon={this.handleDeleteIcon} />))}*/}

                </main>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NewPalleteForm);
