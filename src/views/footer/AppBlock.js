import React from "react";
import GOOGLE_PLAY from "assets/images/icons/google-play.png";
import APPLE_STORE from "assets/images/icons/app-store.png";

const AppBlock = ({ title, appBlock }) => {
  return (
    <div className="app-block-container">
      <h3>{title}</h3>
      <div className="app-block">
        <a href={appBlock?.google_play || "/"} target="_blank" rel="noreferrer">
          <img src={GOOGLE_PLAY} alt="" />
        </a>
        <a href={appBlock?.app_store || "/"} target="_blank" rel="noreferrer">
          <img src={APPLE_STORE} alt="" />
        </a>
      </div>
    </div>
  );
};

export default AppBlock;
