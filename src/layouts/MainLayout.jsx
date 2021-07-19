import React from 'react';
import Styled from 'styled-components';

import { NavLink, Link } from 'react-router-dom';

// icons
import { FaHome } from 'react-icons/fa';
import { FaMicroblog } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillProject } from 'react-icons/ai';

// images
import avatar from '../assets/icons/avatar.png';

const MainLayout = ({ children }) => {
    return (
        <>
        <StyledLayout>
            <div className="fixedScreen">
                <div className="sideNav">
                    <div className="content">
                        <NavLink exact activeClassName="activeLink" to="/">
                            <div className="iconContainer">
                                <FaHome className="icon" />    
                            </div>
                            Home
                        </NavLink>
                        <NavLink exact activeClassName="activeLink" to="/resume">
                            <div className="iconContainer">
                                <FaBriefcase className="icon" />
                            </div>
                            Resume
                        </NavLink>
                        <NavLink exact activeClassName="activeLink" to="/contact">
                            <div className="iconContainer">
                                <FaMicroblog className="icon" />     
                            </div>
                            Contact
                        </NavLink>
                    </div>
                </div>

                <div className="mainContent">
                    <div className="minContent">
                        <h1><span>Hello,</span> I’m Emmanuel Yusuf. </h1>
                        <p>
                            Years of experience working emphasizing creating a better interface for the user, 
                            implementing a pixel perfect design and meeting business needs. Giving the user 
                            the comfort and best experience they deserve is what I do.
                        </p>

                        <Link to="/contact">Let's Talk</Link>
                    </div>

                    <div className="about">
                        <img src={avatar} alt="my face" />
                        <a href="https://github.com/EmmanuelOluwafemi"><FaGithub className="icons" /> Github</a>
                        <a href="https://twitter.com/emaz4me"><FaTwitter className="icons" /> Twitter</a>
                        <a href="https://www.linkedin.com/in/yusuf-emmanuel-b897b1168/"><FaLinkedin className="icons" /> Linkedin</a>
                    </div>
                </div>
            </div>
            <div className="portfolioContent">
                { children }
            </div>
        </StyledLayout>

        <StyledMobileLayout>
            <div className="content">
                {children}
            </div>

            <div className="buttomNav">
            <NavLink exact activeClassName="activeLink" to="/">
                <div className="iconContainer">
                    <FaHome className="icon" />    
                </div>
                Home
            </NavLink>
            <NavLink exact activeClassName="activeLink" to="/work">
                <div className="iconContainer">
                    <AiFillProject className="icon" />
                </div>
                Projects
            </NavLink>
            <NavLink exact activeClassName="activeLink" to="/resume">
                <div className="iconContainer">
                    <FaBriefcase className="icon" />
                </div>
                Resume
            </NavLink>
            <NavLink exact activeClassName="activeLink" to="/contact">
                <div className="iconContainer">
                    <FaMicroblog className="icon" />     
                </div>
                Contact
            </NavLink>
            </div>
        </StyledMobileLayout>
        </>
    )
} 

export default MainLayout;

const StyledLayout = Styled.section`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 768px) {
        display: none;
    }

    .fixedScreen {
        display: flex;
        height: 100%;
    }

    .portfolioContent {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        padding-top: 4rem;
        padding-right: 3rem;
    }

    .sideNav {
        width: 96px;
        height: 100%;
        border-right: 2px solid #151515;
        display: flex;
        justify-content: center;
        align-items: center;

        .content {
            height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            a {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                color: rgba(255, 255, 255, 0.3);
                font-weight: 700;
                text-decoration: none;
                text-align: center;

                .line {
                    position: absolute;
                    left: 50%;
                    top: -145%;
                    transform: translate(-50%);
                    width: 3px;
                    height: 5.5rem;
                    background: rgba(255, 255, 255, 0.3);
                }

                .iconContainer {
                    display: flex;
                    width: 40px;
                    height: 40px;
                    border-radius: 8px;
                    border: 3px solid rgba(255, 255, 255, 0.3);
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 6px;

                    .icon {
                        font-size: 20px;
                        fill: rgba(255, 255, 255, 0.3);
                    }
                }

                &.activeLink {
                    color: #EF3E07;

                    .line {
                        background: #EF3E07;
                    }

                    .iconContainer {
                        border-color: #EF3E07;

                        .icon {
                            fill: #EF3E07;
                        }
                    }
                }
            }
        }
    }

    .mainContent {
        width: 100%;
        height: 100%;
        padding: 4rem 3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .minContent {
            max-width: 440px;
            margin-top: 2rem;

            h1 {
                color: #fff;
                font-size: 3rem;
                max-width: 400px;

                span {
                    color: #EF3E07;
                }
            }

            p {
                font-size: 1rem;
                color: rgba(255, 255, 255, 0.8);
                font-weight: 300;
                line-height: 1.6;
                margin-top: 1rem;
            }

            a {
                margin-top: 3rem;
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
        }

        .about {
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

const StyledMobileLayout = Styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 3rem 6%;
    padding-bottom: 6rem;
    background: rgba(0,0,0, .8);
    display: flex;

    .content {
        width: 100%;
    }

    @media (min-width: 768px) {
        display: none;
    }

    .buttomNav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 68px;
        background: #000;
        padding: .6rem 1rem;
        border-top: 1px solid hsla(14, 95%, 48%, .4);
        /* box-shadow: 0px 0px 24px rgba(255, 255, 255, 0.1); */
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.3);
            font-weight: 700;
            text-decoration: none;
            text-align: center;

            .iconContainer {
                display: flex;
                width: 24px;
                height: 24px;
                border-radius: 8px;
                border: 2px solid rgba(255, 255, 255, 0.3);
                align-items: center;
                justify-content: center;
                margin-bottom: 6px;

                .icon {
                    font-size: 10px;
                    fill: rgba(255, 255, 255, 0.3);
                }
            }

            &.activeLink {
                color: #EF3E07;

                .line {
                    background: #EF3E07;
                }

                .iconContainer {
                    border-color: #EF3E07;

                    .icon {
                        fill: #EF3E07;
                    }
                }
            }
        }
    }
`;