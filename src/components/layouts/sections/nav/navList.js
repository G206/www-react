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
import {Scroll, Link as LinkScroll, Element , Events, animateScroll as scroll,
    scrollSpy, scroller} from 'react-scroll';

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
        this.setState({
            open: !this.state.open
        });
        this.anchorEl= node
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
                <LinkScroll
                    activeClass="active"
                    to="bannerWeb"
                    spy={true}
                    smooth={true}
                    duration={250}
                    containerId="containerElement"
                >
                    <ListItem button>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </LinkScroll>
                <Divider/>
                <LinkScroll
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={250}
                    containerId="containerElement"
                >
                    <ListItem button>

                        <ListItemIcon>
                            <Work />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                </LinkScroll>
                <LinkScroll
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    duration={250}
                    containerId="containerElement"
                >
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
                </LinkScroll>
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
                <LinkScroll
                    activeClass="active"
                    to="yoga"
                    spy={true}
                    smooth={true}
                    duration={250}
                    containerId="containerElement"
                >
                    <ListItem button>

                        <ListItemIcon>
                            <AccessibilityNew />
                        </ListItemIcon>
                        <ListItemText primary="Yoga" />
                    </ListItem>
                </LinkScroll>
                <LinkScroll
                    activeClass="active"
                    to="hobbies"
                    spy={true}
                    smooth={true}
                    duration={250}
                    containerId="containerElement"
                >
                    <ListItem button>
                        <ListItemIcon>
                            <PhotoLibrary />
                        </ListItemIcon>
                        <ListItemText primary="Hobbies" />
                    </ListItem>
                </LinkScroll>
                <Divider/>
                <LinkScroll
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={250}
                    containerId="containerElement"
                >
                    <ListItem button>
                        <ListItemIcon>
                            <ContactMail />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItem>
                </LinkScroll>
                <LinkScroll
                    activeClass="active"
                    to="followMe"
                    spy={true}
                    smooth={true}
                    duration={250}
                    containerId="containerElement"
                >
                    <ListItem button>
                        <ListItemIcon>
                            <GroupAdd />
                        </ListItemIcon>
                        <ListItemText primary="Follow Me" />
                    </ListItem>
                </LinkScroll>
                <Divider/>
                <Typography
                variant={'headline'}>
                    Isloated View
                </Typography>

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
            </div>
        );

    }
}

NavList.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(NavList);