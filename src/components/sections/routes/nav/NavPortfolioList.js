import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core';
import {AssignmentTurnedInTwoTone } from '@material-ui/icons';

const styles = theme => ({
    container: {
        flexGrow: 1,
        display: 'flex',
    },
    icon: {
        padding: "0",
        margin: "0"
    },
    text: {
        padding: "0",
        margin: "0",
        paddingLeft: "6px"
    },
    nested: {
        padding: "0",
        paddingBottom: "12px",
        paddingLeft: "40px",
    },
});

function NavPortfolioList(props) {

    const { classes } = props;

    const createMenuItems = props.list.map((item, index) =>
        <ListItem
            key = {index}
            button
            className={classes.nested}
            onClick={event => props.advancePortfolio(index, event)}
        >
            <ListItemIcon
                className={classes.icon}
            >
                <AssignmentTurnedInTwoTone/>
            </ListItemIcon>
            <ListItemText
                primary={item.des}
                className={classes.text}
            />
        </ListItem>
    );

    return (
        <List component="div" disablePadding>
            {createMenuItems}
        </List>
    );
}

NavPortfolioList.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles) (NavPortfolioList);
