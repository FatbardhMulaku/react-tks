import React from 'react';
import './SectionC2.css';
import {AiFillPhone, AiOutlineMail, AiFillInstagram,AiFillFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";



export default function SectionC2() {
    
    const { t } = useTranslation();
    return (
        <div className="SectionC2">
            <h1>{t("Contact.SectionB2")}</h1>
            <div data-aos="zoom-in-up" data-aos-once="false" data-aos-duration="2000" className="cInfo__contact">
                <div className="cinfo1">
                    <h2>{t("Contact.SectionB2p")}</h2>
                    <Link to="/"><AiFillPhone className="contact__icons" to="tel: +3834445400400"/> +3834445400400</Link>
                    <Link to="/"><AiFillPhone className="contact__icons" to="tel: +3834445400400"/> +3834445400400</Link>
                </div>
                <div className="cinfo1">
                    <h2>{t("Contact.SectionB2e")}</h2>
                    <Link to="/"><AiOutlineMail className="contact__icons" to="mailto: info@KsOutsource.com"/> info@KsOutsource.com</Link>
                    <Link to="/"><AiOutlineMail className="contact__icons" to="mailto: info@KsOutsource.com"/> info@KsOutsource.com</Link>
                </div>
                <div className="cinfo1">
                    <h2>{t("Contact.SectionB2sm")}</h2>
                    <Link to="/"><AiFillFacebook className="contact__icons" to="#"/> {t("Contact.SectionB2Fb")}</Link>
                    <Link to="/"><AiFillInstagram className="contact__icons" to="#"/>{t("Contact.SectionB2insta")}</Link>
                </div>
            </div>
        </div>
    )
}
