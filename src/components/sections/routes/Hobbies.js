import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import { hobbyList } from '../../../data/itemList';
import CarouselNuka from './slides/CarouselNuka';

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.canvas2,
    color: theme.palette.primary2.main,
    margin: '15% 0',
    padding: '2% 0 5% 0',
  },
  heading: {
    color: theme.palette.primary.main,
    margin: '2% 0',
    textAlign: 'center',
  },
  slides: {
    backgroundColor: theme.palette.canvas3,
    padding: '2%',
    borderStyle: 'solid',
    borderColor: theme.palette.accent.main,
    borderWidth: 'thin',
  },
});

class Hobbies extends Component {
  componentWillMount() {
    configureAnchors({
      offset: -72,
      scrollDuration: 800,
      keepLastAnchorHash: false,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <ScrollableAnchor
        id="hobbies"
        name="hobbies"
      >
        <section
          className={classes.container}
        >
          <Grid container>
            <Grid item xs={12}>
              <Typography className={classes.heading} variant="display2">
                                Hobbies
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.slides}>
                <CarouselNuka
                  slides={hobbyList}
                />
              </Paper>
            </Grid>

          </Grid>
        </section>
      </ScrollableAnchor>
    );
  }
}
Hobbies.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Hobbies);
