import React, {Component} from 'react';
import '../../../css/master.css';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import {Grid, Paper, Typography, FormControl, Input, InputLabel, Button} from '@material-ui/core';
import {AccountCircle, AlternateEmail, ContactPhone, Message, Send, Clear} from '@material-ui/icons';

const styles = {
    container: {
        flexGrow: 1,
        backgroundColor: 'rgba(0, 0, 0, .6)',
        color: 'black',
        margin: '10% 0'
    },
    innerContainer: {
        margin: 0,
        padding: 0
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
        width: '90%'
    },
    form: {
        width: '100%'
    },
    formField: {
        fontSize: '1.5em'
    },
    paper: {
        margin: '1% 0 3% 0',
        padding: '0 5% 0 1%'
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
                                <Paper className={classes.paper}>
                                    <Grid container
                                          direction="row"
                                          spacing={16}
                                          justify="flex-start"
                                          alignItems="flex-end"
                                          className={classes.innerContainer}>
                                        <Grid item className={classes.iconBox}>
                                            <AccountCircle className={classes.icon}/>
                                        </Grid>
                                        <Grid item className={classes.inputBox}>
                                            <FormControl className={classes.form}>
                                                <InputLabel htmlFor="contactName">Enter Your Name</InputLabel>
                                                <Input id="contactName"
                                                       fullWidth
                                                       type="text"
                                                       className={classes.formField}
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                <Paper className={classes.paper}>
                                    <Grid container
                                          direction="row"
                                          spacing={16}
                                          justify="flex-start"
                                          alignItems="flex-end"
                                          className={classes.innerContainer}>
                                        <Grid item className={classes.iconBox}>
                                            <AlternateEmail className={classes.icon}/>
                                        </Grid>
                                        <Grid item className={classes.inputBox}>
                                            <FormControl className={classes.form}>
                                                <InputLabel htmlFor="contactEmail">Enter Your Email</InputLabel>
                                                <Input id="contactEmail"
                                                       fullWidth
                                                       type="text"
                                                       className={classes.formField}
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                <Paper className={classes.paper}>
                                    <Grid container
                                          direction="row"
                                          spacing={16}
                                          justify="flex-start"
                                          alignItems="flex-end"
                                          className={classes.innerContainer}>
                                        <Grid item className={classes.iconBox}>
                                            <ContactPhone className={classes.icon}/>
                                        </Grid>
                                        <Grid item className={classes.inputBox}>
                                            <FormControl className={classes.form}>
                                                <InputLabel htmlFor="contactPhone">Enter Your Phone Number</InputLabel>
                                                <Input id="contactPhone"
                                                       fullWidth
                                                       type="text"
                                                       className={classes.formField}
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                <Paper className={classes.paper}>
                                    <Grid container
                                          direction="row"
                                          spacing={16}
                                          justify="flex-start"
                                          alignItems="flex-end"
                                          className={classes.innerContainer}>
                                        <Grid item className={classes.iconBox}>
                                            <Message className={classes.icon}/>
                                        </Grid>
                                        <Grid item className={classes.inputBox}>
                                            <FormControl className={classes.form}>
                                                <InputLabel htmlFor="contactMessage">Enter Your Message</InputLabel>
                                                <Input id="contactMessage"
                                                       fullWidth
                                                       type="text"
                                                       multiline
                                                       rowsMax="3"
                                                       className={classes.formField}
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                <Grid container
                                      direction="row"
                                      spacing={16}
                                      justify="space-between"
                                      alignItems="center"
                                      className={classes.innerContainer}>
                                    <Grid item xs>
                                        <Button variant="contained"
                                                size="large"
                                                id="btnSubmit"
                                                color="primary"
                                                className={classNames(classes.button, classes.primaryC)}
                                        >
                                            Submit
                                            <Send/>
                                        </Button>
                                    </Grid>
                                    <Grid item xs>
                                        <Button variant="contained"
                                                size="large"
                                                id="btnReset"
                                                color="secondary"
                                                className={classNames(classes.button, classes.secondaryC)}
                                        >
                                            Reset
                                            <Clear/>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        );
    }
}

export default withStyles(styles)(Contact);
