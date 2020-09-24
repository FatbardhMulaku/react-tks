import React from 'react';
import { Link } from "react-router-dom";
import "./SectionB3.css";
import Carousel from 'react-elastic-carousel';
import { useTranslation } from "react-i18next";

function SectionB3() {
  const { t } = useTranslation();
  return (
    <div
    data-aos="zoom-in-up"
    data-aos-once="false"
    data-aos-duration="2000"
    className="SectionB3"
  >
    <div className="SectionB3_container">
      <div className="SectionB3__title">
        <h1>{t("Blog.SectionB3h")}</h1>
        <div className="SectionB3__title-btn">
          <Link to="/blog" className="Bsection3-btn">
          {t("Blog.SectionB3btn")}
          </Link>
        </div>
      </div>
      <div className="SectionB3__wrapper_c">
        <Carousel itemsToShow={1} showArrows={false} className="slideriB3">
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
        </Carousel >
      </div>
    </div>
  </div>
  )
}

export default SectionB3;
