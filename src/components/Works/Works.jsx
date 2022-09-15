import React, { useContext } from "react";
import "./Works.css";

import html1 from "../../img/html1.png";
import c1 from "../../img/c1.png";
import js1 from "../../img/js1.png";
import react1 from "../../img/react1.png";
import python1 from "../../img/python1.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Programming/Developing:
          </span>
          <span>Languages, Frameworks & Tools:</span>
          <spane>
            React JS: Its aim is to allow developers to easily create fast user interfaces for 
            websites and applications alike. The main concept of React. js is virtual DOM
            <br />
            <hr />
            JavaScript: It is a scripting language that enables you to create dynamically
             updating content, control multimedia, animate images, and pretty much everything else.
            <br />
            <hr />
            Html5: It is the standard markup language for Web pages. With HTML you can create your own Website.
            <br />
            <hr />
            Python: It is is a high-level, general-purpose programming language. Its design philosophy emphasizes 
            code readability with the use of significant indentation
            <br />
            <hr />
            C++: C++ is a powerful general-purpose programming language. It can be used to develop operating systems
            , browsers, games, and so on.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 30 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 2.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={c1} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={js1} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={react1} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={python1} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={html1} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
