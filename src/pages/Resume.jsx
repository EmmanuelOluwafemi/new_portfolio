import React from 'react';

import Styled from 'styled-components';
import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';

import { GrCloudDownload } from 'react-icons/gr';

const Resume = () => {
    return (
        <MainLayout>
            <StyledResume>
                <a className="download" href="https://docs.google.com/document/d/1uSHgQeg8Id1kge3iiurGVI6qTISplFS9z3LLT4n_BrM/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><GrCloudDownload className="icon" /> Download</a>
                <h1>Emmanuel Yusuf</h1>
                <p>Frontend Developer</p>

                <div className="textContent">
                Years of experience working emphasizing on creating a better interface for the user, implementing a pixel perfect design and 
                meeting business needs. Giving the user the comfort and best experience they deserve is what I do.
                </div>

                <div className="title">
                    Skill   . . . . . . . . . . . . . . . . . . . . .
                </div>

                <div className="textContent">
                    Html, Css, Javascript, React, Redux, Styled-components, Nextjs, Gatsby, Gsap, Context api, Sass, Bootstrap, GraphQl, TailwindCss
                </div>

                {/* Start Experience */}
                <div className="title">
                    Experience . . . . . . . . . . . . . . . . . . . . . 
                </div>
                
                <div className="heading">
                    Perxels Design School - Frontend Developer
                </div>
                <div className="subHeading">
                    April 2021 - Present
                </div>
                <div className="textContent">
                    I worked with designers to covert ready-made UIs into usable code <br />

                    <ul>
                        <li>Converted Figma UI designs into pixel-perfect web implementation.</li>
                        <li>Worked closely with designers to deliver pixel-perfect UIs with responsive web design principles.</li>
                        <li>Made use of tools like Trello for task management and feedback.</li>
                    </ul>
                </div>

                {/* Studione */}
                <div className="heading">
                    Studione Digital Agency - Frontend Developer
                </div>
                <div className="subHeading">
                    June 2020 - November 2020
                </div>
                <div className="textContent">
                    I worked with a team of a backend developers to create usable web pages for startups <br />

                    <ul>
                        <li>Converted Figma UI designs into pixel-perfect web implementation.</li>
                        <li>Worked closely with designers to deliver pixel-perfect UIs with responsive web design principles.</li>
                        <li>Working with backend developers by consuming restful API's</li>
                    </ul>
                </div>

                <div className="heading">
                    Hng Internship - Frontend Developer (Intern)
                </div>
                <div className="subHeading">
                    May 2020 - July 2020
                </div>
                <div className="textContent">
                    I contributed to developing user interfaces for quite a several products within three months while learning new skills.

                    <ul>
                        <li>Worked with a team of frontend developers to create envanto element templates</li>
                        <li>Work with backend developers to create projects based on tasks given.</li>
                    </ul>
                </div>
                {/* End Experience */}

                {/* Work */}
                <div className="title">
                    Projects   . . . . . . . . . . . . . . . . . . . . .
                </div>

                <div className="textContent">
                    Links to my projects can be found on <Link to="/work">Emaz.com/work</Link>
                </div>
                {/* End Work */}
            </StyledResume>
        </MainLayout>
    )
}

export default Resume;

const StyledResume = Styled.div`
    width: 100%;
    min-height: 95%;
    border-radius: .5rem;
    padding: 2rem;
    background: rgb(9, 9, 10);
    position: relative;

    @media (max-width: 768px) {
        padding: 2rem 1rem;
        padding-bottom: 6rem;
    }

    a.download {
        position: absolute;
        top: 2rem;
        right: 1rem;
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        color: #fff;
        font-weight: 600;
        text-decoration: none;

        @media (max-width: 768px) {
            top: 1rem;
        }

        .icon {
            font-size: 1.25rem;
            fill: #fff;
            margin-right: 1rem;

            @media (max-width: 768px) {
                margin-right: .5rem;
            }

            path {
                stroke: #fff;
            }
        }
    }

    h1 {
        font-size: 2.4rem;
        font-weight: 700;
        color: #fff;

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }

    p {
        font-size: 1rem;
        color: rgba(255, 255, 255);
        font-weight: 400;
        margin-top: .5rem;
    }

    .textContent {
        font-size: 1rem;
        line-height: 1.5;
        color: rgba(255, 255, 255, .7);
        font-weight: 300;
        margin-top: 1.5rem;

        ul {
            margin: 2rem 0;
            margin-left: 1rem;

            li {
                margin-bottom: 1rem;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

        a {
            font-size: 1rem;
            color: #fff;
            font-weight: 600;
            text-decoration: none;
        }
    }

    .title {
        font-size: 1.15rem;
        color: rgba(255, 255, 255);
        font-weight: 400;
        max-width: 500px;
        margin-top: 1.8rem;
    }

    .heading {
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 1);
        font-weight: 600;
        max-width: 500px;
        margin-top: 3rem;
        text-transform: uppercase;

        &:first-child {
            margin-top: 1rem;
        }
    }

    .subHeading {
        font-size: .8rem;
        color: rgba(255, 255, 255, .6);
        font-weight: 400;
        max-width: 500px;
        margin-top: .7rem;
    }
`;