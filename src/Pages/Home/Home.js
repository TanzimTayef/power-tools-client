import React from 'react';
import Footer from '../Shared/Footer';

import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import News from './News';
import Reviews from './Reviews';
import Tools from './Tools';
import ToolsContainer from './ToolsContainer';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <ToolsContainer />
            <BusinessSummary />
            <Reviews/>
            <News />
            <Footer/>
        </div>
    );
};

export default Home;