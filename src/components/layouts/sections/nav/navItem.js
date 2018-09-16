import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {ListItem, ListItemIcon, ListItemText,} from '@material-ui/core';


const styles = {
    container: {
        flexGrow: 1,
    },
};

class NavItem extends Component {

    render() {
        const { classes } = this.props;

        return (
            <ListItem
                button
                onClick={() => {
                    this.props.scrollToAnchor(this.props.anchor);
                }}
            >
                <ListItemIcon>
                    {this.props.children}
                </ListItemIcon>
                <ListItemText primary={this.props.text} />
            </ListItem>
        );

    }
}

NavItem.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(NavItem);