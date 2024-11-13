import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./nav.scss";
import { useTranslation } from "react-i18next";
import { navigationConfig } from "configs/navigationConfig";
import { LanguageDropDown } from "./LanguageDropDown";

export const Header = () => {
  const { pathname } = useLocation();
  const [active, setActive] = React.useState("/");
  const { t } = useTranslation();

  React.useEffect(() => {
    setActive(navigationConfig.find((item) => item.navLink === pathname)?.key || "home");
  }, [pathname]);

  return (
    <header dir="ltr" className="home-header">
      <div className="home-logo">
        <img src="/logos.png" alt=""  />
      </div>
      <nav className="home-nav">
        <LanguageDropDown />
        {navigationConfig.map((nav) => (
          <Link to={nav.navLink} key={nav.key} className={nav.key === active ? "active-nav" : ""}>
            {t(nav.key)}
          </Link>
        ))}
      </nav>
    </header>
  );
};
