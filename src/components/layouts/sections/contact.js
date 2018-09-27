import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
import {AccountCircle, AlternateEmail, ContactPhone, Message} from '@material-ui/icons';
import ContactField from './contact/contactField';
import ContactButtons from './contact/contactButtons';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';

const styles = theme => ({
    container: {
        flexGrow: 1,
        backgroundColor: 'rgba(0, 0, 0, .6)',
        color: 'black',
        margin: '15% 0'
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
});

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
    componentWillMount() {
        configureAnchors({
            offset: -72,
            scrollDuration: 800,
            keepLastAnchorHash: false
        })
    }

    render() {
        const {classes} = this.props;
        return (
            <ScrollableAnchor
                id="contact"
                name="contact"
            >
                <section
                    className={classes.container}
                >
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
                                            multiline={false}
                                            rowsMax="1"
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
                                            multiline={false}
                                            rowsMax="1"
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
                                            multiline={false}
                                            rowsMax="1"
                                        >
                                            <ContactPhone className={classes.icon}/>
                                        </ContactField>
                                        <ContactField
                                            classPaper={classes.paper}
                                            classIconBox={classes.iconBox}
                                            classInputBox={classes.inputBox}
                                            classForm={classes.form}
                                            classFormField={classes.formField}
                                            label="Enter Your Message"
                                            id="contactMessage"
                                            contactField={this.state.contactMessage}
                                            handleInput={this.handleInput}
                                            multiline={true}
                                            rowsMax="3"
                                        >
                                            <Message className={classes.icon}/>
                                        </ContactField>
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
            </ScrollableAnchor>
        );
    }
}
Contact.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(Contact);
