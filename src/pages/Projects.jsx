import React from 'react';

// Layout Component
import MainLayout from '../layouts/MainLayout';

// Work component to show the list of projects
import Work from '../components/Works';

const Projects = () => {
    return (
        <MainLayout>
            <Work />
        </MainLayout>
    )
}

export default Projects;