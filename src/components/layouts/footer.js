import React, { Component } from 'react';
import '../../css/master.css';
import { withStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'

const styles = {
    container: {
        flexGrow: 1,
        position: "fixed",
        width: "100%",
        bottom: 0,
    },
};
class Footer extends Component {
    render() {
        const { classes } = this.props;
        return (
            <footer className={classes.container}>
                Copyright Gabe &copy; 2018 - This site has been created using React JS. Social Media Links Not Active Yet - Please
                Email Gabe@w3dev.io
            </footer>
        );
    }
}

export default withStyles(styles)(Footer);
