import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import MiniPallete from './MiniPallete';
import {withStyles} from '@material-ui/styles';


const myStyles = {
    root : {
        backgroundColor : "#35348f",
        display: "flex",
        height: "100%",
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
    }
}


class PalleteList extends Component {

    render() {
        // here the classes property is SET BY withStyles
        // all the key-values from myStyles are set as class names in classes OBJECT -property
        let {palletes, classes} = this.props;

        let miniPalletes = palletes.map(pallete => (
            <p>
                <Link exact to={`/pallete/${pallete.id}`}>
                    <MiniPallete {...pallete}/>
                </Link>
            </p>
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
