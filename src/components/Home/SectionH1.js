import React from "react";
import './Style/SectionH1.css'

function Hero({children}) {
  return (
    <div className="hero">
        <div className="container hero__containner">{children}</div>
    </div>
  );
}

export default Hero;