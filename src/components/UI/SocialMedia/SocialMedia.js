import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaBehance,
  FaLinkedinIn,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import "./SocialMedia.css";

const socalMedias = [
  {
    name: "Instagram",
    link: "instagram.com/kosovaoutsource/",
    icon: <RiInstagramFill />,
  },
  {
    name: "Twitter",
    link: "twitter.com",
    icon: <FaTwitter />,
  },
  {
    name: "Linkedin",
    link: "linkedin.com/company/kosovaoutsource-llc",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Behance",
    link: "behance.net",
    icon: <FaBehance />,
  },
  {
    name: "Facebook",
    link: "facebook.com/KosovaOutsource-115703036932572",
    icon: <FaFacebookF />,
  },
];

const SocialMedia = () => {
  return (
    <div className="SocalMedia">
      {socalMedias.map((item, index) => (
        <a
          key={index}
          rel="noopener noreferrer"
          target="_blank"
          href={`https://www.${item.link}`}
        >
          <span>{item.icon}</span>
          <p>{item.name}</p>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
