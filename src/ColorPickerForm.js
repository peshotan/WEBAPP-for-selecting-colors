import React, {Component} from 'react';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ColorPickerFormStyles';

class ColorPickerForm extends Component{

    constructor(props) {
        super(props)
        this.state = {
            currentColor : "",
            currentColorName : ""
        }
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isColorUnique", (value) => {
            return this.props.colors.every(color => color.color !== this.state.currentColor)
        });

        ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
            return this.props.colors.every(color => color.name.toLowerCase() !== value.toLowerCase())
        });

    }


    handleColorChange = (color) => {
        this.setState({currentColor: color.hex})
    };

    handleFormValidation = (e) => {
        this.setState({[e.target.name] : e.target.value})
    };

    // clearNameAndColor = () => {
    //     this.setState({
    //         currentColor : "",
    //         currentColorName : ""
    //     })
    // }


    render(){
        const { currentColor, currentColorName } = this.state;
        const { isPalleteFull, classes } = this.props;
        return (
            <div>
                <ChromePicker
                    color = {currentColor}
                    onChangeComplete = {this.handleColorChange}
                    className = {classes.picker}
                />

                <ValidatorForm
                    onSubmit={ ()=> this.props.handleSubmitColor(currentColor, currentColorName)}
                    instantValidate = {false}
                >
                    <TextValidator
                        placeholder = 'Color Name'
                        className = {classes.colorNameInput}
                        name={'currentColorName'}
                        value = {currentColorName}
                        variant = 'filled'
                        onChange = {this.handleFormValidation}
                        validators = {["required","isColorUnique","isColorNameUnique"]}
                        errorMessages = {["This field is required","Please select a unique color","Color name must be unique"]}
                    />

                    <Button variant="contained"
                            color="primary"
                            style={{backgroundColor: currentColor}}
                            type={'submit'}
                            disabled = {isPalleteFull}
                            className={classes.addColorButton}
                    >
                        Add Color
                    </Button>

                </ValidatorForm>
            </div>
        )
    }

}

export default withStyles(styles)(ColorPickerForm)