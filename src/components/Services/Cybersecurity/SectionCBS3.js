import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import { useTranslation } from "react-i18next";
import "./Styles/SectionCBS3.css";
import Zoom from 'react-reveal/Zoom';

function SectionCBS3() {
	const { t } = useTranslation();
	return (
		<div className="SectionCBS3">
			<div className="SectionCBS3__wapper container">
			<h3>{t("Cybersecurity.section_3.title")}</h3>
			<p>{t("Cybersecurity.section_3.desc")}</p>
			<Zoom>
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
					<div className="SectionCBS3__icon1"/>
					<p>{t("Cybersecurity.section_3.icon1")}</p>
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
				<div className="SectionCBS3__icon2"/>
					<p>{t("Cybersecurity.section_3.icon2")}</p>
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
				<div className="SectionCBS3__icon3"/>
					<p>{t("Cybersecurity.section_3.icon3")}</p>
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
				<div className="SectionCBS3__icon4"/>
					<p>{t("Cybersecurity.section_3.icon4")}</p>
				</TimelineContent>
				</TimelineItem>
			</Timeline>
    </React.Fragment>
	</Zoom>
	</div>
		</div>
	)
}

export default SectionCBS3
