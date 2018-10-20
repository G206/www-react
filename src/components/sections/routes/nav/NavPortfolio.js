import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {ClickAwayListener, Paper, MenuItem, MenuList, Popover } from '@material-ui/core';

const styles = theme => ({
    container: {
        flexGrow: 1,
        display: 'flex',
    },

});

function NavPortfolio(props) {

    // const { classes } = props;

    const createMenuItems = props.list.map((item, index) =>
        <MenuItem
            key = {index}
            onClick={event => props.advancePortfolio(index, event)}
        >
            {item.des}
        </MenuItem>
    );

    return (
        <ClickAwayListener onClickAway={props.handleClose}>
            <Popover
                open={props.open}
                onClose={props.handleClose}
                anchorEl={props.anchorEl}
                anchorReference={'anchorEl'}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <Paper>
                    <MenuList>
                        {createMenuItems}
                    </MenuList>
                </Paper>
            </Popover>
        </ClickAwayListener>
    );
}

NavPortfolio.propTypes = {
    // classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles) (NavPortfolio);
