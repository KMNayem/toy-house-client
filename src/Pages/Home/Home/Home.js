import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import OurBlogs from '../OurBlogs/OurBlogs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <OurBlogs></OurBlogs>
        </div>
    );
};

export default Home;