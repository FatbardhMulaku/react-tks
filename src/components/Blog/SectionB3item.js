import React from 'react';
import "./Style/SectionB3.css";
import { useTranslation } from "react-i18next";


function SectionB3item() {
    const { t } = useTranslation();
    return (
        <div className="SectionB3__wrapper">

            <div className="row1">
            {t("Blog.SectionB3a").map((item, index) =>{
                return (
                  <div key={index} className={`boxB3a B3img${index+1}`}>
                    <div className="boxB3a__content">
                      <h4>{item.title}</h4>
                      <p>{item.data}</p>
                    </div>
                </div>
                )
            })}
            </div>

            <div className="row2">
              {t("Blog.SectionB3b").map((item, index) =>{
                const indexImg = 4;
                  return (
                    <div key={index} className={`boxB3b B3img${indexImg+index}`}>
                      <div className="boxB3b__content">
                        <h4>{item.title}</h4>
                        <p>{item.data}</p>
                      </div>
                  </div>
                  )
              })}
            </div>

          </div>
    )
}

export default SectionB3item
