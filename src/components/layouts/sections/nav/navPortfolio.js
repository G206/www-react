import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {ListItem, ListItemIcon, ListItemText, Divider, Button, ClickAwayListener, Grow,
    Paper, Popper, MenuItem, MenuList, Popover } from '@material-ui/core';

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
            <ListItem
                button
                buttonRef={node => {
                    this.anchorEl = node;
                }}
                aria-owns={this.props.open ? 'menu-list-grow' : null}
                aria-haspopup="true"
                onClick={this.props.handleToggle}
            >
                <a href="/#portfolio">
                    <ListItemIcon>
                        {this.props.children}
                    </ListItemIcon>
                    <ListItemText primary="Portfolio" />
                </a>
                <Popover
                    open={this.props.open}
                    onClose={event => this.props.handleClose(event)}
                    anchorEl={this.anchorEl}
                    anchorReference={this.anchorEl}
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
                        <ClickAwayListener onClickAway={event => this.props.handleClose(event)}>
                            <MenuList>
                                {createMenuItems}
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Popover>
            </ListItem>

        );
    }
}

NavPortfolio.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles) (NavPortfolio);
