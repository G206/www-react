import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import About from './about';
import Portfolio from './portfolio';
import Yoga from './yoga';
import Hobbies from './hobbies';
import Contact from './contact';
import Follow from './follow';

const styles = theme => ({
    container: {
        flexGrow: 1,
        backgroundColor: theme.palette.primary2.main
    },
});

class Home extends Component {

    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <About/>
                <Portfolio
                    openModal={this.props.openModal}
                    handleModalClose={this.props.handleModalClose}
                    handleModalOpen={this.props.handleModalOpen}
                    portfolioIndex={this.props.portfolioIndex}
                    advancePortfolio={this.props.advancePortfolio}
                />
                <Yoga/>
                <Hobbies/>
                <Contact/>
                <Follow/>
            </Fragment>

        );
    }
}
Home.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(Home);
