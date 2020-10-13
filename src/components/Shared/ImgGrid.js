import React from "react";
import Zoom from 'react-reveal/Zoom';

const ImgGrid = (props) => {
  return (
    <div className="col-sm-12 col-lg-6">
        <Zoom><div className={`img_css ${props.img}`}> </div></Zoom>
    </div>
  );
};

export default ImgGrid;
