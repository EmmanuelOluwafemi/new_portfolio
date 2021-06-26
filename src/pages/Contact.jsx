import React, {useState} from 'react';

import emailjs from 'emailjs-com';

// MainLayout to show the layout structure
import MainLayout from '../layouts/MainLayout';

// import styled components to add your style
import Styled from 'styled-components';

import Modal from '../components/Modal';

import { Beetle as Button } from 'react-button-loaders'

const Contact = () => {

    const [sendState, setSendState] = useState('')
    const [modal, setModal] = useState(false)

    const sendForm = (e) => {
        e.preventDefault()

        setSendState('loading')

        emailjs.sendForm('service_gasb4xu', 'template_b3nq9d6', e.target ,'user_G8lO7Vdi53F63s21ItAdP')
            .then((res) => {
                console.log(res.text)
                setSendState('finished')
                setModal(!modal)
            }, (error) => {
                console.log(error.text)
                setSendState('finished')
            })
    }

    const handleModal = () => {
        setModal(!modal)
    }

    return (
        <MainLayout>
            {
                modal &&
                <Modal func={handleModal} />
            }
            <StyledContact onSubmit={sendForm}>
                <div className="inputGroup">
                    <label>Your Name *</label>
                    <input type="text" name="from_name" required />
                </div>
                <div className="inputGroup">
                    <label>Email *</label>
                    <input type="email" name="email" required />
                </div>
                <div className="inputGroup">
                    <label>Message *</label>
                    <textarea name="message" required ></textarea>
                </div>

                <Button type='submit' state={sendState}>Submit</Button>
            </StyledContact>
        </MainLayout>
    )
}

export default Contact;

const StyledContact = Styled.form`
    width: 100%;
    min-height: 400px;
    background: rgb(9, 9, 10);
    padding: 4rem 3rem;

    @media (max-width: 768px) {
        padding: 2rem 1.5rem;
        padding-bottom: 6rem;
        width: 100%;
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
        border: none;
        background: #EF3E07;
        border-radius: 4px;
        cursor: pointer;
        color: #fff;
        font-weight: 700;
        font-size: 1rem;
        
        &:hover {
            background: rgba(255, 255, 255, .2);
        }
    }
`;