import React from "react";
import PopperBox from "../PopperBox";
import PopperItem from "../PopperItem";
import { useTranslation } from "react-i18next";
import "./Career.css";
import "../index.css";
import { paramCase } from "change-case";

const Career = (props) => {
  const { t } = useTranslation();

  return (
    <PopperBox name="career" trigger={props.trigger} width="230px">
      <div className="career_popper_container">
        <ul className="career_popper_list">
          {t("careerPopper.careerMenu").map((item, index) => (
            <PopperItem
              key={index}
              link={paramCase(item.link)}
              name={item.name}
              icon="career_popper_icon"
            />
          ))}
        </ul>
      </div>
    </PopperBox>
  );
};

export default Career;
