import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import '../../css/master.css';
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
            url: '/'
        };
    }
    handleModalOpen = (pURL) => {
        this.setState({
            open: true,
            url: '/' + pURL
        });
    };

    handleModalClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <main className={classes.container} id="mainWeb">
                    <About/>
                    <Portfolio
                        openModal={this.state.open}
                        handleModalClose={this.handleModalClose}
                        handleModalOpen={this.handleModalOpen}
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
                />
            </div>

        );
    }
}
Main.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default withStyles(styles)(Main);
