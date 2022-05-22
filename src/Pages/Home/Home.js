import React from 'react';

import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import News from './News';
import Tools from './Tools';
import ToolsContainer from './ToolsContainer';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <ToolsContainer />
            <BusinessSummary/>
            <News/>
        </div>
    );
};

export default Home;