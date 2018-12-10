import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { Send, Clear } from '@material-ui/icons';


const styles = theme => ({

});

function ContactButtons(props) {
  return (
    <Grid
      container
      direction="row"
      spacing={16}
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs className={props.classBtnBox}>
        <a
          href={props.mailToLink}
          onClick={event => props.handleSubmit(event)}
        >
          <Button
            variant="contained"
            size="large"
            id="btnSubmit"
            color="primary"
            type="button"
            className={classNames(props.classButton, props.classPrimaryC)}
          >
                        Send Message
            <Send />
          </Button>
        </a>

      </Grid>
      <Grid item xs className={props.classBtnBox}>
        <Button
          variant="contained"
          size="large"
          id="btnReset"
          color="secondary"
          type="reset"
          onClick={event => props.handleReset(event)}
          className={classNames(props.classButton, props.classSecondaryC)}
        >
                    Reset Form
          <Clear />
        </Button>
      </Grid>
    </Grid>
  );
}

ContactButtons.propTypes = {
  classes: PropTypes.object,
  classBtnBox: PropTypes.string,
  classButton: PropTypes.string,
  classPrimaryC: PropTypes.string,
  classSecondaryC: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  contactField: PropTypes.string,
  handleInput: PropTypes.func,
};

export default withStyles(styles)(ContactButtons);
