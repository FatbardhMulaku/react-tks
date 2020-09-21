import React from 'react';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import GraphicEqOutlinedIcon from '@material-ui/icons/GraphicEqOutlined';
import FilterDramaOutlinedIcon from '@material-ui/icons/FilterDramaOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import './SectionH2items.css';

export default function SectionH2items() {
    return (
        <div className="SectionH2_wrapper">
            
        <div className="service">
        <i className="service-icon" ><PhoneIphoneOutlinedIcon fontSize={'large'}/></i>
            <h3 className="service-title">Mobile design</h3>
            <p className="service-info">Our mobile UI/UX design specialists create a conversion-driven mobile user experience that makes for high conversion and user retention.</p>
        </div>
    
        <div className="service">
        <i className="service-icon" ><DashboardOutlinedIcon fontSize={'large'}/></i>
            <h3 className="service-title">Web Design</h3>
            <p className="service-info">Web design services comprise the processes of user interface (UI) and user experience (UX) design of any web-based solution.</p>
        </div>

        <div className="service">
        <i className="service-icon" ><FilterDramaOutlinedIcon fontSize={'large'}/></i>
            <h3 className="service-title">Cloud</h3>
            <p className="service-info">Cloud infrastructure management services provide scalability to businesses. Where multiple users can share a common infrastructure.</p>
        </div>

        <div className="service">
        <i className="service-icon" ><GraphicEqOutlinedIcon fontSize={'large'}/></i>
            <h3 className="service-title">Branding</h3>
            <p className="service-info">We branding is mostly applied to intranets and portals, and it’s not just about improving the look and feel of a solution for the sake of it.</p>
        </div>

        <div className="service">
        <i className="service-icon" ><SettingsApplicationsOutlinedIcon fontSize={'large'}/></i>
            <h3 className="service-title">Web services</h3>
            <p className="service-info">Web development services imply designing, building, integrating, scaling and maintaining dynamic software solutions that work via intranet or internet.</p>
        </div>

        <div className="service">
        <i className="service-icon" ><DescriptionOutlinedIcon fontSize={'large'}/></i>
            <h3 className="service-title">Managment</h3>
            <p className="service-info">Management refers to the monitoring and administration of an organization’s information technology systems: hardware, software and networks.</p>
        </div>

    </div>
    )
}
