import React from 'react';
import './Style/SectionB2.css';
import { useTranslation } from "react-i18next";
import Button from '@material-ui/core/Button';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

function SectionB2() {
    const { t } = useTranslation();
    return (
        <div className="containeri1 SectionB2 container">
            <Fade top big cascade><h1>{t("Blog.SectionB2h")}</h1></Fade>
            <Slide bottom cascade>
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
            </Slide>
        </div>
    )
}

export default SectionB2;
