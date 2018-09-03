import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {ListItem, ListItemIcon, ClickAwayListener,
    Popover, Typography, Grid, IconButton } from '@material-ui/core';
import {socialMediaList} from "../../../../data/itemList";

const styles = {
    container: {
        flexGrow: 1,
    },
    modalBox: {
        padding: "1%",
        maxWidth: "1170px"
    },
    mediaItem: {
        fontSize: "3em",
        height: "2em",
        width: "2em"
    },

};

class FollowList extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
        };
        this.anchorEl= null
        this.anchors = [null, null, null, null, null, null];

    }

    handleToggle = (node) => {

        this.setState({
            open: !this.state.open,
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

        const SocialMediaLinks = socialMediaList.map((item, index) =>
            <Grid item xs
                  key = {index}
            >
                <a
                    href = {item.href}
                >
                    <IconButton
                        buttonRef={node => {
                            this.anchors[item.pos] = node;
                        }}
                        onClick={event => this.handleToggle(this.anchors[item.pos], event)}
                        aria-label={item.des}
                        className={classes.mediaItem}
                    >
                        <i className={item.icon}></i>
                    </IconButton >
                </a>
            </Grid>
        );

        return (
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={40}
                  className={classes.mediaBox}
            >

                {SocialMediaLinks}
                <ClickAwayListener onClickAway={this.handleClose}>
                    <Popover
                        open={this.state.open}
                        onClose={this.handleClose}
                        anchorEl={this.anchorEl}
                        anchorReference={'anchorEl'}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                    >
                        <Grid container
                              direction="row"
                              justify="center"
                              alignItems="center"
                              spacing={40}
                              className={classes.modalBox}
                        >
                            <Grid item xs={12}>
                                <Typography variant="title">
                                    Currently, I am not on social media and therefore the links to the various social media sites do not
                                    currently work. Please email me directly at gabe@w3dev.io with any inquiries you might have. You
                                    can optionally also use the contact form above to prepopulate your email message. Eventually, I plan
                                    on using social media for my various hobbies and to update the links as I create the profiles. Thank
                                    you...Gabe
                                </Typography>
                            </Grid>
                        </Grid>
                    </Popover>
                </ClickAwayListener>
            </Grid>
        );
    }
}

FollowList.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(FollowList);
