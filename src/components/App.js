import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Nav from './layouts/nav';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import {hobbyList, portfolioList, yogaList} from "../data/itemList";

const theme = createMuiTheme(
    {
        type: "dark",
        "palette": {
            "primary1Color": "#d50000",
            "canvasColor": "rgba(0, 0, 0, 0.6)",
            "accent3Color": "rgba(213, 0, 0, 0.6)",
            "accent1Color": "#ffd600",
            "primary2Color": "rgba(0, 0, 0, 0.6)",
            "primary3Color": "rgba(255, 255, 255, 0.6)",
            "accent2Color": "#6200ea",
            "secondaryTextColor": "#000000",
            "alternateTextColor": "#d50000",
            "borderColor": "#ffd600",
            "disabledColor": "#00c853",
            "pickerHeaderColor": "rgba(255, 255, 255, 0.6)",
            "shadowColor": "rgba(255, 214, 0, 0.6)"
        },
        "appBar": {
            "color": "rgba(213, 0, 0, 0.6)",
            "textColor": "#ffffff"
        },
        "tabs": {
            "backgroundColor": "rgba(213, 0, 0, 0.6)",
            "textColor": "#ffffff",
            "selectedTextColor": "#ffd600"
        },
        "textField": {
            "floatingLabelColor": "rgba(0, 0, 0, 0.6)",
            "hintColor": "#6200ea"
        }
    });

const styles = {
    container: {
        flexGrow: 1
    },
};

class App extends Component {

    render() {
        const { classes } = this.props;
        const assetsPath = require.context('./layouts/sections/slides/images', false, /\.(png|jpe?g|svg)$/);

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
            <MuiThemeProvider theme={theme}>
                <div id="pageTop" className={classes.container}>
                    <Nav/>
                    {/*<Header/>*/}
                    {/*<Main/>*/}
                    {/*<Footer/>*/}
                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object,
    imgSrc: PropTypes.string
};

export default withStyles(styles)(App);
