import React, { Component } from 'react';
import logo from '../../images/web_ban_bottom.jpg'
import '../../css/master.css';

class Header extends Component {
    render() {
        return (
            <div className="">
                <img src={logo} className="" alt="logo" />
                <p className="">
                    Header Component
                </p>
            </div>
        );
    }
}

export default Header;
