import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles/index";
import {ArrowBackIos} from '@material-ui/icons';
import '../../../../css/master.css';

const styles = theme => ({
    container: {
        flexGrow: 1,
    },
});

class CarouselLeftArrow extends Component {
    render() {
        const { classes } = this.props;
        return (
            <a
                href="#"
                className="carousel__arrow carousel__arrow--left"
                onClick={this.props.onClick}
            >
                <ArrowBackIos/>
            </a>
        );
    }
}

CarouselLeftArrow.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object,
    onClick: PropTypes.func
};

export default withStyles(styles)(CarouselLeftArrow);