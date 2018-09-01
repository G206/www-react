import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {ListItem, ListItemIcon, ClickAwayListener,
    Paper, Popover, Typography, Grid} from '@material-ui/core';

const styles = {
    container: {
        flexGrow: 1,
    },
    modalBox: {
        padding: "1%",
        maxWidth: "1170px"
    },
    mediaItem: {
        textAlign: "center",
        fontSize: "3em"
    },

};

class FollowList extends Component {
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

        // const customSlideCpnts = this.props.slides.map((item, index) =>
        //     <Link to = {'/'+item.href} key = {index}
        //           onClick={event => this.props.handleModalOpen(item.href, event)}
        //     >
        //         <img
        //             src = {item.imgSrc}
        //             alt = {item.alt}
        //             id = {item.id}
        //         />
        //         <p style = {textBoxStyle} >{item.des}</p>
        //     </Link>
        // );

        return (
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={40}
                  className={classes.mediaBox}
            >
                <Grid item xs>
                    {/*<ListItem*/}
                        {/*button*/}
                        {/*buttonRef={node => {*/}
                            {/*this.anchorEl = node;*/}
                        {/*}}*/}
                        {/*aria-owns={this.state.open ? 'FollowMe-grow' : null}*/}
                        {/*aria-haspopup="true"*/}
                        {/*onClick={this.handleToggle}*/}
                        {/*className={classes.mediaItem}*/}
                    {/*>*/}
                        {/*<ListItemIcon>*/}
                            {/*<i className="fab fa-facebook-f" aria-hidden="true"></i>*/}
                        {/*</ListItemIcon>*/}
                    {/*</ListItem>*/}
                    <a
                        href = '/#followMeBox'
                        onClick={this.handleToggle}
                        className={classes.mediaItem}
                    >
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                    </a>
                </Grid>
                <Grid item xs>
                    <ListItem
                        button
                        buttonRef={node => {
                            this.anchorEl = node;
                        }}
                        aria-owns={this.state.open ? 'FollowMe-grow' : null}
                        aria-haspopup="true"
                        onClick={this.handleToggle}
                    >
                        <ListItemIcon className={classes.mediaItem}>
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                        </ListItemIcon>
                    </ListItem>
                </Grid>
                <Grid item xs>
                    <ListItem
                        button
                        buttonRef={node => {
                            this.anchorEl = node;
                        }}
                        aria-owns={this.state.open ? 'FollowMe-grow' : null}
                        aria-haspopup="true"
                        onClick={this.handleToggle}
                    >
                        <ListItemIcon className={classes.mediaItem}>
                            <i className="fab fa-google-plus" aria-hidden="true"></i>
                        </ListItemIcon>
                    </ListItem>
                </Grid>
                <Grid item xs>
                    <ListItem
                        button
                        buttonRef={node => {
                            this.anchorEl = node;
                        }}
                        aria-owns={this.state.open ? 'FollowMe-grow' : null}
                        aria-haspopup="true"
                        onClick={this.handleToggle}
                    >
                        <ListItemIcon className={classes.mediaItem}>
                            <i className="fab fa-youtube" aria-hidden="true"></i>
                        </ListItemIcon>
                    </ListItem>
                </Grid>
                <Grid item xs>
                    <ListItem
                        button
                        buttonRef={node => {
                            this.anchorEl = node;
                        }}
                        aria-owns={this.state.open ? 'FollowMe-grow' : null}
                        aria-haspopup="true"
                        onClick={this.handleToggle}
                    >
                        <ListItemIcon className={classes.mediaItem}>
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </ListItemIcon>
                    </ListItem>
                </Grid>
                <Grid item xs>
                    <ListItem
                        button
                        buttonRef={node => {
                            this.anchorEl = node;
                        }}
                        aria-owns={this.state.open ? 'FollowMe-grow' : null}
                        aria-haspopup="true"
                        onClick={this.handleToggle}
                    >
                        <ListItemIcon className={classes.mediaItem}>
                            <i className="fab fa-linkedin" aria-hidden="true"></i>
                        </ListItemIcon>
                    </ListItem>
                </Grid>
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
