import React from "react";
import Zoom from 'react-reveal/Zoom';

const ImgGrid = (props) => {
  return (
    <div className="col-sm-12 col-lg-7 my-auto">
        <Zoom><div className={`img_css ${props.img}`}> </div></Zoom>
    </div>
  );
};

export default ImgGrid;
