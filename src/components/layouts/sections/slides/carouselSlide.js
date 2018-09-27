import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import '../../../../css/master.css';

const styles = theme => ({
    container: {
        flexGrow: 1,
    },
    slideImage: {
        height: "260px"
    }
});

class CarouselSlide extends Component {

    render() {
        const { classes } = this.props;

        return (
            <li
                className={
                    this.props.index === this.props.activeIndex
                        ? "carousel__slide carousel__slide--active"
                        : "carousel__slide"
                }
            >
                <div>
                    <img
                        src={this.props.slide.imgSrc}
                        alt={this.props.slide.alt}
                        id={this.props.slide.id}
                        className={classes.slideImage}
                    />
                </div>

                <p>
                    <strong className="carousel-slide__caption">
                        {this.props.slide.des}
                    </strong>,
                    {" "}
                    <small className="carousel-slide__source">
                        {this.props.slide.des}
                    </small>
                </p>

            </li>

        );
    }
}

CarouselSlide.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object,
    src: PropTypes.string,
    alt: PropTypes.string,
    id: PropTypes.string,
    des: PropTypes.string,

};

export default withStyles(styles)(CarouselSlide);
