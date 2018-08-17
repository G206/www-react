import React, { Component } from 'react';
import '../../css/master.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../images/web_design.png';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
        fontFamily: "Avengeance"
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    logo: {
        maxHeight: 40
    },
    navBar: {
        backgroundColor: "rgba(255, 0, 0, .6)"
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
                        <Typography variant="title" color="inherit" className={classes.flex}>
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
