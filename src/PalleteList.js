import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import MiniPallete from './MiniPallete';

class PalleteList extends Component {

    render() {

        let {palletes} = this.props;

        let links = palletes.map(pallete => (
            <p>
            <Link exact to={`/pallete/${pallete.id}`}> <MiniPallete {...pallete}/> </Link>
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
