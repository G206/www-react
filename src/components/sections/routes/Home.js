import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import About from './About';
import Portfolio from './Portfolio';
import Yoga from './Yoga';
import Hobbies from './Hobbies';
import Contact from './Contact';
import Follow from './Follow';

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
                <Portfolio {...this.props} />
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
