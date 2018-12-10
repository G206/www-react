import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, IconButton, Typography,
  Drawer, List, Divider,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import logo from '../../images/web_design.png';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.transparent,
  },
  text: {
    color: theme.palette.text.accent,
  },
  leftJust: {
    display: 'inline-block',
    textAlign: 'left',
    verticalAlign: 'text-bottom',
    width: '49%',
  },
  rightJust: {
    display: 'inline-block',
    textAlign: 'right',
    verticalAlign: 'text-bottom',
    width: '49%',
  },
  logo: {
    maxHeight: 60,
  },
  navBar: {
    backgroundColor: theme.palette.primary.transparent,
  },
  appBar: {
    position: 'fixed',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    margin: '0 1%',
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'fixed',
    width: drawerWidth,
    backgroundColor: theme.palette.secondary.transparent,
  },
  drawerHeader: {
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.transparent,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: 0,
  },
  'content-right': {
    marginRight: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: drawerWidth,
  },
  'contentShift-right': {
    marginRight: drawerWidth,
  },
});

const NavAppBar = (props) => {

  render() {
    const { classes } = this.props;
    const { anchor, openDrawer, portfolioIndex } = this.state;

    return (
        <AppBar
            position="sticky"
            className={classNames(classes.navBar, classes.appBar, {
              [classes.appBarShift]: openDrawer,
              [classes[`appBarShift-${anchor}`]]: openDrawer,
            })}
        >
          <Toolbar>
            <IconButton
                color="inherit"
                aria-label="Nav Bar"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, openDrawer && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
                variant="display1"
                color="inherit"
                className={classNames(classes.text, classes.leftJust)}
            >
              <img src={logo} className={classes.logo} alt="logo" />
              <Link to="/">
                G.Dev
              </Link>
            </Typography>
            <Typography
                variant="display1"
                color="inherit"
                className={classNames(classes.text, classes.rightJust)}
            >
              React JS
            </Typography>
          </Toolbar>
        </AppBar>
    );
  }
};

Nav.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles)(NavAppBar);
