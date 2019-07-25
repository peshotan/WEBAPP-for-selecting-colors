import React , {Component} from 'react';
import ColorBox from './ColorBox';
import './Pallete.css'

class Pallete extends Component {



    render(){

        const colorBoxes = this.props.colors.map((color,idx) => (
            <ColorBox key={idx} background={color}  />
        ));

        return (
            <div className={'pallete'}>
                {/*Navbar goes here*/}
                <div className={'pallete__colors'}>
                    {colorBoxes}
                </div>
                {/*Footer goes here*/}
            </div>
        )
    }

}

export default Pallete