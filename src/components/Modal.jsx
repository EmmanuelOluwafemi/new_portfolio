import React from 'react';

import Styled from 'styled-components';

import { Link } from 'react-router-dom';

const Modal = ({ func }) => {
    return (
        <StyledModal>
            <div className="content">
                <h3>Thanks for being awesome!</h3>
                <p>I will look over your message and get back to you soon. In the meantime, you can browse through the project section.</p>

                <Link to="/work" onClick={func}>View Projects</Link>
            </div>
        </StyledModal>
    )
}

export default Modal;

const StyledModal = Styled.section`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;
    padding: 4rem 6%;

    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: #16161a;
        padding: 7rem 6rem;
        border-radius: 8px;

        h3 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #fff;
        }

        p {
            font-size: 1rem;
            font-weight: 400;
            color: rgba(255, 255, 255, .8);
            margin-top: .6rem;
            margin-bottom: 1.5rem;
        }

        a {
            font-size: 1rem;
            font-weight: 600;
            color: #EF3E07;
            padding: .9rem 3rem;
            border: 1px solid #EF3E07;
            border-radius: 8px;
            text-decoration: none;
            margin-top: 2rem;

            &:hover {
                background: #EF3E07;
                color: #fff;
                transition: all .3s ease-in-out;
            }
        }
    }
`;