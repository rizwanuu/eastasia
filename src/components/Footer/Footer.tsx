import * as React from "react";

// import { SOCIAL_MEDIA } from "../../core/config";
// import { SocialMediaIcon } from "..";
import { Nav, NavProps } from "./Nav";

import "./scss/index.scss";

type FooterProps = NavProps;

export const Footer: React.FC<FooterProps> = ({ menu }) => (
  <div className="footer" id="footer">
    <div className="footer__email">
      <div className="footer__emailTitle">
        <h3>Get The Latest</h3>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
      </div>
      <div className="footer__emailDiv">
        <input type="email" placeholder="Enter your Email Address" />
        <button>Subscribe</button>
      </div>
    </div>
    <Nav menu={menu} />
  </div>
);
