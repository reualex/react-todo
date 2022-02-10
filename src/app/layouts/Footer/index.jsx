import React from "react";
import { Link } from "react-router-dom";
import strings from "../../../../localization";
import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--container">
        <ul className="footer--agree-data">
          <li><Link className="footer--link" to="#">{strings.links.privacyPolicy}</Link> </li>
          <li><Link className="footer--link"  to="#">{strings.links.userAgreement}</Link></li>
          <li><Link className="footer--link"  to="#">{strings.links.personalData}</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
