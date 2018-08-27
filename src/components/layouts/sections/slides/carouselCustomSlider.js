import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CarouselSlider from 'react-carousel-slider';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const styles = {
    container: {
        flexGrow: 1,
    },
    slideImage: {
        height: "260px"
    },

};

class CarouselCustomSlider extends Component {

render() {

    const { classes } = this.props;

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

        const textBoxStyle = {

        };

        const customSlideCpnts = this.props.slides.map((item, index) =>
            <Link to = '#modalBox' key = {index}
                  onClick={this.props.handleOpen}
            >
                <img
                    src = {item.imgSrc}
                    alt = {item.alt}
                    id = {item.id}
                />
                <p style = {textBoxStyle} >{item.des}</p>
            </Link>
        );

        return (
            <Router>
                <CarouselSlider
                    slideCpnts  = {customSlideCpnts}
                    manner = {manner}
                    buttonSetting = {buttonSetting}
                    sliderBoxStyle = {sliderBoxStyle}
                />
            </Router>
        );
    }
}

CarouselCustomSlider.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(CarouselCustomSlider);
