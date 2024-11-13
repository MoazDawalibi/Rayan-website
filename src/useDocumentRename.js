import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { navigationConfig } from "configs/navigationConfig";
import { useTranslation } from "react-i18next";

export const useDocumentRename = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const navObject = navigationConfig.find((item) => item.navLink === pathname);
    if (navObject && navObject.key !== "home") {
      document.title = `${t("brand")} - ${t(navObject.key)}`;
    } else {
      document.title = t("brand");
    }
  }, [pathname, t]);
};
