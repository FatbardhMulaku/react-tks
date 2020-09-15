import React from 'react';
import './SectionC2.css';
import {AiFillPhone, AiOutlineMail, AiFillInstagram,AiFillFacebook } from 'react-icons/ai';



export default function SectionC2() {
    

    return (
        <div className="SectionC2">
            <h1>Get in touch us</h1>
            <div className="cInfo__contact">
                <div className="cinfo1">
                    <h2>Phone</h2>
                    <p><AiFillPhone className="contact__icons"/> +3834445400400</p>
                    <p><AiFillPhone className="contact__icons"/> +3834445400400</p>
                </div>
                <div className="cinfo1">
                    <h2>Email</h2>
                    <p><AiOutlineMail className="contact__icons"/> info@KsOutsource.com</p>
                    <p><AiOutlineMail className="contact__icons"/> info@KsOutsource.com</p>
                </div>
                <div className="cinfo1">
                    <h2>Social Media</h2>
                    <p><AiFillFacebook className="contact__icons"/> Like our facebook page</p>
                    <p><AiFillInstagram className="contact__icons"/> Follow us on instagram</p>
                </div>
            </div>
        </div>
    )
}
