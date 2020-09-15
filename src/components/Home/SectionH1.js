import React from "react";
import './SectionH1.css'

function Hero({children}) {
  return (
    <div className="hero">
        <div className="hero__containner">{children}</div>
            
    </div>
  );
}

export default Hero;