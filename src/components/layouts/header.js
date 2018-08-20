import React, { Component } from 'react';
import logo from '../../images/web_ban_bottom.jpg'
import '../../css/master.css';
import { withStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'

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
            <div className={classes.container} id="bannerWeb">
                <Grid container>
                    <Grid item xs={12}>
                        <img src={logo} className={classes.headerImg} alt="Banner Image" />
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default withStyles(styles) (Header);
