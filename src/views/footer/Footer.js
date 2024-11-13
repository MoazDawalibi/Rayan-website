import React from "react";
import { useTranslation } from "react-i18next";
import { navigationConfig } from "configs/navigationConfig";
import { Link } from "react-router-dom";
import { useGetData } from "api/query";
import AppBlock from "./AppBlock";
import "./Footer.scss";
import "./socials.scss";
import { FaFacebookF ,FaTwitter } from 'react-icons/fa';
import { GrLinkedinOption  } from 'react-icons/gr';

const Footer = () => {
  const { t } = useTranslation();
  const { data } = useGetData();
  const download_app = data?.download_app || {};
  return (
    <div>
      
      <div className="get-app-container">
        <h1>{t("get_the_app")}</h1>
        <p>{t("get_the_app_description")}</p>
        <div className="images-container">
          <AppBlock title={t("captain")} appBlock={download_app?.captain} />
          <AppBlock title={t("customer")} appBlock={download_app?.customer} />
        </div>
      </div>
      <div className="footer-socials" dir="ltr">
        <img src="/logos.png" alt="" />
        <div className="footer-navs">
          {navigationConfig.map((nav) => (
            <Link to={nav.navLink} key={nav.key}>
              {t(nav.key)}
            </Link>
          ))}
        </div>
        <div className="social-media">
          {/* {social_links.map((item) => (
            <a key={item.url} href={item.url} rel="noreferrer" target="_blank">
              <img src={item.icon} alt="" />
              
            </a>
          ))} */}
          <FaFacebookF className="social-media-icon" size={30}/>
          <GrLinkedinOption className="social-media-icon"  size={30}/>
          <FaTwitter className="social-media-icon"  size={30}/>
        </div>
      </div>
      <p className="copyrights">&copy; SDNone company. all rights reserved</p>
    </div>
  );
};

export default Footer;
