import React from 'react';
import Styled from 'styled-components';

// icons
import { AiFillEye } from 'react-icons/ai';
import { DiGitBranch } from 'react-icons/di';

const Card = () => {
    return (
        <StyledCard>
            <div className="title">
                <h4>Movie App</h4>
                <p>React + Styled-Components + MovieDb Api</p>
            </div>

            <p>An App Where The User Can see Latest Movies and More Info About Them.</p>

            <div className="links">
                <a href="https://github.com"><AiFillEye className="icons" /> Live</a>
                <a href="https://github.com"><DiGitBranch className="icons" /> Code</a>
            </div>
        </StyledCard>
    )
}

export default Card;

const StyledCard = Styled.div`
    width: 100%;
    background: #16161a;
    border-radius: 4px;
    padding: 1.5rem;
    height: 264px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
        h4 {
            font-size: 1rem;
            font-weight: 700;
            color: #fff;
        }
    }

    p {
        font-size: .75rem;
        font-weight: 400;
        color: rgba(255, 255, 255, .8);
        line-height: 1.7;
        margin-top: 1rem;
    }

    .links {
        display: flex;
        align-items: center;

        a {
            color: #fff;
            font-weight: 400;
            font-size: 1rem;
            display: flex;
            align-items: center;
            text-decoration: none;
            margin-right: 12px;
            cursor: pointer;

            .icons {
                margin-right: 4px;
            }
        }
    }
`;