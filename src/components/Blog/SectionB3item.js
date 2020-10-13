import React from 'react';
import "./Style/SectionB3.css";
import { useTranslation } from "react-i18next";
import Slide from 'react-reveal/Slide';

function SectionB3item() {
    const { t } = useTranslation();
    return (
        <div className="SectionB3__wrapper">
            <Slide bottom cascade>
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
            </Slide>
          </div>
    )
}

export default SectionB3item
