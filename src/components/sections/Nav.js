import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography,
    Drawer, List, Divider} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import logo from '../../images/web_design.png';
import NavList from './routes/nav/NavList';
import Header from './Header';
import Routes from './Routes';
import Footer from './Footer';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.transparent,
    },
    text: {

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
        maxHeight: 60
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
        margin: "0 1%"
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

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            anchor: 'left',
            openDrawer: false,
            portfolioIndex: 0
        };
    };

    advancePortfolio = (slideIndex) => {
        this.setState({ portfolioIndex: slideIndex});
    };

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
            <Router>
                <nav
                    className={classNames(classes.root)}
                    id="mainNav"
                >
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
                            <Typography variant="display1" color="inherit"
                                        className={classNames(classes.text, classes.leftJust)}
                            >
                                <img src={logo} className={classes.logo} alt="logo"/>
                                <Link to="/">
                                    G.Dev
                                </Link>
                            </Typography>
                            <Typography variant="display1" color="inherit"
                                        className={classNames(classes.text, classes.rightJust)}
                            >
                                React JS
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
                                <NavList
                                    advancePortfolio={this.advancePortfolio}
                                />
                            </List>
                        </div>
                    </Drawer>
                    <div
                        className={classNames(classes.content, classes[`content-${anchor}`],
                            {[classes.contentShift]: openDrawer,
                                [classes[`contentShift-${anchor}`]]: openDrawer},
                            'element'
                        )}
                    >
                        <Header/>
                        <Routes
                            portfolioIndex={this.state.portfolioIndex}
                            advancePortfolio={this.advancePortfolio}
                        />
                    </div>
                    <Footer/>
                </nav>
            </Router>
        );
    }
}

Nav.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles) (Nav);