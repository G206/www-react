import React from 'react';
import {ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import {Home, Work, Web, AccessibilityNew, PhotoLibrary,
    ContactMail, GroupAdd} from '@material-ui/icons';

export const NavList = (
    <div>
        <a href="#pageTop">
            <ListItem button>
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
        </a>
        <a href="#about">
            <ListItem button>

                <ListItemIcon>
                    <Work />
                </ListItemIcon>
                <ListItemText primary="About" />
            </ListItem>
        </a>
        <a href="#portfolio">
            <ListItem button>

                <ListItemIcon>
                    <Web />
                </ListItemIcon>
                <ListItemText primary="Portfolio" />
            </ListItem>
        </a>
        <Divider/>
        <a href="#yoga">
            <ListItem button>

                <ListItemIcon>
                    <AccessibilityNew />
                </ListItemIcon>
                <ListItemText primary="Yoga" />
            </ListItem>
        </a>
        <a href="#hobbies">
            <ListItem button>
                <ListItemIcon>
                    <PhotoLibrary />
                </ListItemIcon>
                <ListItemText primary="Hobbies" />
            </ListItem>
        </a>
        <Divider/>
        <a href="#contact">
            <ListItem button>
                <ListItemIcon>
                    <ContactMail />
                </ListItemIcon>
                <ListItemText primary="Contact" />
            </ListItem>
        </a>
        <a href="#followMe">
            <ListItem button>
                <ListItemIcon>
                    <GroupAdd />
                </ListItemIcon>
                <ListItemText primary="Follow Me" />
            </ListItem>
        </a>
    </div>
);