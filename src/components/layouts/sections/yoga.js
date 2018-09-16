import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Paper, Typography} from '@material-ui/core';
import {yogaList} from "../../../data/itemList";
// import CarouselReactSlider from './slides/carouselReactSlider';
import CarouselNuka from './slides/carouselNuka';
import ScrollableAnchor, { configureAnchors }  from 'react-scrollable-anchor';

const styles = {
    container: {
        flexGrow: 1,
        backgroundColor: "rgba(0, 0, 0, .6)",
        color: "white",
        margin: "15% 0",
    },
    heading: {
        fontFamily: "Avengeance",
        color: "red",
        margin: "2% 0",
        textAlign: "center"
    },
    slides: {
        backgroundColor: "rgba(255, 255, 255, .2)",
        padding: "2%",
    },
};

class Yoga extends Component {
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
                id="yoga"
                name="yoga"
            >
                <section
                    className={classes.container}
                >
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography className={classes.heading} variant="display2">
                                Yoga
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.slides}>
                                {/*<CarouselReactSlider*/}
                                {/*slides={yogaList}*/}
                                {/*/>*/}
                                <CarouselNuka
                                    slides={yogaList}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </section>
            </ScrollableAnchor>
        );
    }
}

Yoga.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(Yoga);
