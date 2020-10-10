import React from 'react';
import './Style/SectionT1.css';

function SectionT1({children}) {
    return (
        <div className="SectionT1">
            <div className="SectionT1__containner container">{children}</div>
        </div>
    )
}

export default SectionT1;
