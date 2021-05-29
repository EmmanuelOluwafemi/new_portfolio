import React from 'react';

import Styled from 'styled-components';
import MainLayout from '../layouts/MainLayout';

const Resume = () => {
    return (
        <MainLayout>
            <StyledResume>
                <h1>Emmanuel Yusuf</h1>
                <p>Frontend Developer</p>

                <div className="textContent">
                    Frontend developer, passionate and dedicated in bringing ideas from 
                    pixels to live scalable products. I develop responsive applications 
                    with user experience as top priority. I’m always ready to adapt 
                    according to project specifications irrespective of stack.
                </div>

                <div className="title">
                    Skill   . . . . . . . . . . . . . . . . . . . . .
                </div>

                <div className="textContent">
                    Frontend developer, passionate and dedicated in bringing ideas from 
                    pixels to live scalable products. I develop responsive applications 
                    with user experience as top priority. I’m always ready to adapt 
                    according to project specifications irrespective of stack.
                </div>

                {/* Start Experience */}
                <div className="title">
                    Experience . . . . . . . . . . . . . . . . . . . . . 
                </div>
                
                <div className="heading">
                    Hng Internship
                </div>
                <div className="subHeading">
                    May 2020
                </div>
                <div className="textContent">
                    Frontend developer, passionate and dedicated in bringing ideas from 
                    pixels to live scalable products. I develop responsive applications 
                    with user experience as top priority. I’m always ready to adapt 
                    according to project specifications irrespective of stack.
                </div>

                <div className="heading">
                    Hng Internship
                </div>
                <div className="subHeading">
                    May 2020
                </div>
                <div className="textContent">
                    Frontend developer, passionate and dedicated in bringing ideas from 
                    pixels to live scalable products. I develop responsive applications 
                    with user experience as top priority. I’m always ready to adapt 
                    according to project specifications irrespective of stack.
                </div>
                {/* End Experience */}
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
    background: #09090A;
    max-width: 530px;

    @media (max-width: 768px) {
        padding: 2rem 1rem;
        padding-bottom: 6rem;
    }

    h1 {
        font-size: 2rem;
        font-weight: 700;
        color: #fff;

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }

    p {
        font-size: 1rem;
        color: rgba(255, 255, 255, .8);
        font-weight: 400;
        margin-top: .5rem;
    }

    .textContent {
        font-size: .8rem;
        color: rgba(255, 255, 255, .6);
        font-weight: 300;
        max-width: 500px;
        margin-top: 1.5rem;
    }

    .title {
        font-size: 1rem;
        color: rgba(255, 255, 255, .8);
        font-weight: 400;
        max-width: 500px;
        margin-top: 1.8rem;
    }

    .heading {
        font-size: 1rem;
        color: rgba(255, 255, 255, 1);
        font-weight: 400;
        max-width: 500px;
        margin-top: 1rem;
        text-transform: uppercase;
    }

    .subHeading {
        font-size: .8rem;
        color: rgba(255, 255, 255, .6);
        font-weight: 400;
        max-width: 500px;
        margin-top: .7rem;
    }
`;