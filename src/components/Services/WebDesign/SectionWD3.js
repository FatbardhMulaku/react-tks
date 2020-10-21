import React from 'react';
import "./Styles/SectionWD3.css";
import { useTranslation } from "react-i18next";

function SectionWD3() {
    const { t } = useTranslation();
    return (
        <div className="SectionWD3 container row mx-auto">
            <div className="col-sm-12 col-lg-6 SectionWD3_left my-auto">
                <h3>{t("webdesign.section_3title")}</h3>
                {t("webdesign.section_3").map((item, index) => {
                    return(
                    <ul key={index}><li>{item.txt}</li></ul>
                    );
                })}
            </div>
            <div className="col-sm-12 col-lg-6 SectionWD3_right my-auto">
                <div className="sWDa col-12">
                    <div className="img_css sectionWD_imgB"></div>
                    <div className="sectionWD3_shapeB"></div></div>
                <div className="sWDb col-12">
                    <div className="img_css sectionWD_imgA"></div>
                    <div className="sectionWD3_shapeA"></div>
                </div>
            </div>
        </div>
    )
}

export default SectionWD3
