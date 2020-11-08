import React from 'react';
import "./Styles/SectionIA3.css"
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

function SectionIA3() {
	const { t } = useTranslation();
	return (
		<div className="SectionIA3 container">
			<h3>{t("Image-Analysis.section_3.title")}</h3>
            <hr className="SectionCL3--hr"/>

            <div className="row justify-content-center SectionIA3-mid">
                <div className="col-8 col-sm-5 col-lg-3 SectionIA3-img my-auto"/>
                <div className="col-11 col-sm-9 col-lg-6 SeoS4-info mt-5 mt-md-5 mt-lg-0">
                    {t("Image-Analysis.section_3.mid").map((item, index) => {
                        return (
                            <div key={index} className="row SeoMidRow my-2">
                                <div className={`SectionIA3-CssImg${index+1} col-3 mr-0`} /> 
								<div className= {`SectionIA3-color${index+1} SeoS4-mid-txt col-8 ml-0`}><div className={`SectionIA3__iconl${index+1}`}/>{item.txt} </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="row SeoS4-footer">
            {t("Image-Analysis.section_3.Box").map((item, index) => {
                        return (
                            <div key={index} className="SeoBoxS4 col-10 col-sm-6 col-lg-4 mx-auto my-2">
                                <div className={`SectionIA3__icon${index+1}`} />
                                <h6 className="Seo4Boxtitle font-weight-bold">{item.title}</h6>
                                <p>{item.txt}</p>
                            </div>
                        );
                    })}
            </div>
            <div className="SectionIA3__btn"><Link to="/">{t("Image-Analysis.section_3.btn")}</Link></div>
		</div>
	)
}

export default SectionIA3
