import React , {Component} from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PalleteFooter from './Footer'

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

        // we will also pass the URL for more information on any 1 particular color
        // we do that by combining the palleteId and colorID as /pallete/:palleteId/:colorId
        // here the color is the ID of the selected shade of a particular color: is obtained through colors[level].id

        let selectedColorArray = colors[level];

        const colorBoxes = selectedColorArray.map((color,idx) => (
            <ColorBox key={idx}
                      name={color.name}
                      color={color[this.state.format]}
                      moreURL={`/pallete/${this.props.pallete.id}/${color.id}`}
                      showMoreURL = {true}
            />
        ));

        return (
            <div className={'pallete'}>

                {/*NavBar*/}
                <Navbar
                    formatHandler={this.formatHandler}
                    slideAction={this.handleSlider}
                    level={level}
                    displaySlider={true}
                />


                <div className={'pallete__colors'}>
                    {colorBoxes}
                </div>
                {/*Footer goes here*/}
                <PalleteFooter paletteName={this.props.pallete.paletteName} emoji={this.props.pallete.emoji} />
            </div>
        )
    }

}

export default Pallete