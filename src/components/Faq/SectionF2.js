import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AccQuestion from "./AccQuestion";
import "./styles/index.css";

const SectionF2 = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="container py-5 my-3 sectionF2">
      <h3 className="mx-auto text-center font-roboto my-4">
        {t("faq.questionsHeader")}
      </h3>
      {t("faq.questions").map((item, index) => (
        <AccQuestion
          key={index}
          expanded={expanded}
          handleChange={handleChange}
          name="question"
          index={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default SectionF2;
