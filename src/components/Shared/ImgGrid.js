import React from "react";

const ImgGrid = (props) => {
  return (
    <div className="col-sm-12 col-lg-6">
      <div className={`img_css ${props.img}`}> </div>
    </div>
  );
};

export default ImgGrid;
