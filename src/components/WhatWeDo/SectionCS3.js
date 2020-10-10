import React from 'react';
import './Style/SectionCS3.css';
import { useTranslation } from "react-i18next";
import LearnMore from "./../UI/Button/LearnMore";

const workImg = ["SectionCS3__Left-img1", "SectionCS3__Left-img2", "SectionCS3__Left-img3"];

function SectionCS3() {

    const { t } = useTranslation();
    return (
        <div className="SectionCS3">
            <div  className="SectionCS3__container container">
                <div className="SectionCS3__Left">

                    {workImg.map((item, index) =>{
                        return (
                            <div key={index} className={item}/>
                        )
                    })}
                </div>
                <div className="SectionCS3__Right">
                    <div className="SectionCS3__RightC">
                    <h1>{t("Blog.SectionCS3h")}</h1>
                    <p>
                    {t("Blog.SectionCS3p")}
                    </p> 
                    <LearnMore link="BannerCS" offset={-90} />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SectionCS3
