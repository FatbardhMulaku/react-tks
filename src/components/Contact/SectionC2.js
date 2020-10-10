import React from 'react';
import './Style/SectionC2.css';
import {AiFillPhone, AiOutlineMail, AiFillInstagram,AiFillFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const icon1 = <AiFillPhone className="contact__icons" />;
const icon2 = <AiFillPhone className="contact__icons" />;
const icon3 = <AiOutlineMail className="contact__icons" />;
const icon4 = <AiOutlineMail className="contact__icons" />;
const icon5 = <AiFillFacebook className="contact__icons" />;
const icon6 = <AiFillInstagram className="contact__icons" />;

const workicons = [icon1,icon2,icon3,icon4,icon5,icon6]

export default function SectionC2() {
    
    const { t } = useTranslation();
    return (
        <div className="container SectionC2">
            <h1>{t("Contact.SectionB2")}</h1>
            <div data-aos="zoom-in-up" data-aos-once="false" data-aos-duration="2000" className="cInfo__contact">

                {t("Contact.Section2").map((item, index) => {
                    return (
                        <div key={index} className="cinfo1">
                            <h2>{item.title}</h2>
                            <Link to={item.to}>{workicons[index+index]} {item.info1}</Link>
                            <Link to={item.to}>{workicons[index+1+index++]} {item.info2}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
