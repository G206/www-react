import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/web_ban_bottom.jpg'
import { withStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import {Element} from 'react-scroll';

const styles = {
    container: {
        flexGrow: 1
    },
    headerImg: {
        width: "100%"
    },
};

class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Element
                className={classes.container}
                id="bannerWeb"
                name="bannerWeb"
            >
                <Grid container>
                    <Grid item xs={12}>
                        <img src={logo} className={classes.headerImg} alt="Banner Logo" />
                    </Grid>
                </Grid>

            </Element>
        );
    }
}
Header.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};
export default withStyles(styles) (Header);
