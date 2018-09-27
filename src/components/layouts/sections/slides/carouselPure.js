import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
// import './../../../../css/react-carousel.es.css';


const styles = theme => ({
    container: {
        flexGrow: 1,
    },
    slideImage: {
        height: "260px",
        width: "200px"
    },

});

class CarouselPure extends Component {

    render() {

        const { classes } = this.props;

        return (
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
            >
                <Slider>
                    <Slide index={0} className={classes.slideImage}>I am the first Slide.</Slide>
                    <Slide index={1} className={classes.slideImage}>I am the second Slide.</Slide>
                    <Slide index={2} className={classes.slideImage}>I am the third Slide.</Slide>
                </Slider>
                <DotGroup/>
                    {/*<Dot slide={0}/>*/}
                    {/*<Dot slide={1}/>*/}
                    {/*<Dot slide={2}/>*/}

                
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        );
    }
}

CarouselPure.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(CarouselPure);
