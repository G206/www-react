import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Paper, Typography} from '@material-ui/core';
import {portfolioList} from '../../../data/itemList';
// import Carousel from './slides/carousel';
// import CarouselReactSlider from './slides/carouselReactSlider';
// import CarouselCustomSlider from './slides/carouselCustomSlider';
import CarouselNukaCustom from './slides/CarouselNukaCustom';
import ScrollableAnchor, { configureAnchors }  from 'react-scrollable-anchor';

const styles = theme => ({
    container: {
        flexGrow: 1,
        backgroundColor: theme.palette.canvas2,
        color: theme.palette.primary2.main,
        margin: "15% 0",
        padding: "2% 0 5% 0",
    },
    heading: {
        color: theme.palette.primary.main,
        margin: "2% 0",
        textAlign: "center"
    },
    slides: {
        backgroundColor: theme.palette.canvas3,
        padding: "2%",
        borderStyle: "solid",
        borderColor: theme.palette.accent.main,
        borderWidth: "thin",
    },
});

class Portfolio extends Component {

    componentWillMount() {
        configureAnchors({
            offset: -72,
            scrollDuration: 800,
            keepLastAnchorHash: false
        })
    }

    componentDidMount(){
        ()=>{setTimeout(()=>{}, 1500)}
    }

    render() {
        const { classes } = this.props;

        return (
            <ScrollableAnchor
                id="portfolio"
                name="portfolio"
            >
                <section
                    className={classes.container}
                >
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
                                    {...this.props}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </section>
            </ScrollableAnchor>
        );
    }
}


Portfolio.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(Portfolio);
