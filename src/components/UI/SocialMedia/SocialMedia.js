import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="SocalMedia">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.instagram.com"
      >
        <span>
          <RiInstagramFill />
        </span>
        Instagram
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.twitter.com"
      >
        <span>
          <FaTwitter />
        </span>
        Twitter
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com"
      >
        <span>
          <FaFacebookF />
        </span>
        Facebook
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com"
      >
        <span>
          <FaLinkedinIn />
        </span>
        LinkedIn
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.youtube.com"
      >
        <span>
          <FaYoutube />
        </span>
        Youtube
      </a>
    </div>
  );
};

export default SocialMedia;
