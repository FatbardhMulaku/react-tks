import React from 'react';
import './styles/SectionSeo4.css';
import { useTranslation } from "react-i18next";

function SectionSeo4() {
    const { t } = useTranslation();
    return (
        <div className="SectionSeo4 container" >
            <h3 className="text-center">{t("seo.section_4title")}</h3>
            <hr className="SeoS4-hr"/>
            <p className="text-center mt-4">{t("seo.section_4p")}</p>

            <div className="row justify-content-center SeoS4-mid">
                <div className="col-8 col-sm-5 col-lg-3 SeoS4-img"/>
                <div className="col-11 col-sm-9 col-lg-6 SeoS4-info mt-5 mt-md-5 mt-lg-0">
                    {t("seo.section_4mid").map((item, index) => {
                        return (
                            <div key={index} className="row SeoMidRow my-2">
                                <div className={`${item.img} col-3 mr-0`} /> <div className= {`${item.color} SeoS4-mid-txt col-8 ml-0`}>{item.txt} </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="row SeoS4-footer">
            {t("seo.section_4Box").map((item, index) => {
                        return (
                            <div key={index} className="SeoBoxS4 col-10 col-sm-6 col-lg-4 mx-auto my-2">
                                <div className={item.img} />
                                <h6 className="Seo4Boxtitle font-weight-bold">{item.title}</h6>
                                <p>{item.txt}</p>
                            </div>
                        );
                    })}
            </div>
        </div>
    )
}

export default SectionSeo4
