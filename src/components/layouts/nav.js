import React, { Component } from 'react';
import '../../css/master.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography,
    Drawer, List, Divider} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import logo from '../../images/web_design.png';
import NavList from './sections/nav/navList';
import Header from './header';
import Main from './main';
import Footer from './footer';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: "rgba(0,0,0,0)"
    },
    text: {
        fontFamily: "Avengeance"
    },
    logo: {
        maxHeight: 60
    },
    navBar: {
        backgroundColor: "rgba(255, 0, 0, .6)",
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
        backgroundColor: "rgba(255,214,0,.6)"
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
        backgroundColor: "rgba(0,0,0,0)",
        // backgroundColor: theme.palette.background.default,
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
    constructor(props){
        super(props);
        this.state = {
            openDrawer: false,
        };
    }

    handleDrawerOpen = () => {
        this.setState({ openDrawer: true });
    };

    handleDrawerClose = () => {
        this.setState({ openDrawer: false });
    };

    render() {
        const { classes } = this.props;
        const {anchor, openDrawer} = this.state;

        return (
            <div className={classNames(classes.root)} id="mainNav">
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
                            className={classNames(classes.menuButton, this.state.openDrawer && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="display1" color="inherit" className={classes.text}>
                            <img src={logo} className={classes.logo} alt="logo"/> <a href="/index.html">G.Dev</a>
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer
                    variant="persistent"
                    anchor="left"
                    open={this.state.openDrawer}
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
                            <NavList/>
                        </List>
                    </div>
                </Drawer>
                <div
                    className={classNames(classes.content, classes[`content-${anchor}`], {
                        [classes.contentShift]: openDrawer,
                        [classes[`contentShift-${anchor}`]]: openDrawer,
                    })}
                >
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

Nav.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles) (Nav);
