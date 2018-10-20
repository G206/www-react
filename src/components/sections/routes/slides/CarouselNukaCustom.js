import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Carousel from 'nuka-carousel';



const styles = theme => ({
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

});

function CarouselNukaCustom(props) {

    const { classes } = props;
    const customSlideCpnts = props.slides.map((item, index) =>
        <div
            key = {index}
            onClick={event => props.handleModalOpen(item.href,
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
        </div>
    );
    return (
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
            slideIndex={props.portfolioIndex}
            afterSlide={slideIndex => props.advancePortfolio(slideIndex)}
        >
            {customSlideCpnts}
        </Carousel>
    );
}

CarouselNukaCustom.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(CarouselNukaCustom);
