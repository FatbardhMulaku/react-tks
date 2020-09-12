import React from 'react';
import './Footer.css';
import FooterLogo from './../../img/footer.png';
import { Link } from "react-router-dom";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook'; 
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
    return (
        <div className="footer">
            <div className="sub-footer"> 
                <img src={FooterLogo} alt="footer" className="img-footeri"/>
                <div className="subscribe-c">
                <h1>Subscribe to our newsletter!!</h1>
                <input type='text' placeholder="Enter your email adress"/><button className="footer-btn">Subscribe</button>
                </div>
            </div>

            <div className="down-footer">
                <div className="down-footer-loc">
                    <h2>KosovaOutsource</h2>
                    <p>Location-Prishtina, Kosova</p>
                    <p>Rr,St-Sinan Gashi</p>
                    <p>Zip Code 10000</p>
                    <p>+383 45400400</p>
                </div>
                <div className="down-footer-link">
                    <div className="down-footer-link-c c1">
                        <h5>Company</h5>
                        <Link to="/" className="footer-link">Home </Link>
                        <Link to="/" className="footer-link">Service </Link>
                        <Link to="/" className="footer-link">Career </Link>
                        <Link to="/" className="footer-link">Blog </Link>
                        <Link to="/" className="footer-link">About us </Link>
                    </div>
                    <div className="down-footer-link-c c2">
                        <h5>About</h5>
                        <Link to="/" className="footer-link">Team </Link>
                        <Link to="/" className="footer-link">Faq </Link>
                        <Link to="/" className="footer-link">Contact us </Link>
                        <Link to="/" className="footer-link">Company </Link>
                        <Link to="/" className="footer-link">News </Link>
                    </div>
                    <div className="down-footer-link-c c3">
                         <h5>Services</h5>
                        <Link to="/" className="footer-link">Software development </Link>
                        <Link to="/" className="footer-link">Callaboration </Link>
                        <Link to="/" className="footer-link">Nerwork infrastructure </Link>
                        <Link to="/" className="footer-link">Administration </Link>
                        <Link to="/" className="footer-link">It managment services</Link>
                    </div>
                    <div className="down-footer-link-c c4">
                        <h5>Help Center</h5>
                        <Link to="/" className="footer-link">Team of services </Link>
                        <Link to="/" className="footer-link">Privacy policy </Link>
                        <Link to="/" className="footer-link">security </Link>

                    </div>
                </div>
            </div>
            
            <div className="footer-fund">
                <p>Copyright 2020 All rights are reserved by KosovaOutsource</p>
                <div className="footer-icon-c">
                    
                <Link to="/" className="footer-icon-label"> <TwitterIcon className="ikonaFooter"/> Twitter </Link>
                
                <Link to="/" className="footer-icon-label"><InstagramIcon className="ikonaFooter"/> Instagram  </Link>

                <Link to="/" className="footer-icon-label"> <LinkedInIcon className="ikonaFooter"/> Linked </Link>

                <Link to="/" className="footer-icon-label"><FacebookIcon className="ikonaFooter"/> Facebook </Link>

                <Link to="/" className="footer-icon-label"><YouTubeIcon className="ikonaFooter"/> YouTube  </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer;
