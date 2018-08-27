import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import {Grid, Paper, Typography} from '@material-ui/core';
import {yogaList} from "./slides/itemList";
import CarouselReactSlider from './slides/carouselReactSlider';

const styles = {
    container: {
        flexGrow: 1,
        backgroundColor: "rgba(0, 0, 0, .6)",
        color: "white",
        margin: "10% 0"
    },
    heading: {
        fontFamily: "Avengeance",
        color: "red",
        margin: "2% 0",
        textAlign: "center"
    },
    slides: {
        backgroundColor: "rgba(255, 255, 255, .2)",
        padding: "2%"
    },
};

class Yoga extends Component {
    render() {
        const { classes } = this.props;

        return (
            <section className={classes.container} id="yoga">
                <Grid container>
                    <Grid item xs={12}>
                        <Typography className={classes.heading} variant="display2">
                            Yoga
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.slides}>

                            <CarouselReactSlider
                                slides={yogaList}
                            />
                        </Paper>
                    </Grid>

                </Grid>
            </section>
        );
    }
}

Yoga.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(Yoga);
