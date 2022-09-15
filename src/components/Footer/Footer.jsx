import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <button className="button n-button">
        <span><a href="mailto:hussainafaq18@gmail.com">Send Mail!</a></span>
        </button>
        
        <div className="f-icons">
          <a href="https://instagram.com/aafak.hussain?igshid=YmMyMTA2M2Y=">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/Aafak18">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/Aafak18">
            <Gitub color="white" size={"3rem"} />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
