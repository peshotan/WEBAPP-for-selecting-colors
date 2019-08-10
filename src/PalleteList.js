import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import MiniPallete from './MiniPallete';
import {withStyles} from '@material-ui/styles';
import myStyles from './styles/PalleteListStyles'


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

        let miniPalletes = palletes.map((pallete,idx) => (
                <div key={idx} className={classes.link} >
                    <MiniPallete handleRoute={()=> this.handlePalleteLink(pallete.id)} {...pallete}/>
                </div>
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
                    <div className={classes.palletes}>
                        {miniPalletes}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(myStyles)(PalleteList)
