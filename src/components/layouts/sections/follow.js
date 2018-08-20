import React, { Component } from 'react';
import '../../../css/master.css';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Paper, Typography} from '@material-ui/core';

const styles = {
    container: {
        flexGrow: 1,
        backgroundColor: "rgba(0, 0, 0, .6)",
        color: "black",
        margin: "10% 0"
    },
    heading: {
        fontFamily: "Avengeance",
        color: "red",
        margin: "2% 0",
        textAlign: "center"
    },
    text: {
        padding: "5% 3%",
        backgroundColor: "rgba(0, 0, 0, .6)",
        color: "white",
        fontFamily: "Xolonium"
    },
    mediaBox: {
        padding: "5% 0 1% 0"
    },
    mediaItem: {
        textAlign: "center",
        fontSize: "3em"
    },
};

class Follow extends Component {

    render() {
        const { classes } = this.props;
        return (
            <section className={classes.container} id="followMe">
                <Grid container>
                    <Grid item xs={12}>
                        <Typography className={classes.heading} variant="display2">
                            Around the Web
                        </Typography>
                        <Grid container
                              direction="row"
                              justify="center"
                              alignItems="center">
                            <Grid item xs={10}>
                                <Paper >
                                    <Typography variant="headline" className={classes.text}>
                                        Follow me around the internet as I build projects, develop my
                                        portfolio, and blog about technology.
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid container
                              direction="row"
                              justify="center"
                              alignItems="center"
                              spacing={40}
                                className={classes.mediaBox}>
                            <Grid item xs className={classes.mediaItem}>
                                <a href="#followMeBox" className="followMeLink">
                                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                </a>
                            </Grid>
                            <Grid item xs className={classes.mediaItem}>
                                <a href="#followMeBox" className="followMeLink">
                                    <i className="fab fa-twitter" aria-hidden="true"></i>
                                </a>
                            </Grid>
                            <Grid item xs className={classes.mediaItem}>
                                <a href="#followMeBox" className="followMeLink">
                                    <i className="fab fa-google-plus" aria-hidden="true"></i>
                                </a>
                            </Grid>
                            <Grid item xs className={classes.mediaItem}>
                                <a href="#followMeBox" className="followMeLink">
                                    <i className="fab fa-youtube" aria-hidden="true"></i>
                                </a>
                            </Grid>
                            <Grid item xs className={classes.mediaItem}>
                                <a href="#followMeBox" className="followMeLink">
                                    <i className="fab fa-instagram" aria-hidden="true"></i>
                                </a>
                            </Grid>
                            <Grid item xs className={classes.mediaItem}>
                                <a href="#followMeBox" className="followMeLink">
                                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        );
    }
}

export default withStyles(styles)(Follow);
