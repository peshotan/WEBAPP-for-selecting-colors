import React, {Component} from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import PalleteFooter from './PalleteFooter';
import './singleColorPallete.css';


class SinglePallete extends Component {

    constructor(props){
        super(props);
        this._shades = this.getShades(this.props.match.params.colorId);
        this.state = {
            format : "hex"
        }
    }


    getShades = (colorId) => {
      let shades = [];
      let {colors} = this.props.pallete;
      for (let key in colors) {
          // shades = shades.concat(colors[key].filter(color => color.id === colorId));
          // we can also extract the value of the shades.filter by using the following code
          let newShade = colors[key].filter(color => color.id === colorId)[0];
          shades.push(newShade)
      }

      // let black = {
      //     name: null,
      //     id: "black",
      //     hex: "#000",
      //     rgb: "rgb(0,0,0)",
      //     rgba: "rgba(0,0,0,1)"
      // };
      //
      // shades.push(black)


      return shades.slice(1)
    };


    formatHandler = (format) => {
        this.setState({format : format})
    };


    render(){
        return(
            <div className="single-color-pallete">


                <div className={"pallete"}>

                    {/*here we add the header - NAVBAR*/}
                    <Navbar
                        formatHandler={this.formatHandler}
                        displaySlider={false} />


                    <div className={"pallete__colors"}>
                    {this._shades.map((color,idx) => (
                        <ColorBox key={idx}
                                  name={color.name}
                                  color={color[this.state.format]}
                                  moreURL={`/pallete/${this.props.pallete.id}/${color.id}`}
                                  showMoreURL = {false} />))
                    }

                    <div className="go-back colorbox">
                        <Link exact={true} to={`/pallete/${this.props.pallete.id}`}>
                        <button className={"go-back-button"}>Copy</button>
                        </Link>
                    </div>

                    </div>

                    {/*Footer goes here*/}
                    <PalleteFooter paletteName={this.props.pallete.paletteName} emoji={this.props.pallete.emoji} />
                </div>

            </div>

        )
    }
}

export default SinglePallete