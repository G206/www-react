import React, {Component} from 'react';
// import logo from '../logo.svg';
// import '../css/App.css';
import Nav from './layouts/nav';
import Header from './layouts/header';
import Main from './layouts/main';
import Footer from './layouts/footer';

class App extends Component {
    render() {
        return (
            <div id="pageTop">
                <Nav/>
                <Header/>
                <Main/>
                <Footer/>
            </div>
            // <div className="App">
            //     <header className="App-header">
            //         <img src={logo} className="App-logo" alt="logo" />
            //         <h1 className="App-title">Welcome to React</h1>
            //     </header>
            //     <p className="App-intro">
            //             To get started, edit <code>src/App.js</code> and save to reload.
            //     </p>
            // </div>
        );
    }
}

export default App;
