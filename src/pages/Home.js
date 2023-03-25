import React from 'react';
import DevFull from '../Component/DevFull';
import Header from '../Component/Header';
import Projects from '../Component/Projects';

const Home = () => {
    return (
        <div>
            <Header />
            <DevFull />
            <Projects />
        </div>
    );
};

export default Home;