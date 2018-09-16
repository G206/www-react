import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {ListItem, ListItemIcon, ListItemText,
    Divider, Typography, Collapse } from '@material-ui/core';
import {Home, Work, Web, AccessibilityNew, PhotoLibrary,
    ContactMail, GroupAdd, ExpandLess, ExpandMore } from '@material-ui/icons';
import NavPortfolio from './navPortfolio';
import NavPortfolioList from './navPortfolioList';
import NavItem from './navItem';
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
            openNest: false
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

    handleClick = () => {
        this.setState({
            openNest: !this.state.openNest,
        });
    };

    scrollToAnchor = (anchor) => {
        (anchor != null) ? goToAnchor(anchor) : null;
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <NavItem
                    scrollToAnchor={this.scrollToAnchor}
                    anchor={"bannerWeb"}
                    text={"Home"}
                >
                    <Home />
                </NavItem>
                <Divider/>
                <NavItem
                    scrollToAnchor={this.scrollToAnchor}
                    anchor={"about"}
                    text={"About"}
                >
                    <Work />
                </NavItem>
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
                <NavItem
                    scrollToAnchor={this.scrollToAnchor}
                    anchor={"yoga"}
                    text={"Yoga"}
                >
                    <AccessibilityNew />
                </NavItem>
                <NavItem
                    scrollToAnchor={this.scrollToAnchor}
                    anchor={"hobbies"}
                    text={"Hobbies"}
                >
                    <PhotoLibrary />
                </NavItem>
                <Divider/>
                <NavItem
                    scrollToAnchor={this.scrollToAnchor}
                    anchor={"contact"}
                    text={"Contact"}
                >
                    <ContactMail />
                </NavItem>
                <NavItem
                    scrollToAnchor={this.scrollToAnchor}
                    anchor={"followMe"}
                    text={"Follow Me"}
                >
                    <GroupAdd />
                </NavItem>
                <Divider/>
                <Typography
                variant={'headline'}>
                    Isolated Sections
                </Typography>
                <Link
                    to="/"
                >
                    <NavItem
                        scrollToAnchor={this.scrollToAnchor}
                        anchor={null}
                        text={"Home - All Sections"}
                    >
                        <Home />
                    </NavItem>
                </Link>
                <Link
                    to="/about"
                >
                    <NavItem
                        scrollToAnchor={this.scrollToAnchor}
                        anchor={null}
                        text={"About"}
                    >
                        <Work />
                    </NavItem>
                </Link>
                <Link
                    to="/portfolio"
                >
                    <ListItem
                        button
                        aria-owns={this.state.open ? 'Portfolio-list-grow' : null}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                    >
                        <ListItemIcon>
                            <Web/>
                        </ListItemIcon>
                        <ListItemText primary="Portfolio" />
                        {this.state.openNest ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                </Link>
                <Collapse in={this.state.openNest} timeout="auto" unmountOnExit>
                    <NavPortfolioList
                        list={portfolioList}
                        advancePortfolio={this.props.advancePortfolio}
                    />
                </Collapse>
                <Link
                    to="/yoga"
                >
                    <NavItem
                        scrollToAnchor={this.scrollToAnchor}
                        anchor={null}
                        text={"Yoga"}
                    >
                        <AccessibilityNew />
                    </NavItem>
                </Link>
                <Link
                    to="/hobbies"
                >
                    <NavItem
                        scrollToAnchor={this.scrollToAnchor}
                        anchor={null}
                        text={"Hobbies"}
                    >
                        <PhotoLibrary />
                    </NavItem>
                </Link>
                <Link
                    to="/contact"
                >
                    <NavItem
                        scrollToAnchor={this.scrollToAnchor}
                        anchor={null}
                        text={"Contact"}
                    >
                        <ContactMail />
                    </NavItem>
                </Link>
                <Link
                    to="/follow"
                >
                    <NavItem
                        scrollToAnchor={this.scrollToAnchor}
                        anchor={null}
                        text={"Follow Me"}
                    >
                        <GroupAdd />
                    </NavItem>
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