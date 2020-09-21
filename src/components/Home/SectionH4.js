import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SectionH4.css";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import {FaLongArrowAltLeft, FaLongArrowAltRight} from 'react-icons/fa'
import AboutLogo1 from './../../assets/Home/lonaa.png';
import AboutLogo2 from './../../assets/Home/ilir.png';

export class Team extends Component {
    componentDidMount(){

    }
  render() {
    return (
      <div className="team">
          <div className="team-c">
        <div data-aos="zoom-out-right" data-aos-duration="2000" data-aos-once="false" className="team__left">
          <h1>We might be maybe already just one email away from working together</h1>
          <p>
            if you like to work with KosovaOutsource please send us a CV at our e-mail and we will review import PropTypes from 'prop-types'
            and maybe we can work with fun together.
          </p>

          <div className="team-btn-container">
            <Link to="/" className="team-btn">
              Learn More
            </Link>
          </div>
        </div>

            
        <div data-aos="zoom-out-left" data-aos-once="false"
 data-aos-duration="2000"  className="team__Right">
            <div className="team__Right1">
                <div className="team__Right1-img">
                    <img src={AboutLogo1} className="team__Right1-imgA" alt="aa"/>
                </div>
                <div className="team__Right1-con">
                    <h1>Leona Zeqiri</h1>
                    <p>Project Manager</p>
                    <hr/>
                    <p>Hi i am Lona project manager at KosovaOutsource, nice to
                    meet you</p>
                    <FormatQuoteIcon className="team__thojzat" />
                </div>
                <div className="shigjeta-c">
                        <div className="shigjeta-majt">
                            <FaLongArrowAltLeft className="shigjeta__icon" />
                        </div>
                        <div className="shigjeta-djatht">
                            <FaLongArrowAltRight className="shigjeta__icon" />
                        </div>
                </div>
            </div>

            <div className="team__Right2">
            <div className="team__Right1-img">
                    <img src={AboutLogo2} className="team__Right1-imgA" alt="aa"/>
                </div>
                <div className="team__Right1-con2">
                    <h1>Leona Zeqiri</h1>
                    <p>Project Manager</p>
                    <hr/>
                    <p>Hi i am Lona project manager at KosovaOutsource, nice to
                    meet you</p>
                    <FormatQuoteIcon className="team__thojzat" />
                </div>
            </div>
        </div>

        </div>
      </div>
    );
  }
}

export default Team;
