import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';



const styles = {
    container: {
        flexGrow: 1,
    },
    slideImage: {
        maxWidth: "100%",
        maxHeight: "100%"
    },
    caption: {
        position: 'absolute',
        top: '75%',
        left: '0',
        right: '0',
        width: '75%',
        backgroundColor: 'rgba(128, 128, 128, 0.6)',
        color: 'white',
        textAlign: 'center',
        margin: '0 auto',
        padding: '10px'
    }

};

class CarouselNukaCustom extends Component {

    render() {

        const { classes } = this.props;
        const customSlideCpnts = this.props.slides.map((item, index) =>
            <Link to = {'/'} key = {index}
                  onClick={event => this.props.handleModalOpen(item.href,
                      item.width, item.height, event)}
            >
                <img
                    src = {item.imgSrc}
                    alt = {item.alt}
                    id = {item.id}
                    className={classes.slideImage}
                />
                <p
                    className={classes.caption}
                >
                    {item.des}
                </p>
            </Link>
        );
        return (
            <div id="carousel-tilePortfolio">
                <Carousel
                    slidesToShow={3}
                    cellAlign="center"
                    // autoplay={true}
                    // autoplayInterval={6000}
                    cellSpacing={24}
                    heightMode={'max'}
                    speed={1000}
                    dragging={true}
                    swiping={true}
                    wrapAround={true}
                    slideIndex={this.props.portfolioIndex}
                    afterSlide={slideIndex => this.props.advancePortfolio(slideIndex)}
                >
                    {customSlideCpnts}
                </Carousel>
            </div>
        );
    }
}

CarouselNukaCustom.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(CarouselNukaCustom);
