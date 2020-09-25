import React from "react";

const LayoutGrid = (props) => {
  return (
    <section
      className={`fullBackground ${props.section != null ? props.section : ""}`}
    >
      <div
        className={`container ${
          props.container != null ? props.container : ""
        }`}
      >
        <div className={`row ${props.row != null ? props.row : ""}`}>
          {props.children}
        </div>
      </div>
    </section>
  );
};

export default LayoutGrid;
