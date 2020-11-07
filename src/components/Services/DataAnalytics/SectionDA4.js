import React from "react";
import "./Styles/SectionDA4.css";
import { useTranslation } from "react-i18next";
import SectionDA4Slider from './SectionDA4Slider';
import Fade from 'react-reveal/Fade';

function SectionDA4() {
	const { t } = useTranslation();
    return (

        <div  className="teknologies container">
             <Fade top big cascade>
            <h2>{t("DataAnalytics.section_4.title")}</h2>
            </Fade>
            
            <SectionDA4Slider />

			<p>{t("DataAnalytics.section_4.desc")}</p>
           </div>

    )
}

export default SectionDA4;
