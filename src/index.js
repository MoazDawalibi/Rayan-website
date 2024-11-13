import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { LoadingPage } from "views/LoadingPage/LoadingPage";
import { QueryClient, QueryClientProvider } from "react-query";

import Router from "./Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { Layout } from "./utility/context/Layout";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

const queryClient = new QueryClient();

ReactDOM.render(
  <Suspense fallback={<LoadingPage />}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Router />
        </Layout>
      </QueryClientProvider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
