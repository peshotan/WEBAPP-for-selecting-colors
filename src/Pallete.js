import React , {Component} from 'react';
import ColorBox from './ColorBox';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Pallete.css'

class Pallete extends Component {

    constructor(props){
        super(props);
        this.state = {
            level : 100
        }

        this.handleSlider = this.handleSlider.bind(this)
    }

    handleSlider(value){
        //value is the value returned from slide Component
        this.setState({level : value},
            ()=> console.log(this.state.level))

    }


    render(){
        let {level} = this.state;
        let {colors} = this.props.pallete

        let selectedColorArray = colors[level];

        const colorBoxes = selectedColorArray.map((color,idx) => (
            <ColorBox key={idx} name={color.name} color={color.hex}  />
        ));

        return (
            <div className={'pallete'}>
                <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={this.handleSlider}/>
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