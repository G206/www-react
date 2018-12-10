import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { portfolioList } from '../../../../data/itemList';
import CarouselSlide from './CarouselSlide';
import CarouselIndicator from './CarouselIndicator';
import CarouselLeftArrow from './CarouselLeftArrow';
import CarouselRightArrow from './CarouselRightArrow';
import '../../../../css/master.css';

const styles = theme => ({
  container: {
    flexGrow: 1,
  },
  slideImage: {
    height: '260px',
  },
});

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  goToSlide(index) {
    this.setState({ activeIndex: index });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    const { slides } = this.props;
    const slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index,
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    const { slides } = this.props;
    const slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="carousel">
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

        <ul className="carousel__slides">
          {this.props.slides.map((slide, index) => (
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          ))}
        </ul>

        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

        <ul className="carousel__indicators">
          {this.props.slides.map((slide, index) => (
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              onClick={e => this.goToSlide(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Carousel.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles)(Carousel);
