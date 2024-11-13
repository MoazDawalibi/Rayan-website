import React from "react";
import { lazy } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { useUrlCorrection } from "./useUrlCorrection";
import { useDocumentRename } from "./useDocumentRename";

const HomePage = lazy(() => import("./views/home/HomePage"));
const TermsPage = lazy(() => import("./views/terms/TermsPage"));
const ContactPage = lazy(() => import("./views/contact/ContactPage"));

const AppRouter = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default AppRouter;

function AppRoutes() {
  useUrlCorrection();
  useDocumentRename();

  return (
    <Routes>
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
}
