import React , {Component} from 'react';
import {Link} from 'react-router-dom';

class PalleteList extends Component {

    render() {

        let links = this.props.palletes.map(pallete => (
            <p>
            <Link exact to={`/pallete/${pallete.id}`}> {pallete.id} </Link>
            </p>
        ))

        return (
            <div>
                {links}
            </div>
        )
    }
}

export default PalleteList
