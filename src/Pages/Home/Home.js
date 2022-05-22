import React from 'react';

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
            <News/>
        </div>
    );
};

export default Home;