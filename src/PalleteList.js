import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import MiniPallete from './MiniPallete';
import {withStyles} from '@material-ui/styles';
import myStyles from './styles/PalleteListStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class PalleteList extends Component {

    // INSTEAD OF USING <Link> component we are just adding a new Route ONTO the history.push method.
    // This new route will be /pallete/ + the id of the route we want
    handlePalleteLink = (id) => {
        this.props.history.push(`/pallete/${id}`)
    }


    render() {
        // here the classes property is SET BY withStyles
        // all the key-values from myStyles are set as class names in classes OBJECT -property
        let {palletes, classes} = this.props;

        let miniPalletes = palletes.map((pallete) => (
            <CSSTransition key={pallete.id} classNames='fade' timeout={500}>
                    <MiniPallete
                        handleRoute={()=> this.handlePalleteLink(pallete.id)}
                        {...pallete}
                        deletePallete = {this.props.deletePallete}
                        key = {pallete.id}
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
            </div>
        )
    }
}

export default withStyles(myStyles)(PalleteList)
