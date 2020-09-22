import React from 'react';
import './SectionC2.css';
import {AiFillPhone, AiOutlineMail, AiFillInstagram,AiFillFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';



export default function SectionC2() {
    

    return (
        <div className="SectionC2">
            <h1>Get in touch us</h1>
            <div data-aos="zoom-in-up" data-aos-once="false" data-aos-duration="2000" className="cInfo__contact">
                <div className="cinfo1">
                    <h2>Phone</h2>
                    <Link><AiFillPhone className="contact__icons" to="tel: +3834445400400"/> +3834445400400</Link>
                    <Link><AiFillPhone className="contact__icons" to="tel: +3834445400400"/> +3834445400400</Link>
                </div>
                <div className="cinfo1">
                    <h2>Email</h2>
                    <Link><AiOutlineMail className="contact__icons" to="mailto: info@KsOutsource.com"/> info@KsOutsource.com</Link>
                    <Link><AiOutlineMail className="contact__icons" to="mailto: info@KsOutsource.com"/> info@KsOutsource.com</Link>
                </div>
                <div className="cinfo1">
                    <h2>Social Media</h2>
                    <Link><AiFillFacebook className="contact__icons" to="#"/> Like our facebook page</Link>
                    <Link><AiFillInstagram className="contact__icons" to="#"/> Follow us on instagram</Link>
                </div>
            </div>
        </div>
    )
}
