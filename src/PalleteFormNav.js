import React, {Component} from 'react';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PalleteMetaForm from './PalleteMetaForm';
import styles from './styles/PalleteFormNavStyles';

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
                            <AddToPhotosIcon />
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
                            Save
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