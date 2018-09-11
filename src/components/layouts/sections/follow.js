import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Paper, Typography} from '@material-ui/core';
import FollowList from './follow/followList';
import {Element} from 'react-scroll';

const styles = {
    container: {
        flexGrow: 1,
        backgroundColor: "rgba(255, 255, 255, .6)",
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
        padding: "3% 2%",
        backgroundColor: "rgba(0, 0, 0, .6)",
        color: "white",
        fontFamily: "Xolonium",
        textAlign: "center"
    },
    mediaBox: {
        padding: "5% 0 1% 0"
    },
    mediaItem: {
        textAlign: "center",
        fontSize: "3em"
    },
    paper: {
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: "thin"
    }
};

class Follow extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Element
                className={classes.container}
                id="followMe"
                name="followMe"
            >
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
                                <Paper
                                    className={classes.paper}
                                >
                                    <Typography variant="title" className={classes.text}>
                                        Follow me around the internet as I build projects, develop my
                                        portfolio, and blog about technology.
                                    </Typography>
                                </Paper>
                                <FollowList/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Element>
        );
    }
}
Follow.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(Follow);
