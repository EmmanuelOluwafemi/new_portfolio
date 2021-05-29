import React from 'react';

// MainLayout to show the layout structure
import MainLayout from '../layouts/MainLayout';

// import styled components to add your style
import Styled from 'styled-components';

const Contact = () => {
    return (
        <MainLayout>
            <StyledContact>
                <div className="inputGroup">
                    <label>Your Name *</label>
                    <input type="text" />
                </div>
                <div className="inputGroup">
                    <label>Email *</label>
                    <input type="email" />
                </div>
                <div className="inputGroup">
                    <label>Message *</label>
                    <textarea></textarea>
                </div>

                <button type="submit">Submit</button>
            </StyledContact>
        </MainLayout>
    )
}

export default Contact;

const StyledContact = Styled.form`
    width: 100%;
    min-height: 400px;
    max-width: 520px;
    background: #09090A;
    padding: 2rem 3rem;

    @media (max-width: 768px) {
        padding: 2rem 1.5rem;
        padding-bottom: 6rem;
    }

    .inputGroup {
        display: block;
        width: 100%;
        margin-bottom: 1.5rem;

        label {
            display: block;
            font-size: 1rem;
            font-weight: 400;
            color: rgba(255, 255, 255, .8);
        }

        input, textarea {
            display: block;
            width: 100%;
            height: 40px;
            background: none;
            border-radius: 4px;
            outline: none;
            padding: 0 1rem;
            border: 1px solid rgba(255, 255, 255, .4);
            margin-top: 1rem;
        }

        textarea {
            height: 150px;
            padding: 1rem;
        }
    }
    
    button {
        width: 100%;
        height: 40px;
        background: none;
        outline: none;
        border: 1px solid rgba(255, 255, 255, .4);
        border-radius: 4px;
        cursor: pointer;
        
        &:hover {
            background: rgba(255, 255, 255, .2);
        }
    }
`;