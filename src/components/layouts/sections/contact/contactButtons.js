import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import {Grid, Button} from '@material-ui/core';
import {Send, Clear} from '@material-ui/icons';


const styles = {

};

class ContactButtons extends Component {
    render() {

        return (
            <Grid container
                  direction="row"
                  spacing={16}
                  justify="space-between"
                  alignItems="center">
                <Grid item xs className={this.props.classBtnBox}>
                    <a
                        href={this.props.mailToLink}
                        onClick={event => this.props.handleSubmit(event)}
                    >
                        <Button variant="contained"
                                size="large"
                                id="btnSubmit"
                                color="primary"
                                type="button"
                                className={classNames(this.props.classButton, this.props.classPrimaryC)}
                        >
                            Send Message
                            <Send/>
                        </Button>
                    </a>

                </Grid>
                <Grid item xs className={this.props.classBtnBox}>
                    <Button variant="contained"
                            size="large"
                            id="btnReset"
                            color="secondary"
                            type="reset"
                            onClick={event => this.props.handleReset(event)}
                            className={classNames(this.props.classButton, this.props.classSecondaryC)}
                    >
                        Reset Form
                        <Clear/>
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

ContactButtons.propTypes = {
    classes: PropTypes.object,
    classBtnBox: PropTypes.string,
    classButton: PropTypes.string,
    classPrimaryC: PropTypes.string,
    classSecondaryC: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    contactField: PropTypes.string,
    handleInput: PropTypes.func
}

export default withStyles(styles)(ContactButtons);
