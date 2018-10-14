import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarouselSlider from 'react-carousel-slider';

// import { withStyles } from '@material-ui/core/styles';
//
// const styles = theme => ({
//     container: {
//         flexGrow: 1,
//     },
//     slideImage: {
//         height: "260px"
//     },
//
// });

class CarouselReactSlider extends Component {

    render() {
        // const {classes} = this.props;
        const manner = {
            autoSliding: {interval: "6s"},
            duration: "2s"
        }

        const buttonSetting = {
            placeOn: "middle-inside",
            style: {
                left: {
                    height: "50px",
                    width: "50px",
                    color: "#ffd600",
                    fontWeight: "Bold",
                    background: "rgba(0, 0, 0, 0.8)",
                    borderRadius: "50%",
                },
                right: {
                    height: "50px",
                    width: "50px",
                    color: "#ffd600",
                    fontWeight: "Bold",
                    background: "rgba(0, 0, 0, 0.8)",
                    borderRadius: "50%",
                }
            }
        }

        const sliderBoxStyle = {
            background: "rgba(0,0,0,0)",
            width: "100%",
            height: "480px"
        }

        return (
            <CarouselSlider
                slideItems = {this.props.slides}
                manner = {manner}
                buttonSetting = {buttonSetting}
                sliderBoxStyle = {sliderBoxStyle}
            />
        );
    }
}

CarouselReactSlider.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default CarouselReactSlider;
// export default withStyles(styles)(CarouselReactSlider);