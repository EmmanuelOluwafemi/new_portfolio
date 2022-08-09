import React from 'react';

import Styled from 'styled-components';
import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';

import { GrCloudDownload } from 'react-icons/gr';
import resumeData from '../constants/resumeData';

const Resume = () => {
    return (
        <MainLayout>
            <StyledResume>
                <a className="download" href={resumeData.resumeLink} target="_blank" rel="noopener noreferrer"><GrCloudDownload className="icon" /> Download</a>
                <h1>{resumeData.name}</h1>
                <p>{resumeData.position}</p>

                <div className="textContent">{resumeData.headline}</div>

                <div className="title">
                    Skills
                </div>

                <div className="textContent">{resumeData && resumeData.skills && resumeData.skills.join(", ")}</div>

                {/* Start Experience */}
                <div className="title">
                    Experience
                </div>

                {
                    resumeData.experience.map((experience, index) => (
                        <div key={index}>
                            <div className="heading">
                                {experience.company} - {experience.position}
                            </div>
                            <div className="subHeading">
                                {experience.startDate} - {experience.endDate}
                            </div>
                            <div className="textContent">
                                {experience.description && (
                                    <>
                                        {experience.description} <br />
                                    </>
                                )}

                                <ul>
                                    {experience.responsibilities.map((responsibility, index) => (
                                        <li key={index}>{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))
                }

                {/* End Experience */}

                {/* Work */}
                <div className="title">
                    Projects
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
    background: rgb(16, 16, 19);
    position: relative;

    @media (max-width: 768px) {
        padding: 2rem 1rem;
        padding-bottom: 6rem;
    }

    a.download {
        position: sticky;
        top: 2rem;
        right: 1rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
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
        padding: 0.5rem 0;
        margin-top: 1.8rem;
        border-bottom: 1px solid rgba(255, 255, 255, .2);
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