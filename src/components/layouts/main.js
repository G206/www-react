import React, { Component } from 'react';
import '../../css/master.css';
import About from './sections/about';
import Portfolio from './sections/portfolio';
import Yoga from './sections/yoga';
import Hobbies from './sections/hobbies';
import Contact from './sections/contact';
import Follow from './sections/follow';
import {portfolioList, yogaList, hobbyList} from "./sections/slides/itemList";

class Main extends Component {
    render() {
        let assetsPath = require.context('./sections/slides/images', false, /\.(png|jpe?g|svg)$/);

        // Substituting the imgSrc from file name in ./images to their corresponding path after they are bundled.
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
