import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import '../../../../css/master.css';

const styles = theme => ({
  container: {
    flexGrow: 1,
  },
});


function CarouselIndicator(props) {
  const { classes } = props;
  return (
    <li>
      <a
        className={
                    props.index === props.activeIndex
                      ? 'carousel__indicator carousel__indicator--active'
                      : 'carousel__indicator'
                }
        onClick={props.onClick}
      />
    </li>
  );
}

CarouselIndicator.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
  onClick: PropTypes.func,
};

export default withStyles(styles)(CarouselIndicator);
