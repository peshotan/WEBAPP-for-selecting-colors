import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import MiniPallete from './MiniPallete';
import {withStyles} from '@material-ui/styles';
import myStyles from './styles/PalleteListStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';


class PalleteList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openDeleteDialog : false,
            deletingId : ""
        }
    };

    openDiaglog = (id) => {
        this.setState({openDeleteDialog : true, deletingId : id })
    };
    closeDiaglog = () => {
        this.setState({openDeleteDialog : false, deletingId : "" })
    };
    handleDelete = () => {
        this.props.deletePallete(this.state.deletingId);
        this.closeDiaglog();
    }

    // INSTEAD OF USING <Link> component we are just adding a new Route ONTO the history.push method.
    // This new route will be /pallete/ + the id of the route we want
    handlePalleteLink = (id) => {
        this.props.history.push(`/pallete/${id}`)
    };


    render() {
        // here the classes property is SET BY withStyles
        // all the key-values from myStyles are set as class names in classes OBJECT -property
        let {palletes, classes} = this.props;

        let miniPalletes = palletes.map((pallete) => (
            <CSSTransition key={pallete.id} classNames='fade' timeout={500}>
                    <MiniPallete
                        handleRoute={this.handlePalleteLink}
                        {...pallete}
                        // deletePallete = {this.props.deletePallete}
                        openDialog = {this.openDiaglog}
                        key = {pallete.id}
                        id = {pallete.id}
                    />
            </CSSTransition>
        ));

        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link className={classes.link}
                              exact to={'/pallete/new'}>
                            New Form
                        </Link>
                    </nav>
                    <TransitionGroup className={classes.palletes}>
                        {miniPalletes}
                    </TransitionGroup>
                </div>
                <Dialog open={this.state.openDeleteDialog} aria-labelledby={"delete-dialog"} onClose={this.closeDiaglog}>
                    <DialogTitle id={"delete Dialog"} >Delete this palette?</DialogTitle>
                    <List>
                        <ListItem button onClick = {this.handleDelete}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor : blue[100], color : blue[900]}}>
                                    <CheckIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>Delete</ListItemText>
                        </ListItem>
                        <ListItem button onClick={this.closeDiaglog}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor : red[100], color : red[900]}}>
                                    <CloseIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>Cancel</ListItemText>
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(myStyles)(PalleteList)
