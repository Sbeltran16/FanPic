import React from "react";
import {Icon} from "semantic-ui-react";
import ".//Footer.css"


export default function Footer() {
    return (
      <div className="footer">
        <div className="socialMedia">
        <a href="https://twitter.com/Sergiob_7"><Icon name='twitter' size='large' /></a>
        <a href="https://www.instagram.com/sergiob_7/"><Icon name='instagram' size='large' /></a>
        <a href="https://www.linkedin.com/in/sergiobeltran16/"><Icon name='linkedin' size='large' /></a>
        </div>
        <p> &copy; 2022 FanPic</p>
      </div>
    );
  }
  