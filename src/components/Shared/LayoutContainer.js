import React from "react";

const LayoutContainer = (props) => {
  return (
    <section className={`${props.section != null ? props.section : ""}`}>
      <div
        className={`container ${
          props.container != null ? props.container : ""
        }`}
      >
        {props.children}
      </div>
    </section>
  );
};

export default LayoutContainer;
