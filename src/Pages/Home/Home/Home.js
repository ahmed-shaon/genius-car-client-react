import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Information from '../Information/Information';
import Products from '../Products/Products';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Information></Information>
            <Products></Products>
        </div>
    );
};

export default Home;