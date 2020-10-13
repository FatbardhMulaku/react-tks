import React from 'react';
import './Style/SectionCe2.css';
import { useTranslation } from "react-i18next";
import Zoom from 'react-reveal/Zoom';
function SectionCe2() {
    const { t } = useTranslation();
    return (
        <div className="container SectionCe2">
            <h4>{t("Career.Section2h4")}</h4><h2>{t("Career.Section2h2")}</h2>
            <div className="SectionCe2_wapper row">
            <Zoom cascade><div className="col-sm-8 mx-auto col-lg-6 SectionCe2-left"/></Zoom>

                <div className="col-sm-12 col-lg-6 SectionCe2-right">
                <Zoom right cascade>
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
                </Zoom>
                </div>
            </div>
        </div>
    )
}

export default SectionCe2
