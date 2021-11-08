import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Features from './Features';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Features></Features>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;