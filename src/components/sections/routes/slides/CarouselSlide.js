import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import '../../../../css/master.css';

const styles = theme => ({
  container: {
    flexGrow: 1,
  },
  slideImage: {
    height: '260px',
  },
});

function CarouselSlide(props) {
  const { classes } = props;
  return (
    <li
      className={
                this.props.index === props.activeIndex
                  ? 'carousel__slide carousel__slide--active'
                  : 'carousel__slide'
            }
    >
      <div>
        <img
          src={props.slide.imgSrc}
          alt={props.slide.alt}
          id={props.slide.id}
          className={classes.slideImage}
        />
      </div>
      <p>
        <strong className="carousel-slide__caption">
          {props.slide.des}
        </strong>
,
        {' '}
        <small className="carousel-slide__source">
          {props.slide.des}
        </small>
      </p>
    </li>
  );
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
