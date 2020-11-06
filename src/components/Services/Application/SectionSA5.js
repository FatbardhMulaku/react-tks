import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import { useTranslation } from "react-i18next";
import "./Styles/SectionSA5.css";

function SectionSA5() {
	const { t } = useTranslation();
	return (
		<div className="SectionSA5 container">
			<h3>{t("Application.section_5.title")}</h3>
			<p>{t("Application.section_5.desc")}</p>
			<h6>{t("Application.section_5.subtitle")}</h6>
			<React.Fragment>
			<Timeline align="alternate" >
				<TimelineItem>
				<TimelineOppositeContent>
					<div className="SectionSA5__img1"/>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<div className="SectionSA5__mid_box">
						<p>01</p>
					</div>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent className="SectionSA5__content">
					<div className="SectionSA5__icon1"/>
					<p>{t("Application.section_5.icon1")}</p>
				</TimelineContent>
				</TimelineItem>
				<TimelineItem>
				<TimelineOppositeContent>
				<div className="SectionSA5__img2"/>
				</TimelineOppositeContent>
				<TimelineSeparator>
				<div className="SectionSA5__mid_box">
						<p>02</p>
					</div>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent className="SectionSA5__content2">
				<div className="SectionSA5__icon2"/>
					<p>{t("Application.section_5.icon2")}</p>
				</TimelineContent>
				</TimelineItem>
				<TimelineItem>
				<TimelineOppositeContent>
				<div className="SectionSA5__img3"/>
				</TimelineOppositeContent>
				<TimelineSeparator>
				<div className="SectionSA5__mid_box">
						<p>03</p>
					</div>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent className="SectionSA5__content">
				<div className="SectionSA5__icon3"/>
					<p>{t("Application.section_5.icon3")}</p>
				</TimelineContent>
				</TimelineItem>
				<TimelineItem>
				<TimelineOppositeContent>
				<div className="SectionSA5__img4"/>
				</TimelineOppositeContent>
				<TimelineSeparator>
				<div className="SectionSA5__mid_box">
						<p>04</p>
					</div>
					
				</TimelineSeparator>
				<TimelineContent className="SectionSA5__content2">
				<div className="SectionSA5__icon4"/>
					<p>{t("Application.section_5.icon4")}</p>
				</TimelineContent>
				</TimelineItem>
			</Timeline>
    </React.Fragment>
		</div>
	)
}

export default SectionSA5;
