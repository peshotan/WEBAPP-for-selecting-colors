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
            stage : "form",
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

    showEmoji = () => {
        this.setState({stage : "emoji"})
    };

    addEmojiAndName = (emoji) => {
        const newPallete = {
            palleteName : this.state.newPalleteName,
            emoji : emoji.native
        };
        this.props.savePallete(newPallete)
    };

    render () {
        let { stage, newPalleteName } = this.state;
        let { classes , hideForm } = this.props;
        return (
            <div>
                <Dialog
                    open={stage === "emoji"}
                    onClose={hideForm}
                >
                    <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
                    <Picker
                        onSelect={this.addEmojiAndName}
                        title='Pick your emoji…' emoji='point_up'
                    />
                </Dialog>
                <Dialog
                    open={stage === "form"}
                    onClose={hideForm}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
                    <ValidatorForm
                        // onSubmit={ () => this.props.savePallete(newPalleteName)}
                        onSubmit = {this.showEmoji}
                        instantValidate = {false}
                    >
                        <DialogContent>
                            <DialogContentText>
                                Please select a unique palette name for your color palette!
                            </DialogContentText>

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
            </div>
        );
    }
}


export default FormDialog
