import React, { useContext } from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

//My certifications
import budget from '../../img/budget.png';
import expense from '../../img/expense.png'
import portfolio1 from '../../img/portfolio1.png'

import { themeContext } from "../../Context";
const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="projects" id="projects">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>My</span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="projects-slider"
      >
        <SwiperSlide>
          <a href="https://afaqsportfolio.surge.sh/">
            <img src={portfolio1} alt="" />
          </a>     
        </SwiperSlide>
        
        <SwiperSlide>
          <a href="https://budgetplannerbyafaq.surge.sh/">
            <img src={budget} alt="" />
          </a>        
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://exptrackerbyafaq.surge.sh/">
            <img src={expense} alt="" />
          </a>         
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
