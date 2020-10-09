import React from 'react';
import LearnMore from './../UI/Button/LearnMore';
import {FaMobileAlt} from "react-icons/fa";
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import {RiBankLine} from "react-icons/ri";
import { useTranslation } from "react-i18next";
import './Style/SectionCo2.css';

function SectionCo2() {
    const { t } = useTranslation();
    const icon1 = <FaMobileAlt className="SectionCo2-icon"/>;
    const icon2 = <DashboardIcon className="SectionCo2-icon"/>;
    const icon3 = <SettingsIcon className="SectionCo2-icon"/>;
    const icon4 = <RiBankLine className="SectionCo2-icon"/>;

    const workIcon = [icon1, icon2 ,icon3, icon4];
    return (
        <div className="container SectionCo2">
            <h1>{t("Company.Section2")}</h1>
            <div className="row SectionCo2-wapper">
                <div className="SectionCo2-left col-sm-12 col-lg-6">
                    {workIcon.map((item, index) => {
                        return(
                        <div key={index} className="g-icon">{item}</div>
                        );
                        })}
                </div>
                <div className="SectionCo2-right col-sm-12 col-lg-6">
                <h1>{t("Company.Section2h")}</h1>
                <p>{t("Company.Section2p")}</p>
                    <LearnMore link="SectionCo3" className="SectionCo2-Btn"/>
                </div>
            </div>
            
        </div>
    )
}

export default SectionCo2;
