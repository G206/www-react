import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {ListItem, ListItemIcon, ListItemText,
    Divider, Typography} from '@material-ui/core';
import {Home, Work, Web, AccessibilityNew, PhotoLibrary,
    ContactMail, GroupAdd} from '@material-ui/icons';
import NavPortfolio from './navPortfolio';
import {portfolioList} from '../../../../data/itemList';
import {goToAnchor } from 'react-scrollable-anchor';

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
        this.anchors = [null, null];
    }

    handleToggle = (node) => {
        goToAnchor("portfolio");
        this.setState({
            open: !this.state.open
        });
        this.anchorEl= node;
    };


    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <ListItem
                    button
                    onClick={() => {
                        goToAnchor("bannerWeb");
                    }}
                >
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <Divider/>
                <ListItem
                    button
                    onClick={() => goToAnchor("about")}
                >

                    <ListItemIcon>
                        <Work />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem
                    button
                    buttonRef={node => {
                        this.anchors[0] = node;
                    }}
                    aria-owns={this.state.open ? 'NAV-list-grow' : null}
                    aria-haspopup="true"
                    onClick={event => this.handleToggle(this.anchors[0], event)}
                >
                    <ListItemIcon>
                        <Web/>
                    </ListItemIcon>
                    <ListItemText primary="Portfolio" />
                </ListItem>
                <Divider/>
                <ListItem
                    button
                    onClick={() => goToAnchor("yoga")}
                >

                    <ListItemIcon>
                        <AccessibilityNew />
                    </ListItemIcon>
                    <ListItemText primary="Yoga" />
                </ListItem>
                <ListItem
                    button
                    onClick={() => goToAnchor("hobbies")}
                >
                    <ListItemIcon>
                        <PhotoLibrary />
                    </ListItemIcon>
                    <ListItemText primary="Hobbies" />
                </ListItem>
                <Divider/>
                <ListItem
                    button
                    onClick={() => goToAnchor("contact")}
                >
                    <ListItemIcon>
                        <ContactMail />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                </ListItem>
                <ListItem
                    button
                    onClick={() => goToAnchor("followMe")}
                >
                    <ListItemIcon>
                        <GroupAdd />
                    </ListItemIcon>
                    <ListItemText primary="Follow Me" />
                </ListItem>
                <Divider/>
                <Typography
                variant={'headline'}>
                    Isloated View
                </Typography>
                <Link
                    to="/"
                >
                    <ListItem button>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>
                <Link
                    to="/about"
                >
                    <ListItem button>
                        <ListItemIcon>
                            <Work />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                </Link>
                <Link
                    to="/portfolio"
                >
                    <ListItem
                        button
                        buttonRef={node => {
                            this.anchors[1] = node;
                        }}
                        aria-owns={this.state.open ? 'NAV-list-grow' : null}
                        aria-haspopup="true"
                        onClick={event => this.handleToggle(this.anchors[1], event)}
                    >
                        <ListItemIcon>
                            <Web/>
                        </ListItemIcon>
                        <ListItemText primary="Portfolio" />
                    </ListItem>
                </Link>
                <Link
                    to="/yoga"
                >
                    <ListItem button>
                        <ListItemIcon>
                            <AccessibilityNew />
                        </ListItemIcon>
                        <ListItemText primary="Yoga" />
                    </ListItem>
                </Link>
                <Link
                    to="/hobbies"
                >
                    <ListItem button>
                        <ListItemIcon>
                            <PhotoLibrary />
                        </ListItemIcon>
                        <ListItemText primary="Hobbies" />
                    </ListItem>
                </Link>
                <Link
                    to="/contact"
                >
                    <ListItem button>
                        <ListItemIcon>
                            <ContactMail />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItem>
                </Link>
                <Link
                    to="/follow"
                >
                    <ListItem button>
                        <ListItemIcon>
                            <GroupAdd />
                        </ListItemIcon>
                        <ListItemText primary="Follow Me" />
                    </ListItem>
                </Link>
                <NavPortfolio
                    open={this.state.open}
                    handleClose={this.handleClose}
                    handleToggle={this.handleToggle}
                    list={portfolioList}
                    anchorEl = {this.anchorEl}
                    advancePortfolio={this.props.advancePortfolio}
                >
                </NavPortfolio>
            </div>
        );

    }
}

NavList.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(NavList);