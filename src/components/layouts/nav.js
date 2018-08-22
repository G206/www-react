import React, { Component } from 'react';
import '../../css/master.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography,
    Drawer, List, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import logo from '../../images/web_design.png';
import {NavList} from './sections/nav/navList';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    text: {
        fontFamily: "Avengeance"
    },
    logo: {
        maxHeight: 60
    },
    navBar: {
        backgroundColor: "rgba(255, 0, 0, .6)",
        // position: "fixed",
        // top: 0
    },
    appFrame: {
        // height: 430,
        // zIndex: 1,
        // overflow: 'hidden',
        // position: 'relative',
        // display: 'flex',
        // width: '100%',
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
        margin: "0 1%"
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'fixed',
        width: drawerWidth,
    },
    drawerHeader: {
        // display: 'flex',
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    'content-left': {
        marginLeft: -drawerWidth,
    },
    'content-right': {
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'contentShift-left': {
        marginLeft: 0,
    },
    'contentShift-right': {
        marginRight: 0,
    },
});

class Nav extends Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classNames(classes.root, classes.appFrame)} id="mainNav">
                <AppBar
                    position="sticky"
                    className={classNames(classes.navBar, classes.appBar, {
                        [classes.appBarShift]: this.state.open,
                        [classes[`appBarShift-left`]]: this.state.open,
                    })}

                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, this.state.open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="display1" color="inherit" className={classes.text}>
                            <img src={logo} className={classes.logo} alt="logo"/> G.Dev
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="persistent"
                    anchor="left"
                    open={this.state.open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <Typography variant="display1"
                                    color="inherit"
                                    className={classes.text}>
                            <img src={logo} className={classes.logo} alt="logo"/> G.Dev
                            <IconButton onClick={this.handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </Typography>
                        <Divider/>
                        <List>
                            {NavList}
                        </List>
                    </div>
                </Drawer>
            </div>
        );
    }
}

Nav.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles) (Nav);
