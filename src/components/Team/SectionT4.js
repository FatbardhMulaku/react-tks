import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './Style/SectionT4.css';

function SectionT4() {
    const { t } = useTranslation();
    return (
        <div className="SectionT4 container">
            <div className="SectionT4i"/>
            <div className="SectionT4t">
                <h1>{t("Team.Section4h")}</h1>
                <p>{t("Team.Section4p")}</p>
                    <div className="team-btni"><Link to="/team" >{t("Team.send")}</Link></div>
            </div>
        </div>
    )
}

export default SectionT4;
