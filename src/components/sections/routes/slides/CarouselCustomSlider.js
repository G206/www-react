import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CarouselSlider from 'react-carousel-slider';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const styles = theme => ({
  container: {
    flexGrow: 1,
  },
  slideImage: {
    height: '260px',
  },

});

class CarouselCustomSlider extends Component {
  render() {
    const { classes } = this.props;

    const manner = {
      autoSliding: { interval: '6s' },
      duration: '2s',
    };

    const accEle = {
      dots: true,
    };

    const buttonSetting = {
      placeOn: 'middle-inside',
      style: {
        left: {
          height: '50px',
          width: '50px',
          color: '#ffd600',
          fontWeight: 'Bold',
          background: 'rgba(0, 0, 0, 0.8)',
          borderRadius: '50%',
        },
        right: {
          height: '50px',
          width: '50px',
          color: '#ffd600',
          fontWeight: 'Bold',
          background: 'rgba(0, 0, 0, 0.8)',
          borderRadius: '50%',
        },
      },
    };

    const sliderBoxStyle = {
      background: 'rgba(0,0,0,0)',
      width: '100%',
      height: '480px',
    };

    const textBoxStyle = {

    };

    const customSlideCpnts = this.props.slides.map((item, index) => (
      <Link
        to={`/${item.href}`}
        key={index}
        onClick={event => this.props.handleModalOpen(item.href, event)}
      >
        <img
          src={item.imgSrc}
          alt={item.alt}
          id={item.id}
        />
        <p style={textBoxStyle}>{item.des}</p>
      </Link>
    ));

    return (
      <div id="carousel-tilePortfolio">
        <Router>
          <CarouselSlider
            id="carousel-tilePortfolio"
            slideCpnts={customSlideCpnts}
            manner={manner}
            accEle={accEle}
            buttonSetting={buttonSetting}
            sliderBoxStyle={sliderBoxStyle}
          />
        </Router>
      </div>
    );
  }
}

CarouselCustomSlider.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles)(CarouselCustomSlider);
