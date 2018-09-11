import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import {Paper, Typography, Modal} from '@material-ui/core';
import Iframe from 'react-iframe';


const styles = {
    container: {
        flexGrow: 1,
        maxWidth: '100%',
        maxHeight: '95%'
    },
    paper: {
        margin: '4% 2% 1% 2%',
        padding: '1%',
        backgroundColor: "white",
        height: '95%',
    },
    frame: {
        maxWidth: '100%',
        maxHeight: '95%'
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
                open={this.props.openModal}
                onClose={this.props.handleModalClose}
            >

                <Paper
                    className={classes.paper}
                >
                    <Typography variant="display1">
                        Project or Assignment is displayed below.
                    </Typography>
                    <Typography variant="headline">
                        Most assignments and projects display correctly when viewed
                        from a desktop PC and Not using any display Scaling.
                        Please <a href={'http:/' + this.props.modalURL} id='aModalIframe'
                                  target="_blank"> CLICK HERE</a> to open in a new tab.
                    </Typography>
                    <Iframe url={'http:/' + this.props.modalURL}
                            position="relative"
                            id="modalIframe"
                            // width={this.props.frameW}
                            // height={this.props.frameH}
                            width="100%"
                            height="90%"
                            allowFullScreen
                            className={classes.frame}
                    />
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
