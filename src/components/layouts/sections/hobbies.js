import React, { Component } from 'react';
import '../../../css/master.css';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Paper, Typography} from '@material-ui/core';
import {hobbyList} from "./slides/itemList";
import CarouselReactSlider from './slides/carouselReactSlider';

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
    slides: {
        backgroundColor: "rgba(0, 0, 0, .2)",
        padding: "2%"
    },
};

class Hobbies extends Component {
    render() {
        const { classes } = this.props;
        return (
            <section className={classes.container} id="hobbies">
                <Grid container>
                    <Grid item xs={12}>
                        <Typography className={classes.heading} variant="display2">
                            Hobbies
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.slides}>
                            <CarouselReactSlider
                                slides={hobbyList}
                            />
                        </Paper>
                    </Grid>

                </Grid>
            </section>
        );
    }
}

export default withStyles(styles)(Hobbies);
