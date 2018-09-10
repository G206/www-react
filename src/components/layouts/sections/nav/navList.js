import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import {Home, Work, Web, AccessibilityNew, PhotoLibrary,
    ContactMail, GroupAdd} from '@material-ui/icons';
import NavPortfolio from './navPortfolio';
import {portfolioList} from '../../../../data/itemList';

const styles = {
    container: {
        flexGrow: 1,
    },
};

class NavList extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
        };
        this.anchorEl = null;

    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    };


    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <div>
                <a href="/index.html">
                    <ListItem button>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </a>
                <a href="/index.html#about">
                    <ListItem button>

                        <ListItemIcon>
                            <Work />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                </a>
                <a href="/index.html#portfolio">
                    <ListItem
                        button
                        buttonRef={node => {
                            this.anchorEl = node;
                        }}
                        aria-owns={this.state.open ? 'NAV-list-grow' : null}
                        aria-haspopup="true"
                        onClick={this.handleToggle}
                    >
                        <ListItemIcon>
                            <Web/>
                        </ListItemIcon>
                        <ListItemText primary="Portfolio" />
                    </ListItem>
                </a>
                <NavPortfolio
                    open={this.state.open}
                    handleClose={this.handleClose}
                    handleToggle={this.handleToggle}
                    list={portfolioList}
                    anchorEl = {this.anchorEl}
                    advancePortfolio={this.props.advancePortfolio}
                >
                </NavPortfolio>
                <Divider/>
                <a href="/index.html#yoga">
                    <ListItem button>

                        <ListItemIcon>
                            <AccessibilityNew />
                        </ListItemIcon>
                        <ListItemText primary="Yoga" />
                    </ListItem>
                </a>
                <a href="/index.html#hobbies">
                    <ListItem button>
                        <ListItemIcon>
                            <PhotoLibrary />
                        </ListItemIcon>
                        <ListItemText primary="Hobbies" />
                    </ListItem>
                </a>
                <Divider/>
                <a href="/index.html#contact">
                    <ListItem button>
                        <ListItemIcon>
                            <ContactMail />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItem>
                </a>
                <a href="/index.html#followMe">
                    <ListItem button>
                        <ListItemIcon>
                            <GroupAdd />
                        </ListItemIcon>
                        <ListItemText primary="Follow Me" />
                    </ListItem>
                </a>
            </div>
        );

    }
}

NavList.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(NavList);