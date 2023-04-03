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
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    <PrivacyModal />
                </div>

                <div className="item2">
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} The Lazy Shop. All Rights
                        Reserved.
                    </span>
                </div>
                <a
                    href="https://github.com/Bryanolvera1"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.linkedin.com/in/bolvera"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                    href="http://fb.com"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                {false && <PrivacyModal click={true} />}
            </div>
        </footer>
    );
};

export default Footer;