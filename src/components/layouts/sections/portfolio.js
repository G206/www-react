import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import {Grid, Paper, Typography} from '@material-ui/core';
import {portfolioList} from '../../../data/itemList';
// import Carousel from './slides/carousel';
// import CarouselReactSlider from './slides/carouselReactSlider';
import CarouselCustomSlider from './slides/carouselCustomSlider';
import CarouselNukaCustom from './slides/carouselNukaCustom';

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
        backgroundColor: "rgba(0, 0, 0, .2)",
        padding: "2%"
    },
};

class Portfoloio extends Component {

    render() {
        const { classes } = this.props;

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

                            {/*<Carousel slides={portfolioList} />*/}
                            {/*<CarouselReactSlider*/}
                                {/*slides={portfolioList}*/}
                            {/*/>*/}
                            {/*<CarouselCustomSlider*/}
                                {/*slides={portfolioList}*/}
                                {/*openModal={this.props.openModal}*/}
                                {/*handleModalOpen={this.props.handleModalOpen}*/}
                            {/*/>*/}
                            <CarouselNukaCustom
                                slides={portfolioList}
                                openModal={this.props.openModal}
                                handleModalOpen={this.props.handleModalOpen}
                                portfolioIndex={this.props.portfolioIndex}
                                advancePortfolio={this.props.advancePortfolio}
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
