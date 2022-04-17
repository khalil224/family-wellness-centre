import React from 'react';
import Carousel from '../Carousel/Carousel';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <>

            <Banner></Banner>
            <Services></Services>
        </>
    );
};

export default Home;