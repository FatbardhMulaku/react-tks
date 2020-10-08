import React from 'react';
import './SectionCe2.css';
import { useTranslation } from "react-i18next";
function SectionCe2() {
    const { t } = useTranslation();
    return (
        <div className="container SectionCe2">
            <h4>How it works?</h4>
            <h2>Steps towards making a right career choice</h2>
            <div className="SectionCe2_wapper row">
                <div className="col-sm-8 mx-auto col-lg-6 SectionCe2-left"/>

                <div className="col-sm-12 col-lg-6 SectionCe2-right">
                {t("Career.Section2").map((item, index) => {
                    return(
                        <div key={index} className={item.c1}>
                        <div className={item.c2}>{item.nr}</div>
                        <div className={item.c3}>
                            <h2>{item.title}</h2>
                            <p>{item.txt}</p>
                        </div>
                    </div>
                    );
                })}

                </div>
            </div>
        </div>
    )
}

export default SectionCe2
