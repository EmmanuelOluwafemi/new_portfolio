import React from 'react';
import Styled from 'styled-components';

import Card from './Card';

const data = [
    {
        title: 'Hopla Careers',
        tech: 'React + Styled-components + Redux',
        desc: 'Recruitment platform.',
        link: 'https://www.hoplacareers.online/',
    },
    {
        title: 'Google Docs Clone',
        tech: 'Nextjs + TailwindCss + Firebase + Next-auth',
        desc: 'Created a replica of Google docs for learning purpose.',
        link: 'https://google-docs-clone-sandy.vercel.app/',
        github: 'https://github.com/EmmanuelOluwafemi/google-docs-clone.git'
    },
    {
        title: 'SophisticatedDev Portfolio',
        tech: 'React + Styled-components + Gsap + framer-motion',
        desc: 'Portfolio Implementation for Sophisticated dev',
        link: 'https://www.sophisticateddev.com'
    },
    {
        title: 'Dashouts',
        tech: 'React + Gatsby + GraphQl + Gsap + Styled-components',
        desc: 'Multi-tasking errand solution app landing page',
        link: 'https://www.dashouts.com'
    },
    {
        title: 'Movie App',
        tech: 'React + Context Api + Styled-components',
        desc: 'An app that shows the list of latest movies, there rating, actors and other informations',
        link: 'https://slimmovies.netlify.app/',
        github: 'https://github.com/EmmanuelOluwafemi/movieApp'
    },
    {
        title: 'DNF',
        tech: 'React + Styled-components + Gsap',
        desc: 'Designer now Founders landing page',
        link: 'https://dnf-kappa.vercel.app'
    },
]

const Work = ({ isWeb }) => {
    return (
        <StyledWork className={isWeb ? 'isWeb' : ''}>
            {
                data.map(({ title, tech, desc, link, github }) => (
                    <Card 
                        title={title}
                        tech={tech}
                        desc={desc}
                        link={link}
                        github={github}
                    />
                ))
            }
        </StyledWork>
    )
}

export default Work;

const StyledWork = Styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);

        &.isWeb {
            display: none;
        }
    }
`;
