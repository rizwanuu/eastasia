import * as React from "react";

import { ShopMenusQuery } from "@graphql/gqlTypes/ShopMenusQuery";

import { SOCIAL_MEDIA } from "../../core/config";
import { SocialMediaIcon } from "..";

import visa from '../../images/visa.png';
import discover from '../../images/discover.png';
import onlink from '../../images/onelink.png';
import stripe from '../../images/stripe.png';
import paypal from '../../images/paypal.png';
import payoneer from '../../images/payoneer.png';
import footerLogo from '../../images/logo.png';

import { NavLink } from "..";


import "./scss/index.scss";

export type NavProps = { menu: ShopMenusQuery["footer"] };

export const Nav: React.FC<NavProps> = ({ menu }) => {
  let BANK_ACCOUNTS = [visa, discover, onlink, stripe, paypal, payoneer]
  return (

    <footer className="footer-nav">
      <div style={{ padding: "5rem 1rem" }} className="container">
        <div style={{ width: "25rem" }} className="footer-nav__section">
          <img src={footerLogo} alt="footerLogo" style={{ marginBottom: "1rem" }} />
          <p style={{ marginBottom: "1rem", fontSize: "12px", lineHeight: "2" }} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vesbulum efficitur vitae neque et pharetra. Donec ac
            vehicula leo
          </p>
          <div style={{ display: "flex" }}>
            {SOCIAL_MEDIA.map(medium => (
              <SocialMediaIcon medium={medium} key={medium.ariaLabel} />
            ))}
          </div>
        </div>
        {menu?.items.map(item => (
          <div className="footer-nav__section" key={item.id}>
            <h4 className="footer-nav__section-header">
              <NavLink item={item} />
            </h4>
            <div className="footer-nav__section-content">
              {item.children.map(subItem => (
                <p key={subItem.id}>
                  <NavLink item={subItem} />
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="footer__favicons container">
        <p>&#169; East Asia , All Rights Reserve - 2021</p>
        <div className="bankimages" style={{ display: "flex" }}>
          {
            BANK_ACCOUNTS.map((item, index) => (
              <img src={item} key={index} style={{ height: "1.5rem", width: "2rem" }} />
            ))
          }
        </div>
      </div>
    </footer>
  );
};
