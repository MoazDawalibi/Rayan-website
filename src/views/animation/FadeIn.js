import React from "react";
import "./styles.css";

export const FadeIn = ({ show, duration = "1s", children }) => {
  if (!show) return null;

  return <div style={{ animation: `${show ? "fadeIn" : ""} ${duration}` }}>{children}</div>;
};
