import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import { useTranslation } from "react-i18next";
import "./Styles/SectionEC2.css";

function SectionEC2() {
	const { t } = useTranslation();
	return (
		<div className="SectionEC2 container">
			<h3>{t("Ecommerce.section_2.title")}</h3>
			<hr className="SectionCBS5--hr"/>
			<p>{t("Ecommerce.section_2.desc")}</p>

			
			<React.Fragment>
				{t("Ecommerce.section_2.items").map((item, index) => {
					return(
						<Timeline key={index} align="alternate" >
							<TimelineItem>
							<TimelineOppositeContent>
								<div className={`SectionEC2__img${index+1}`}/>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<div className="SectionSA5__mid_box">
									<p>0{index+1}</p>
								</div>
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent className="SectionEC2__content">
								<h6>{item.title}</h6>
								<p>{item.desc}</p>
							</TimelineContent>
							</TimelineItem>
						</Timeline>
					)
				})}
				
    		</React.Fragment>
		</div>
	)
}

export default SectionEC2
