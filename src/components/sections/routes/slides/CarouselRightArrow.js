import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import { ArrowForwardIos } from '@material-ui/icons';
import '../../../../css/master.css';

const styles = theme => ({
  container: {
    flexGrow: 1,
  },
});

function CarouselRightArrow(props) {
  const { classes } = props;
  return (
    <a
      href="#"
      className="carousel__arrow carousel__arrow--right"
      onClick={props.onClick}
    >
      <ArrowForwardIos />
    </a>
  );
}

CarouselRightArrow.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
  onClick: PropTypes.func,
};

export default withStyles(styles)(CarouselRightArrow);
