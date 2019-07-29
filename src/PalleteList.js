import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import MiniPallete from './MiniPallete';
import {withStyles} from '@material-ui/styles';


const myStyles = {
    root : {
        backgroundColor : "#35348f",
        display: "flex",
        height: "100vh",
        alightItems : "flex-start",
        justifyContent: "center"
    },

    container : {
        width: "50%",
        display: "flex",
        alignItems : "flex-start",
        flexDirection : "column",
        flexWrap : "wrap"
    },

    nav : {
        display: "flex",
        width : "100%",
        justifyContent: "space-between",
        color: "white"
    },

    palletes: {
        boxSizing: "border-box",
        width : "100%",
        display : "grid",
        gridTemplateColumns : "repeat(3,30%)",
        gridGap : "5%"
    },

    link : {
        textDecoration: "none"
    }
}


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

        let miniPalletes = palletes.map(pallete => (
                <div className={classes.link} >
                    <MiniPallete handleRoute={()=> this.handlePalleteLink(pallete.id)} {...pallete}/>
                </div>
        ))

        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
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
