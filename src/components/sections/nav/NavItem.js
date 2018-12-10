import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ListItem, ListItemIcon, Typography } from '@material-ui/core';


const styles = theme => ({
  container: {
    flexGrow: 1,
  },
});

function NavItem(props) {
  // const { classes } = props;

  return (
    <ListItem
      button
      onClick={() => {
        props.scrollToAnchor(props.anchor);
      }}
    >
      <ListItemIcon>
        {props.children}
      </ListItemIcon>
      <Typography
        variant="subheading"
        className={props.textColor}
      >
        {props.text}
      </Typography>
      {/* <ListItemText */}
      {/* primary={props.text} */}
      {/* classes={props.textColor} */}
      {/* /> */}
    </ListItem>
  );
}

NavItem.propTypes = {
  // classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles)(NavItem);
