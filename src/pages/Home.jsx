import React from 'react';
import MobileHome from '../components/MobileHome';
import Work from '../components/Works';
import MainLayout from '../layouts/MainLayout';

const Home = () => {
    return (
        <MainLayout>
            <Work isWeb={true} />
            <MobileHome isMobile={true} />
        </MainLayout>
    )
}

export default Home;
