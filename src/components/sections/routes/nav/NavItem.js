import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {ListItem, ListItemIcon, ListItemText,} from '@material-ui/core';


const styles = theme => ({
    container: {
        flexGrow: 1,
    },
});

function NavItem(props) {

    // const { classes } = props;

    return (
        <ListItem
            button
            onClick={() => {
                props.scrollToAnchor(props.anchor);
            }}
        >
            <ListItemIcon>
                {props.children}
            </ListItemIcon>
            <ListItemText primary={props.text} />
        </ListItem>
    );
}

NavItem.propTypes = {
    // classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(NavItem);