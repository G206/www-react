import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ModalBox from './routes/ModalBox';
import Home from './routes/Home';
import { Route } from "react-router-dom";
import About from './routes/About';
import Portfolio from './routes/Portfolio';
import Yoga from './routes/Yoga';
import Hobbies from './routes/Hobbies';
import Contact from './routes/Contact';
import Follow from './routes/Follow';

const styles = theme => ({
    container: {
        flexGrow: 1,
        backgroundColor: theme.palette.transparent
    },
});

class Routes extends Component {
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
                <main
                    className={classes.container}
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
Routes.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(Routes);
