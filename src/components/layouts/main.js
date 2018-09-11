import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ModalBox from './sections/modalBox';
import Home from './sections/home';
import { Route } from "react-router-dom";
import {Element} from 'react-scroll';
import About from './sections/about';
import Portfolio from './sections/portfolio';
import Yoga from './sections/yoga';
import Hobbies from './sections/hobbies';
import Contact from './sections/contact';
import Follow from './sections/follow';

const styles = {
    container: {
        flexGrow: 1,
        backgroundColor: "rgba(0, 0, 0, 0)",
    },
};

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            url: '/',
            frameW: '100%',
            frameH: '100%'
        };
    }
    handleModalOpen = (pURL, pWidth, pHeight) => {
        this.setState({
            open: true,
            url: '/' + pURL,
            frameW: pWidth,
            frameH: pHeight
        });
    };

    handleModalClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <Element
                    className={classes.container}
                    id="containerElement"
                    name="containerElement"
                >
                    <Route exact path="/" render={(props) =>
                        <Home
                            openModal={this.state.open}
                            handleModalClose={this.handleModalClose}
                            handleModalOpen={this.handleModalOpen}
                            portfolioIndex={this.props.portfolioIndex}
                            advancePortfolio={this.props.advancePortfolio}
                        />}
                    />
                    <Route path="/about" component={About} />
                    <Route exact path="/portfolio" render={(props) =>
                        <Portfolio
                            openModal={this.state.open}
                            handleModalClose={this.handleModalClose}
                            handleModalOpen={this.handleModalOpen}
                            portfolioIndex={this.props.portfolioIndex}
                            advancePortfolio={this.props.advancePortfolio}
                        />}
                    />
                    <Route path="/yoga" component={Yoga} />
                    <Route path="/hobbies" component={Hobbies} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/follow" component={Follow} />
                </Element>
                <ModalBox
                    openModal={this.state.open}
                    handleModalClose={this.handleModalClose}
                    modalURL={this.state.url}
                    frameW={this.state.frameW}
                    frameH={this.state.frameH}
                />
            </Fragment>

        );
    }
}
Main.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(Main);
