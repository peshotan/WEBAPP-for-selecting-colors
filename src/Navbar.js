import React , {Component} from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';


import 'rc-slider/assets/index.css';
import './Navbar.css'


class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = { format : "hex" , open : false}
    }

    changeSliderLevel = (value) => {
        this.props.slideAction(value)
    };

    handleFormatChange = (e) => {
        this.setState({format : e.target.value , open: true},
            ()=> this.props.formatHandler(this.state.format));
    };

    handleSnackbarClose = () =>{
        this.setState({open: false})
    };

    render(){
        return(
            <header className={'navbar'}>
                <div className={'navbar__logo'}>
                    <Link exact to={'/'}>reactColorPicker</Link>
                </div>

                {/*// LOGIC TO SHOW SLIDER*/}
                {
                    this.props.displaySlider &&
                    <div className={'navbar__slider__container'}>
                        <span>{`Level: ${this.props.level}`}</span>
                        <div className={'navbar__slider'}>
                            <Slider
                                defaultValue={this.props.level}
                                min={100}
                                max={900}
                                step={100}
                                onAfterChange={this.changeSliderLevel}/>
                        </div>
                    </div>
                }

                <div className={'navbar__select-container'} >
                    <Select value={this.state.format} onChange={this.handleFormatChange} >
                        <MenuItem value={"hex"}> HEX = #ffffff </MenuItem>
                        <MenuItem value={"rgb"}> RGB = rgb(255,255,255) </MenuItem>
                        <MenuItem value={"rgba"}> RGBA = rgba(255,255,255,1.0) </MenuItem>
                    </Select>
                </div>

                {/*we have several options to put the CODE for snackbar, we can either put it in*/}
                {/*Pallete component or the navbar. Here we have chosen the navbar component.*/}

                <Snackbar anchorOrigin={{vertical : "bottom", horizontal: "left"}}
                          key={'Snackbar'}
                          open={this.state.open}
                          onClose={this.handleSnackbarClose}
                          autoHideDuration={2000}
                          ContentProps={
                              {'aria-describedby': 'message-id',}
                          }
                          message={<span id="message-id">Format Changed {this.state.format}</span>}
                          action={[
                              <IconButton key="close" aria-label="close" color="inherit" onClick={this.handleSnackbarClose}>
                                  <CloseIcon className={'inherit'}  />
                              </IconButton>,
                          ]}>
                </Snackbar>


            </header>
        )
    }

}

export default Navbar