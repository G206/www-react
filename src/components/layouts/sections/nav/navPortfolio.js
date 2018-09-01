import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {ClickAwayListener, Paper, MenuItem, MenuList, Popover } from '@material-ui/core';

const styles = theme => ({
    container: {
        flexGrow: 1,
        display: 'flex',
    },

});

class NavPortfolio extends Component {

    render() {
        const { classes } = this.props;

        const createMenuItems = this.props.list.map((item, index) =>
            <MenuItem
                key = {index}
            >
                {item.des}
            </MenuItem>
        );

        return (
            <ClickAwayListener onClickAway={this.props.handleClose}>
                <Popover
                    open={this.props.open}
                    onClose={this.props.handleClose}
                    anchorEl={this.props.anchorEl}
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
}

NavPortfolio.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles) (NavPortfolio);
