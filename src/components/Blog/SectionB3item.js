import React from 'react';
import "./Style/SectionB3.css";
import { useTranslation } from "react-i18next";


function SectionB3item() {
    const { t } = useTranslation();
    return (
        <div className="SectionB3__wrapper">
            <div className="boxB3 B3a">
              <div className="boxB3__content">
                <h3>
                {t("Blog.SectionB3i1")}
                </h3>
                <p>26.08.2020</p>
              </div>
            </div>

            <div className="boxB3 B3b">
              <div className="boxB3__content">
                <h3>
                {t("Blog.SectionB3i2")}
                </h3>
                <p>20.07.2020</p>
              </div>
            </div>

            <div className="boxB3b B3c">
              <div className="boxB3b__content">
                <h3>
                {t("Blog.SectionB3i3")}
                </h3>
                <p>04.06.2020</p>
              </div>
            </div>

            <div className="boxB3b B3d">
              <div className="boxB3b__content">
                <h3>
                {t("Blog.SectionB3i4")}
                </h3>
                <p>11.06.2020</p>
              </div>
            </div>

            <div className="boxB3 B3e">
              <div className="boxB3__content">
                <h3>
                {t("Blog.SectionB3i5")}
                </h3>
                <p>15.08.2020</p>
              </div>
            </div>
          </div>
    )
}

export default SectionB3item
