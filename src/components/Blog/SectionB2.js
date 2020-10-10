import React from 'react';
import './Style/SectionB2.css';
import { useTranslation } from "react-i18next";
import Button from '@material-ui/core/Button';

function SectionB2() {
    const { t } = useTranslation();
    return (
        <div data-aos="fade-up" data-aos-once="false" data-aos-duration="2500" className="containeri1 SectionB2 container">
            <h1>{t("Blog.SectionB2h")}</h1>
            <div className="SectionB2_wrapper">

                {t("Blog.SectionB2").map((item, index) => {
                    return (
                        <div key={index} className={`Bbox ${item.klasa}`}>
                            <div className={`BlogArtickle__img${index+1}`}/>
                            <h3>{item.SectionB2txt}</h3>
                            <Button href="#" className="text-lowercase">{item.SectionB2btn}</Button>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default SectionB2;
