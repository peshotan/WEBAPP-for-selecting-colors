import React, {Component} from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import DraggleColorBox from './DraggleColorBox';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const drawerWidth = 360;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        height: "calc(100vh - 64px)",
        padding: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    buttonDiv : {
        display : "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "4rem"
    }
});

class NewPalleteForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: true,
            newName : "",
            currentColor : "#000",
            colorPallete : [{name : "blue",color :"#fff"}]
        };
    }

    // Component did Mount doesn't require binding
    componentDidMount() {
        ValidatorForm.addValidationRule("isColorUnique", (value) => {
            return this.state.colorPallete.every(color => color.color !== this.state.currentColor)
        });

        ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
            return this.state.colorPallete.every(color => color.name.toLowerCase() !== value.toLowerCase())
        })
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleColorChange = (color) => {
        this.setState({currentColor: color.hex})
    };

    handleSubmitColor = (e) => {
        let newColorObject = {name : this.state.newName, color: this.state.currentColor};
        this.setState({colorPallete : [...this.state.colorPallete, newColorObject] , newName : ""})
    };

    handleFormValidation = (e) => {
        this.setState({newName : e.target.value})
    };

    render() {
        const { classes} = this.props;
        const { open, newName , currentColor, colorPallete } = this.state;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Persistent drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
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

                    <Typography variant={'h4'} color={"inherit"}>
                        Please select your Color!
                    </Typography>

                    <div className={classes.buttonDiv}>
                        <Button variant="contained" color="secondary" className={classes.button}>
                            Clear Pallete
                        </Button>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Random Color!
                        </Button>
                    </div>

                    <ChromePicker
                        color = {currentColor}
                        onChangeComplete = {this.handleColorChange}

                    />

                    <ValidatorForm
                        onSubmit={this.handleSubmitColor}
                        instantValidate = {false}
                    >
                        <TextValidator
                            value = {newName}
                            onChange = {this.handleFormValidation}
                            validators = {["required","isColorUnique","isColorNameUnique"]}
                            errorMessages = {["This field is required","Please select a unique color","Color name must be unique"]}
                        />

                        <Button variant="contained"
                                color="primary"
                                className={classes.button}
                                style={{backgroundColor: currentColor}}
                                type={'submit'}
                        >
                            Save Pallete
                        </Button>

                    </ValidatorForm>





                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />

                    {colorPallete.map(color=> (<DraggleColorBox color={color} />))}

                </main>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NewPalleteForm);
