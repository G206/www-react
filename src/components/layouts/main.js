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
            <main className="" id="mainWeb">
                <About/>
                <Portfolio/>
                <Yoga/>
                <Hobbies/>
                <Contact/>
                <Follow/>
            </main>
        );
    }
}

export default Main;
