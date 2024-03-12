import React from "react";
import '../stylesheets/logo.css';
import logo from '../assets/logo.png';

function Head() {
    return (
        <div className="logo-container">
            <img
                src={logo}
                className='logo'
                alt="logo"
            />
        </div>
    );
}

export default Head;