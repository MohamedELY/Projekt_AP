import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HomeSearch from '../components/HomeSearch';

const HomeRoute = () => {
    return (
        <div>
            <NavBar />
            <HomeSearch />
            <Footer />
        </div>
    );
};

export default HomeRoute;
