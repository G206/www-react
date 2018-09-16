import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../css/master.css';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Paper, Typography} from '@material-ui/core';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';

const styles = {
    container: {
        flexGrow: 1,
        backgroundColor: "rgba(0, 0, 0, .6)",
        color: "black",
        margin: "15% 0"
    },
    heading: {
        fontFamily: "Avengeance",
        color: "red",
        margin: "2% 0",
        textAlign: "center"
    },
    paper: {
        backgroundColor: "rgba(255, 255, 255, .6)",
        color: "black",
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: "thin"
    },
    text: {
        padding: "5%",
        fontFamily: "Xolonium",
        textAlign: "justify"
    },
};

class About extends Component {
    componentWillMount() {
        configureAnchors({
            offset: -72,
            scrollDuration: 800,
            keepLastAnchorHash: false
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <ScrollableAnchor
                id="about"
                name="about"
            >
                <section className={classes.container}
                >
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography className={classes.heading} variant="display2">
                                About
                            </Typography>
                            <Grid container
                                  direction="row"
                                  justify="center"
                                  alignItems="center">
                                <Grid item xs={10} lg={8}>
                                    <Paper className={classes.paper}>
                                        <Typography variant="headline" className={classes.text}>
                                            My Name is Gabe and I am a full stack Mobile and Web Developer.
                                            This version of my web site has been created using React JS.
                                            I just completed the Mobile and Web Development Programming
                                            Certification and Mobile Technology Certification Programs at
                                            Bellevue College. I also have a Bachelor of Arts in Business
                                            Administration from the University of Washington in Information
                                            Systems (IS) and Finance. This site is designed to showcase my work,
                                            hobbies, and anything else I have a passion for. You can browse some
                                            of the work I have done while at Bellevue College. You can use the
                                            Contact form to send me an email if you wish to discuss anything
                                            with me. Thank you for visiting my site.
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </section>
            </ScrollableAnchor>
        );
    }
}
About.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(About);
