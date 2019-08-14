import React, {Component} from 'react';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PalleteMetaForm from './PalleteMetaForm';

const drawerWidth = 400;

const styles = (theme) => ({
    root : {
        display: "flex"
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems : "center",
        height: "64px"
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
    navBtns : {
        marginRight : "1rem"
    },
    button : {
        margin: "0 0.5rem",
        "& a": {
            textDecoration : "none !important"
        }
    },
    link : {
        textDecoration: "none"
    }
});

class PalleteFormNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            newPalleteName : "",
            formShowing : false
        }
    }


    showForm = () => {
        this.setState({formShowing : true})
    };

    hideForm = () => {
        this.setState({formShowing : false})
    }

    render(){
        let {open, classes} = this.props;
        let { newPalleteName } = this.state;

        return(
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    color="default"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.props.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Create a Color Palette
                        </Typography>

                    </Toolbar>

                    <div className={classes.navBtns}>


                        <Link
                            exact to={'/'}
                            className = {classes.link}
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                className = {classes.button}
                            >
                                Go Back
                            </Button>
                        </Link>

                        <Button
                            className = {classes.button}
                            variant="contained"
                            color="primary"
                            onClick={this.showForm}
                        >
                            Open form dialog
                        </Button>


                    </div>

                    {this.state.formShowing
                            &&
                    <PalleteMetaForm
                        hideForm = {this.hideForm}
                        palletes = {this.props.palletes}
                        classes = {classes}
                        savePallete = { this.props.savePallete }
                    />
                    }


                </AppBar>
            </div>
        )
    }
};

export default  withStyles(styles, { withTheme: true })(PalleteFormNav)