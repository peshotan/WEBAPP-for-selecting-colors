import React , {Component} from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

import './Pallete.css'

class Pallete extends Component {

    constructor(props){
        super(props);
        this.state = {
            level : 500,
            format : "hex"
        };
        this.handleSlider = this.handleSlider.bind(this)
    }

    handleSlider(value){
        //value is the value returned from slide Component
        this.setState({level : value},
            ()=> console.log(this.state.level))

    }

    formatHandler = (format) => {
        this.setState({format : format})
    };


    render(){

        let {level} = this.state;
        let {colors, paletteName, emoji} = this.props.pallete;

        // LOOPING THROUGH COLORS LEVEL ARRAY. eg: color[300] array
        // here the variable
        let selectedColorArray = colors[level];
        const colorBoxes = selectedColorArray.map((color,idx) => (
            <ColorBox key={idx} name={color.name} color={color[this.state.format]}  />
        ));

        return (
            <div className={'pallete'}>

                {/*NavBar*/}
                <Navbar formatHandler={this.formatHandler} slideAction={this.handleSlider} level={level} />


                <div className={'pallete__colors'}>
                    {colorBoxes}
                </div>
                {/*Footer goes here*/}
                <footer className={'pallete__footer'}>
                    {paletteName}
                    <span className={'pallete__footer__emoji'}> {emoji}</span>
                </footer>
            </div>
        )
    }

}

export default Pallete