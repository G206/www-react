import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles/index";
import '../../../../css/master.css';

const styles = theme => ({
    container: {
        flexGrow: 1,
    },
});


class CarouselIndicator extends Component {
    render() {
        const { classes } = this.props;
        return (
            <li>
                <a
                    className={
                        this.props.index === this.props.activeIndex
                            ? "carousel__indicator carousel__indicator--active"
                            : "carousel__indicator"
                    }
                    onClick={this.props.onClick}
                />
            </li>
        );
    }
}

CarouselIndicator.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object,
    onClick: PropTypes.func
};

export default withStyles(styles)(CarouselIndicator);