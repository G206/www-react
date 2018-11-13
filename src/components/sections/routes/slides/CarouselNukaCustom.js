import React, { Component } from 'react';
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
        backgroundColor: theme.palette.canvas7,
        color: 'white',
        textAlign: 'center',
        margin: '0 auto',
        padding: '10px'
    },
    button: {
        padding: "8px",
        backgroundColor: theme.palette.canvas,
        color: theme.palette.text.secondary,
    },
    buttonContainer: {
        backgroundColor: theme.palette.canvas,
        color: theme.palette.text.secondary,
    },
    text: {
        padding: "6px",
        backgroundColor: theme.palette.canvas,
        color: theme.palette.text.secondary,
    }

});

class CarouselNukaCustom extends Component {

    constructor(props){
        super(props);
        this.state = {
            portfolioIndex: 0
        };
    }

    advancePortfolio = (slideIndex) => {
        this.setState({ portfolioIndex: slideIndex});
    };

    // componentWillMount(){
    //
    // }
    //
    // componentWillReceiveProps(nextProps) {
    //     if(this.props.portfolioIndex !== nextProps.portfolioIndex) {
    //
    //     }
    // }

    componentDidMount() {
        this.props.advancePortfolio(this.state.portfolioIndex);
    }

    render() {
        const { classes } = this.props;
        const customSlideCpnts = this.props.slides.map((item, index) =>
            <div
                key = {index}
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
            </div>
        );


        return (
            <Carousel
                renderTopCenterControls={({ currentSlide }) => (
                    <div className={classes.text}>Slide No.: {currentSlide + 1}</div>
                )}
                renderCenterLeftControls={({ previousSlide }) => (
                    <div className={classes.buttonContainer}>
                        <button
                            onClick={previousSlide}
                            className={classes.button}
                        >Prev</button>
                    </div>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <div className={classes.buttonContainer}>
                        <button
                            onClick={nextSlide}
                            className={classes.button}
                        >Next</button>
                    </div>
                )}
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
                afterSlide={slideIndex => this.advancePortfolio(slideIndex)}
            >
                {customSlideCpnts}
            </Carousel>
        );
    }
}

CarouselNukaCustom.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(CarouselNukaCustom);
