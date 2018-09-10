import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import About from './sections/about';
import Portfolio from './sections/portfolio';
import Yoga from './sections/yoga';
import Hobbies from './sections/hobbies';
import Contact from './sections/contact';
import Follow from './sections/follow';
import ModalBox from './sections/modalBox';

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
                <main className={classes.container} id="mainWeb">
                    <About/>
                    <Portfolio
                        openModal={this.state.open}
                        handleModalClose={this.handleModalClose}
                        handleModalOpen={this.handleModalOpen}
                        portfolioIndex={this.props.portfolioIndex}
                        advancePortfolio={this.props.advancePortfolio}
                    />
                    <Yoga/>
                    <Hobbies/>
                    <Contact/>
                    <Follow/>
                </main>
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
