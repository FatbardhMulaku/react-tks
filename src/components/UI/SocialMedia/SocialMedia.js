import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaBehance,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="SocalMedia">
      <div className="row">
        <div className="col-sm-6 col-md-4 col-xl-2 my-2">
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
        </div>
        <div className="col-sm-6 col-md-4 col-xl-2 my-2">
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
        </div>
        <div className="col-sm-6 col-md-4 col-xl-2 my-2">
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
        </div>
        <div className="col-sm-6 col-md-4 col-xl-2 my-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.behance.net"
          >
            <span>
              <FaBehance />
            </span>
            Behance
          </a>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-2 my-2">
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
        </div>
        <div className="col-sm-6 col-md-4 col-xl-2 my-2">
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
      </div>
    </div>
  );
};

export default SocialMedia;
