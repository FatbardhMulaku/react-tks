import React from "react";
import './Hero.css'

function Hero({children}) {
  return (
    <div className="hero">
        <div className="hero__containner">{children}</div>
            
    </div>
  );
}

export default Hero;