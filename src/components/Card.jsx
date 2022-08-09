import React from 'react';
import Styled from 'styled-components';

// icons
import { AiFillEye } from 'react-icons/ai';
import { DiGitBranch } from 'react-icons/di';

const Card = ({ title, tech, desc, link, github }) => {
    return (
        <StyledCard>
            <div className="title">
                <h4>{title}</h4>
                <p>{tech}</p>
            </div>

            <p>{desc}</p>

            <div className="links">
                <a href={link} target="_blank" rel="noopener noreferrer"><AiFillEye className="icons" /> Live</a>
                {
                    github && 
                    <a href={github} target="_blank" rel="noopener noreferrer"><DiGitBranch className="icons" /> Code</a>
                }
            </div>
        </StyledCard>
    )
}

export default Card;

const StyledCard = Styled.div`
    width: 100%;
    background: rgb(16 16 19);
    border-radius: 4px;
    padding: 1.5rem;
    height: 264px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
        h4 {
            font-size: 1.3rem;
            font-weight: 700;
            color: #fff;
        }
    }

    p {
        font-size: .85rem;
        font-weight: 400;
        color: rgba(255, 255, 255, .8);
        line-height: 1.7;
        margin-top: 1rem;
    }

    .links {
        display: flex;
        align-items: center;
        justify-content: space-between;

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