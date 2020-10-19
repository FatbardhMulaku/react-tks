import React from 'react';
import "./styles/SectionSeo3.css";
import { useTranslation } from "react-i18next";

function SectionSeo3() {
    const { t } = useTranslation();
    return (
        <div className="SectionSeo3 fullBackground">
            <div className="container SectionSeo3_wapper">
                <h3 className="text-white my-1 my-sm-5">{t("seo.section3title")}</h3>

                <div className="row text-white">
                    {t("seo.section3").map((item, index) => {
                        return (
                            <div key={index} className="SeoBox col-10 col-sm-6 col-md-4 col-lg-3 mx-auto">
                                <div className={item.img} />
                                <h6 className="Seo3Boxtitle">{item.title}</h6>
                                <p>{item.txt}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default SectionSeo3
