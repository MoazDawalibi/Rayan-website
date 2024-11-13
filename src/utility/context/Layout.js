import { useTranslation } from "react-i18next";

const Layout = ({ children }) => {
  const { i18n } = useTranslation();
  document.getElementsByTagName("html")[0].setAttribute("dir", i18n.dir());

  return children;
};

const useDirection = () => {
  const { i18n } = useTranslation();
  return i18n.dir();
};

export { Layout, useDirection };
