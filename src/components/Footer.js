import React from 'react'
import I4GLogo from "../assets/images/I4G_logo.svg";
import ZuriInternship from "../assets/images/zuri_internship.svg";

const Footer = () => {
  return (
    <footer>
        <div className="footer_box">
          <img src={ZuriInternship} alt="Zuri internship logo" className="zuri_internship_logo" />
          <p className="light_text">HNG Internship 9 Frontend Task</p>
          <img src={I4GLogo} alt="I4G icon" className="I4G_logo" />
        </div>
      </footer>
  )
}

export default Footer;