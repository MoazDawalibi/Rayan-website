import React from "react";
import "./LoadingPage.css";
import BounceLoader from "react-spinners/BounceLoader";

export const LoadingPage = () => {
  return (
    <div className="loading-page">
      <BounceLoader color="#741d46" />
    </div>
  );
};
