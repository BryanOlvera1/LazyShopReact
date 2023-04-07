import React from "react";
import "./Footer.css"; 
import PrivacyModal from "./PrivacyModal"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {
  faLinkedinIn,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"; 
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  // Render the website footer
  return (
    <footer className="footer"> 
      <div className="footer-container"> 
        <div className="item1"> 
         {/* Display the PrivacyModal component */}
          <PrivacyModal /> 
        </div>
        <div className="item2">
          <FontAwesomeIcon icon={faCopyright} />
          <span style={{ paddingLeft: 5 }}>
            {new Date().getFullYear()} The Lazy Shop. All Rights Reserved.
          </span>
        </div>

        {/* Display links to GitHub, LinkedIn, and Facebook */}
        <a href="https://github.com/Bryanolvera1" target="_blank" className="item3">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/bolvera" target="_blank" className="item3">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="http://fb.com" target="_blank" className="item4">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        {/* Display PrivacyModal component when click prop is true */}
        {false && <PrivacyModal click={true} />}
      </div>
    </footer>
  );
};

export default Footer;
