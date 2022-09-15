import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

//My certifications
import analytics from '../../img/analytics.png';
import ads from '../../img/ads.png'
import cplusplus from '../../img/cplusplus.png'
import css from '../../img/css.png'
import html from '../../img/html.png'
import python from '../../img/python.png'
import react from '../../img/react.png'

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Certifications</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://skillshop.exceedlms.com/student/award/tHgMiugAKGLWK8tzFPALpAPg">
            <img src={analytics} alt="" />
          </a>     
        </SwiperSlide>
        
        <SwiperSlide>
          <a href="https://olympus1.mygreatlearning.com/course_certificate/XJJPXXTZ">
            <img src={cplusplus} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://olympus1.mygreatlearning.com/course_certificate/VDKYXOAQ">
            <img src={python} alt="" />
          </a>
          
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://olympus1.mygreatlearning.com/course_certificate/XEQVPAVW">
            <img src={react} alt="" />
          </a>          
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://skillshop.exceedlms.com/student/award/3LArCz6DnAVdGCGUPEBWo1c6">
            <img src={ads} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="">
            <img src={html} alt="https://olympus1.mygreatlearning.com/course_certificate/MEVSDXFA" />
          </a>         
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://olympus1.mygreatlearning.com/course_certificate/QBHPQFJO">
            <img src={css} alt="" />
          </a>        
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Portfolio;
