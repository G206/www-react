import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid, Paper, FormControl, Input, InputLabel,
} from '@material-ui/core';


const styles = theme => ({

});

function ContactField(props) {
  return (
    <Paper className={props.classPaper}>
      <Grid
        container
        direction="row"
        spacing={16}
        justify="flex-start"
        alignItems="flex-end"
      >
        <Grid item className={props.classIconBox}>
          {props.children}
        </Grid>
        <Grid item className={props.classInputBox}>
          <FormControl className={props.classForm}>
            <InputLabel
              className={props.classLabel}
              htmlFor="contactName"
            >
              {props.label}
            </InputLabel>
            <Input
              id={props.id}
              fullWidth
              type="text"
              value={props.contactField}
              onChange={props.handleInput}
              multiline={props.multiline}
              rowsMax={props.rowsMax}
              className={props.classFormField}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
}

ContactField.propTypes = {
  classes: PropTypes.object,
  classPaper: PropTypes.string,
  classIconBox: PropTypes.string,
  classInputBox: PropTypes.string,
  classForm: PropTypes.string,
  classFormField: PropTypes.string,
  classLabel: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  contactField: PropTypes.string,
  multiline: PropTypes.bool,
  rowsMax: PropTypes.string,
  handleInput: PropTypes.func,
};

export default withStyles(styles)(ContactField);
