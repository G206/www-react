import React, { Component } from 'react';
import '../../../css/master.css';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core'

const styles = {
    container: {
        flexGrow: 1
    },
    text: {
        padding: "1% 3%",
        backgroundColor: "rgba(255, 255, 255, .6)",
        color: "black"
    },
};

class About extends Component {
    render() {
        const { classes } = this.props;
        return (
            <section className={classes.container} id="about">
                <Grid container>
                    <Grid item xs={12}>
                        <h1>About</h1>
                        <Grid container
                              direction="row"
                              justify="center"
                              alignItems="center">
                            <Grid item xs={10} lg={8}>
                                <Paper className={classes.text}>
                                    <p>
                                        My Name is Gabe and I am a full stack Mobile and Web Developer.
                                        I just completed the Mobile and Web Development Programming
                                        Certification and Mobile Technology Certification Programs at
                                        Bellevue College. I also have a Bachelor of Arts in Business
                                        Administration from the University of Washington in Information
                                        Systems (IS) and Finance. This site is designed to showcase my work,
                                        hobbies, and anything else I have a passion for. You can browse some
                                        of the work I have done while at Bellevue College. You can use the
                                        Contact form to send me an email if you wish to discuss anything
                                        with me. Thank you for visiting my site.
                                    </p>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        );
    }
}

export default withStyles(styles) (About);
