import React from "react";
import './Contact.css';
import { RiHome4Line } from 'react-icons/ri';
import { RiPhoneLine } from 'react-icons/ri';
import { TfiEmail } from 'react-icons/tfi';
import Map from "../Map/Map";
import emailjs from 'emailjs-com'; // Import the emailjs-com library
import { useRef, useState } from "react";

const Contact = () => {
    const form = useRef();
    const [done, setdone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        // Replace these placeholders with your actual EmailJS values
        const serviceID = 'YOUR_SERVICE_ID';
        const templateID = 'YOUR_TEMPLATE_ID';
        const userID = 'YOUR_USER_ID';

        emailjs
            .sendForm(serviceID, templateID, form.current, userID)
            .then(
                (result) => {
                    console.log(result.text);
                    setdone(true);
                    form.current.reset(); // Reset the form
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="contact" id="Contact">
            <div className="c-title">
                <h1 ><span>Get In </span><span style={{ color: '#fb982f' }}>Touch !</span></h1>
            </div>
            <div className="c-body">
                <div className="c-left">
                    <div className="c-info">
                        <div className="card">
                            <div className="c-info-icon">
                                <RiHome4Line style={{ fontSize: '4rem' }} />
                            </div>
                            <div className="c-info-data">
                                <div >
                                    <h2 className="d-title"> Address</h2>
                                </div>
                                <div className="d-info">
                                    Cabin 1, E-313, Sector 75,
                                    <br />
                                    Sahibzada Ajit Singh Nagar,
                                    <br />
                                    Punjab 160055
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="c-info-icon">
                                <RiPhoneLine style={{ fontSize: '4rem' }} />
                            </div>
                            <div className="c-info-data">
                                <div>
                                    <h2 className="d-title">Phone</h2>
                                </div>
                                <div className="d-info">
                                    <strong>Phone</strong>
                                    : +91 9872230560
                                    <br />
                                    <strong>Whatsapp</strong>
                                    : +91 9872230560
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="c-info-icon">
                                <TfiEmail style={{ fontSize: '4rem' }} />
                            </div>
                            <div className="c-info-data">
                                <div>
                                    <h2 className="d-title">Email</h2>
                                </div>
                                <div className="d-info">
                                    <strong>Email:</strong>
                                    <a href="mailto:care@envinovasmartech.com"><span style={{ color: 'black', textUnderlineOffset: '0', fontSize: '15px' }}>care@envinovasmartech.com</span></a>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="c-map">
                        <Map />
                    </div>
                </div>
                <div className="c-right" >
                    <div className="c-right-title">
                        <h1><span style={{ color: 'white' }}>Want to talk?</span> <span style={{ color: '#fb982f' }}>Let's do it!</span> </h1>
                    </div>
                    <div className="c-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <div>
                                <p>
                                    <span className="text-padding">
                                        <input type='text' name='user_name' className='user' placeholder='Name' />
                                    </span>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span>
                                        <input type='email' name='user_email' className='user' placeholder='Email' />
                                    </span>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span>
                                        <input type="address" name="user_address" className="user" placeholder="Address" />
                                    </span>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span>
                                        <textarea name='message' className='user' placeholder='Message' />
                                    </span>
                                </p>
                            </div>
                            <input type='submit' value='Send' className='c-button' />
                            <span style={{ fontSize: '2rem', color: '#fb982f' }}>{done === true && "Thanks for Contacting me!!"}</span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
