import React from 'react';
import PropTypes from 'prop-types';
import Nav from './sections/Nav';
import { withStyles } from '@material-ui/core/styles';
import {hobbyList, portfolioList, yogaList} from "../data/itemList";

const styles = theme => ({
    container: {
        flexGrow: 1
    },
    '@global': {
        'a:link':{
            textDecoration: "none",
            color: theme.palette.primary2.main
        },
        'a:visited': {
            textDecoration: "none",
            color: theme.palette.primary2.main
        },
        'a:hover': {
            textDecoration: "none",
            color: theme.palette.secondary.main
        },

        'a:active': {
            textDecoration: "none",
            color: theme.palette.primary.main
        },
        '.slider-list': {
            minHeight: "400px"
        },
    },
});

function App (props) {

    const { classes } = props;
    const assetsPath = require.context('./sections/routes/slides/images', false, /\.(png|jpe?g|svg)$/);

    // Substituting the imgSrc from file name in .../images to their corresponding path after they are bundled.
    portfolioList.map((item, index) => {
        // console.log(assetsPath.keys(), assetsPath.id);
        item.imgSrc = assetsPath('./' + item.imgSrc);
    });
    yogaList.map((item, index) => {
        item.imgSrc = assetsPath('./' + item.imgSrc);
    });
    hobbyList.map((item, index) => {
        item.imgSrc = assetsPath('./' + item.imgSrc);
    });
    return (
        <div id="pageTop" className={classes.container}>
            <Nav />
        </div>
    );
}

App.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object,
    imgSrc: PropTypes.string
};

export default withStyles(styles)(App);
