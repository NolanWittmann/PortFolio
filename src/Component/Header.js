import React from 'react';
import Profile from "./Profile"
import Navigation from "./Navigation"

const Header = () => {
    return (
        <div className='header'>
            <Profile />
            <Navigation />
        </div>
    );
};

export default Header;