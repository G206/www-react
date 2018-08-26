import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CarouselSlider from 'react-carousel-slider';


const styles = {
    container: {
        flexGrow: 1,
    },
    slideImage: {
        height: "260px"
    },

};

class CarouselReactSlider extends Component {

    render() {
        const { classes } = this.props;
        let slides = this.props.slides;
        // let assetsPath = require.context('./images', false, /\.(png|jpe?g|svg)$/);
        //
        // // Substituting the imgSrc from file name in ./images to their corresponding path after they are bundled.
        // slides.map((item, index) => {
        //     // console.log(assetsPath.keys(), assetsPath.id);
        //     item.imgSrc = assetsPath('./' + item.imgSrc);
        // });
        let buttonSetting = {
            placeOn: "middle-inside"
        }

        return (
            <CarouselSlider
                slideItems = {slides}
                buttonSetting = {buttonSetting}
            />
        );
    }
}

CarouselSlider.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(CarouselReactSlider);
