import React, { Component } from 'react';
import '../../css/master.css';
import About from './sections/about';
import Portfolio from './sections/portfolio';
import Yoga from './sections/yoga';
import Hobbies from './sections/hobbies';
import Contact from './sections/contact';
import Follow from './sections/follow';

class Main extends Component {
    render() {
        return (
            <div className="" id="mainWeb">
                <About/>
                <Portfolio/>
                <Yoga/>
                <Hobbies/>
                <Contact/>
                <Follow/>
            </div>
        );
    }
}

export default Main;
