import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import {Grid, Paper, Typography} from '@material-ui/core';
import {portfolioList} from './slides/itemList';
import Carousel from './slides/carousel';
import CarouselReactSlider from './slides/carouselReactSlider';

const styles = {
    container: {
        flexGrow: 1,
        backgroundColor: "rgba(255, 255, 255, .6)",
        color: "black",
        margin: "10% 0",
        padding: "2% 0"
    },
    heading: {
        fontFamily: "Avengeance",
        color: "red",
        margin: "2% 0",
        textAlign: "center"
    },
    slides: {

    },
};

class Portfoloio extends Component {
    constructor(props){
        super(props);

    }

    render() {
        const { classes } = this.props;
        let assetsPath = require.context('./slides/images', false, /\.(png|jpe?g|svg)$/);

        // Substituting the imgSrc from file name in ./images to their corresponding path after they are bundled.
        portfolioList.map((item, index) => {
            // console.log(assetsPath.keys(), assetsPath.id);
            item.imgSrc = assetsPath('./' + item.imgSrc);
        });
        return (
            <section className={classes.container} id="portfolio">
                <Grid container>
                    <Grid item xs={12}>
                        <Typography className={classes.heading} variant="display2">
                            Portfolio
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.slides}>
                            {/*<Grid container*/}
                            {/*direction="row"*/}
                            {/*justify="center"*/}
                            {/*alignItems="center">*/}
                            {/**/}
                            {/*</Grid>*/}
                            <Carousel slides={portfolioList} />
                            <CarouselReactSlider
                                slides={portfolioList}
                            />
                        </Paper>
                    </Grid>

                </Grid>
            </section>
        );
    }
}


Portfoloio.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(Portfoloio);
