import React from "react";
import CAR from "assets/images/car.png";
import { Header } from "views/header/Header";
import { useTranslation } from "react-i18next";
import "./styles/HomePage.scss";
import "./styles/HomeText.scss";
import Options from "./Options";
import Steps from "./Steps";
import Footer from "views/footer/Footer";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div className="bg-1" />
      <img src={CAR} alt="" className="car-image" />
      <div className="home-content">
        <h2>{t("best_in_country")}</h2>
        <h2>{t("trusted_taxi_services")}</h2>
        <h1>{t("in_iraq")}</h1>
        <p>{t("home_description")}</p>
        <button>
          <a href="#options">{t("read_more")}</a>
        </button>
      </div>
      <Options />
      <Steps />
      <Footer />
    </div>
  );
};

export default HomePage;
