import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import hamza from "../../img/hamza.png";
import subhan from "../../img/mariam.png";
import mariam from "../../img/subhan.png";
import bhai from "../../img/bhai.png";

const Testimonial = () => {
  const clients = [
    {
      img: bhai,
      // review:
      //   "xxx",
    },
    {
      img: mariam,
      // review:
      //   "xxx",
    },
    {
      img: subhan,
      // review:
      //   "xxx",
    },
    {
      img: hamza,
      // review:
      //   "xxx",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Colleagues & Associates  </span>
        <span>Recommendations </span>
        <span>for me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
