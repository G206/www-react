import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import {Grid, Paper, Typography, Modal} from '@material-ui/core';


const styles = {
    container: {
        flexGrow: 1,

    },
    paper: {
        margin: '4% 1% 1% 1%'
    }
};

class ModalBox extends Component {

    render() {
        const { classes } = this.props;

        return (
            <Modal
                className={classes.container}
                id="modalBox"
                aria-labelledby="Project / Assignment"
                aria-describedby="Project / Assignment Displayed"
                open={this.props.openBox}
                onClose={this.props.handleClose}
            >

                <Paper
                    className={classes.paper}
                >
                    <Typography variant="display2">
                        MODAL Title
                    </Typography>
                    <Typography variant="display4">
                        MODAL Content
                    </Typography>
                </Paper>
            </Modal>
        );
    }
}


ModalBox.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(ModalBox);
