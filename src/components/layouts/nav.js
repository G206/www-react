import React, { Component } from 'react';
import '../../css/master.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../images/web_design.png';

const styles = {
    root: {
        flexGrow: 1,
    },
    text: {
        fontFamily: "Avengeance"
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    logo: {
        maxHeight: 60
    },
    navBar: {
        backgroundColor: "rgba(255, 0, 0, .6)",
        position: "fixed",
        top: 0
    }
};

class Nav extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} id="mainNav">
                <AppBar position="sticky" className={classes.navBar}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="display1" color="inherit" className={classes.text}>
                            <img src={logo} className={classes.logo} alt="logo"/> G.Dev
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Nav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (Nav);
