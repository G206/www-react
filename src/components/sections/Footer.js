import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    container: {
        flexGrow: 1,
        position: "fixed",
        width: "100%",
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .6)',
        color: 'white',
        textAlign: 'center',
        padding: '12px 0'
    },
};
function Footer(props) {
    const { classes } = props;
    return (
        <footer className={classes.container}>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
            >
                <Grid item xs={12}>
                    <Typography className={classes.heading} variant="body1">
                        Copyright Gabe &copy; 2018 - This site has been created using React JS. Social Media Links Not Active Yet - Please
                        Email Gabe@w3dev.io
                    </Typography>
                </Grid>
            </Grid>
        </footer>
    );
}

export default withStyles(styles)(Footer);
