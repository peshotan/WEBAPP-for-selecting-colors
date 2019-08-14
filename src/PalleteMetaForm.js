import React , { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css'

class FormDialog extends Component {

    constructor(props){
        super(props);
        this.state = {
            open : true,
            newPalleteName : "",
        }
    }

    componentDidMount(){
        ValidatorForm.addValidationRule("isPalleteNameUnique", (value) => {
            return this.props.palletes.every(({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase())
        })
    };



    handleFormValidation = (e) => {
        this.setState({[e.target.name] : e.target.value})
    };

    render () {
        let { open, newPalleteName } = this.state;
        let { classes , hideForm } = this.props;
        return (
                <Dialog
                    open={open}
                    onClose={this.hideForm}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
                    <ValidatorForm
                        onSubmit={ () => this.props.savePallete(newPalleteName)}
                        instantValidate = {false}
                    >
                        <DialogContent>
                            <DialogContentText>
                                Please select a unique palette name for your color palette!
                            </DialogContentText>

                            <Picker/>

                                <TextValidator
                                    label={'Palette Name'}
                                    name={'newPalleteName'}
                                    value = {newPalleteName}
                                    fullWidth = {true}
                                    margin = {'normal'}
                                    onChange = {this.handleFormValidation}
                                    validators = {["required", "isPalleteNameUnique"]}
                                    errorMessages = {["This field is required", "please enter a unique name"]}
                                />


                        </DialogContent>
                        <DialogActions>
                            <Button onClick={hideForm} color="primary">
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                type={'submit'}
                            >
                                SAVE PALETTE
                            </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
        );
    }
}


export default FormDialog
