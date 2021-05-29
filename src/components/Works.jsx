import React from 'react';
import Styled from 'styled-components';

import Card from './Card';

const Work = ({ isWeb }) => {
    return (
        <StyledWork className={isWeb ? 'isWeb' : ''}>
            <Card />
            <Card />
            <Card />
            <Card />
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
