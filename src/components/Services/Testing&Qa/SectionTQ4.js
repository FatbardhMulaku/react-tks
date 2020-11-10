import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import { useTranslation } from "react-i18next";
import "./Styles/SectionTQ4.css";
import Zoom from 'react-reveal/Zoom';

function SectionTQ4() {
	const { t } = useTranslation();
	return (
		<div className="SectionTQ4 container">
			<h3>{t("Testing-Qa.section_4.title")}</h3>
			<hr className="SectionCL3--hr"/>
			<p>{t("Testing-Qa.section_4.desc")}</p>
			<Zoom >
			<React.Fragment>
			<Timeline align="alternate" >
				<TimelineItem>
				<TimelineOppositeContent>
					<div className="SectionTQ4__img1"/>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<div className="SectionSA5__mid_box">
						<p>01</p>
					</div>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent className="SectionSA5__content">
					<div className="SectionTQ4__icon1"/>
					<p>{t("Testing-Qa.section_4.icon1")}</p>
				</TimelineContent>
				</TimelineItem>
				<TimelineItem>
				<TimelineOppositeContent>
				<div className="SectionTQ4__img2"/>
				</TimelineOppositeContent>
				<TimelineSeparator>
				<div className="SectionSA5__mid_box">
						<p>02</p>
					</div>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent className="SectionSA5__content2">
				<div className="SectionTQ4__icon2"/>
					<p>{t("Testing-Qa.section_4.icon2")}</p>
				</TimelineContent>
				</TimelineItem>
				<TimelineItem>
				<TimelineOppositeContent>
				<div className="SectionTQ4__img3"/>
				</TimelineOppositeContent>
				<TimelineSeparator>
				<div className="SectionSA5__mid_box">
						<p>03</p>
					</div>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent className="SectionSA5__content">
				<div className="SectionTQ4__icon3"/>
					<p>{t("Testing-Qa.section_4.icon3")}</p>
				</TimelineContent>
				</TimelineItem>
				<TimelineItem>
				<TimelineOppositeContent>
				<div className="SectionTQ4__img4"/>
				</TimelineOppositeContent>
				<TimelineSeparator>
				<div className="SectionSA5__mid_box">
						<p>04</p>
					</div>
					
				</TimelineSeparator>
				<TimelineContent className="SectionSA5__content2">
				<div className="SectionTQ4__icon4"/>
					<p>{t("Testing-Qa.section_4.icon4")}</p>
				</TimelineContent>
				</TimelineItem>
			</Timeline>
    </React.Fragment>
	</Zoom>
		</div>
	)
}

export default SectionTQ4
