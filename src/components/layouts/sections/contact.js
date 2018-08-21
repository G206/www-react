import React, {Component} from 'react';
import '../../../css/master.css';
import {withStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
import {AccountCircle, AlternateEmail, ContactPhone, Message} from '@material-ui/icons';
import ContactField from './contact/contactField';
import ContactMultiLine from './contact/contactMultiLine';
import ContactButtons from './contact/contactButtons';

const styles = {
    container: {
        flexGrow: 1,
        backgroundColor: 'rgba(0, 0, 0, .6)',
        color: 'black',
        margin: '10% 0'
    },
    innerContainer: {

    },
    heading: {
        fontFamily: 'Avengeance',
        color: 'red',
        margin: '2% 0',
        textAlign: 'center'
    },
    iconBox: {
        // backgroundColor: 'rgba(0, 0, 0, .6)',
        color: 'blue',
        width: '10%',
        textAlign: 'center'
    },
    icon: {
        fontSize: '2.5em'
    },
    inputBox: {
        width: '85%'
    },
    form: {
        width: '100%'
    },
    formField: {
        fontSize: '1.5em'
    },
    paper: {
        margin: '1% 0 3% 0',
    },
    btnBox: {

    },
    button: {
        width: '100%',
        fontSize: '1.5em'
    },
    primaryC: {
        color: 'black'
    },
    secondaryC: {
        color: 'white'
    }
};

class Contact extends Component {
    constructor(props){
        super(props);
        this.state ={
            EMAIL: "gabe@w3dev.io",
            contactName: "",
            contactEmail: "",
            contactPhone: "",
            contactMessage: "",
            mailToLink:""
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    createMailTo(){
        this.setState({mailToLink:'mailto:' + this.state.EMAIL + '?'
            + 'subject=Email%20from%20' + this.state.contactName
            + '.%20Email:%20' + this.state.contactEmail + '.%20Contact%20Phone:%20'
            + this.state.contactPhone + '&body=' + this.state.contactMessage});
    }
    handleInput(event){
        const target = event.target;
        const value = target.value;
        const id = target.id;
        this.setState({
            [id]: value
        });
        this.createMailTo();
    }
    handleSubmit() {
        console.log("MailToLink: " + this.state.mailToLink);
    }
    handleReset() {
        this.setState({
            contactName: "",
            contactEmail: "",
            contactPhone: "",
            contactMessage: "",
            mailToLink:""
        })
    }

    render() {
        const {classes} = this.props;
        return (
            <section className={classes.container} id="contact">
                <Grid container>
                    <Grid item xs={12}>
                        <Typography className={classes.heading} variant="display2">
                            Contact Me
                        </Typography>
                        <Grid container
                              direction="row"
                              justify="center"
                              alignItems="center">
                            <Grid item xs={10}>
                                <form id="contactForm">
                                    <ContactField
                                        classPaper={classes.paper}
                                        classIconBox={classes.iconBox}
                                        classInputBox={classes.inputBox}
                                        classForm={classes.form}
                                        classFormField={classes.formField}
                                        label="Enter Your Name"
                                        id="contactName"
                                        contactField={this.state.contactName}
                                        handleInput={this.handleInput}
                                    >
                                        <AccountCircle className={classes.icon} />
                                    </ContactField>
                                    <ContactField
                                        classPaper={classes.paper}
                                        classIconBox={classes.iconBox}
                                        classInputBox={classes.inputBox}
                                        classForm={classes.form}
                                        classFormField={classes.formField}
                                        label="Enter Your Email"
                                        id="contactEmail"
                                        contactField={this.state.contactEmail}
                                        handleInput={this.handleInput}
                                    >
                                        <AlternateEmail className={classes.icon}/>
                                    </ContactField>
                                    <ContactField
                                        classPaper={classes.paper}
                                        classIconBox={classes.iconBox}
                                        classInputBox={classes.inputBox}
                                        classForm={classes.form}
                                        classFormField={classes.formField}
                                        label="Enter Your Phone Number"
                                        id="contactPhone"
                                        contactField={this.state.contactPhone}
                                        handleInput={this.handleInput}
                                    >
                                        <ContactPhone className={classes.icon}/>
                                    </ContactField>
                                    <ContactMultiLine
                                        classPaper={classes.paper}
                                        classIconBox={classes.iconBox}
                                        classInputBox={classes.inputBox}
                                        classForm={classes.form}
                                        classFormField={classes.formField}
                                        label="Enter Your Message"
                                        id="contactMessage"
                                        contactField={this.state.contactMessage}
                                        handleInput={this.handleInput}
                                    >
                                        <Message className={classes.icon}/>
                                    </ContactMultiLine>
                                    <ContactButtons
                                        classBtnBox={classes.btnBox}
                                        classButton={classes.button}
                                        classPrimaryC={classes.primaryC}
                                        classSecondaryC={classes.secondaryC}
                                        mailToLink={this.state.mailToLink}
                                        handleSubmit={this.handleSubmit}
                                        handleReset={this.handleReset}

                                    />
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        );
    }
}

export default withStyles(styles)(Contact);
