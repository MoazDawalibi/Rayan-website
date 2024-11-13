import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { navigationConfig } from "configs/navigationConfig";

export const useUrlCorrection = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!navigationConfig.find((item) => item.navLink === pathname)) {
      navigate(navigationConfig.find((item) => item.key === "home").navLink);
    }
  }, [pathname, navigate]);
};
