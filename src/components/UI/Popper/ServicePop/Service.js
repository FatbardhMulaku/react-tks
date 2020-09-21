import React from "react";
import PopperBox from "../PopperBox";
import PopperItem from "../PopperItem";
import { useTranslation } from "react-i18next";
import "./Service.css";
import "../index.css";

const Service = (props) => {
  const { t } = useTranslation();

  return (
    <PopperBox name="Service" trigger={props.trigger} width="800px">
      <div className="service_popper_container">
        <ul className="service_popper_list">
          {t("servicePopper.serviceMenu").map((item, index) => (
            <PopperItem
              key={index}
              link={item.link}
              name={item.name}
              icon={`service_popper_icon${index + 1}`}
            />
          ))}
        </ul>
        <div>
          <h6 className="col_black font-roboto">
            {t("servicePopper.serviceInfoName")}
          </h6>
          <ul className="service_popper_info">
            {t("servicePopper.serviceInfoMenu").map((item, index) => (
              <li key={index}>
                <a href="/#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PopperBox>
  );
};

export default Service;
