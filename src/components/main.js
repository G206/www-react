import React, { Component } from 'react';
import '../css/master.css';
import About from './about';
import Portfolio from './portfolio';
import Yoga from './yoga';
import Hobbies from './hobbies';
import Contact from './contact';
import Follow from './follow';
import Footer from './footer';


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
                <Footer/>
            </div>
        );
    }
}

export default Main;
