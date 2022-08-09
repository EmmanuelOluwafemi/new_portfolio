import React from 'react';
import Styled from 'styled-components';

// from react router dom
import { Link } from 'react-router-dom';

// icons
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

// images
import avatar from '../assets/icons/avatar.png';
import userDetails from '../constants/userDetails';

const MobileHome = ({ isMobile }) => {
    return (
        <StyledMobile className={isMobile ? 'isMobile' : ''}>
            <h4><span>Hello,</span> I’m <br /> {userDetails.name}. </h4>
            <p>
                {userDetails.headline}
            </p>

            <Link className="cta" to="/contact">Let's Talk</Link>

            <div className="contact">
                <div className="face">
                    <img src={avatar} alt="my face" />
                </div>
                <div className="links">
                    <a href={userDetails.github}><FaGithub className="icons" /> Github</a>
                    <a href={userDetails.twitter}><FaTwitter className="icons" /> Twitter</a>
                    <a href={userDetails.linkedin}><FaLinkedin className="icons" /> Linkedin</a>
                </div>
            </div>
        </StyledMobile>
    )
}

export default MobileHome;

const StyledMobile = Styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &.isMobile {
        display: none;

        @media (max-width: 768px) {
            display: flex;
        }
    }

    h4 {
        color: #fff;
        font-size: 2rem;
        max-width: 400px;
        text-align: center;

        span {
            color: #EF3E07;
        }
    }

    p {
        font-size: .9rem;
        color: rgba(255, 255, 255, 0.8);
        font-weight: 300;
        line-height: 1.5;
        margin-top: 1rem;
        text-align: center;
    }

    a.cta {
        margin-top: 2rem;
        display: flex;
        height: 40px;
        width: 124px;
        border: 3px solid #EF3E07;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        text-transform: uppercase;
        text-decoration: none;
        color: #EF3E07;
        cursor: pointer;
        font-weight: 700;

        &:hover {
            background: #EF3E07;
            color: #fff;
            transition: .3s all ease-in-out;
        }
    }

    .contact {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 3rem;

        .face {
            margin-bottom: 1rem;
        }

        .links {
            display: flex;
            align-items: center;

            a {
                margin-left: 20px;
                display: flex;
                align-items: center;
                text-decoration: none;
                font-weight: 700;
                font-size: 1rem;
                color: rgba(255, 255, 255, .7);
                border: none;

                .icons {
                    font-size: 1rem;
                    color: rgba(255, 255, 255, .75);
                    margin-right: 6px;
                }

                &:hover {
                    color: #EF3E07;

                    .icons {
                        color: #EF3E07;
                    }
                }
            }
        }
    }
`;