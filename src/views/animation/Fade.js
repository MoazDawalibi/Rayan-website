import React, { useEffect, useState } from "react";
import "./styles.css";

export const Fade = ({ show, duration = "1s", children }) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  if (!shouldRender) return null;

  return (
    <div style={{ animation: `${show ? "fadeIn" : "fadeOut"} ${duration}` }} onAnimationEnd={onAnimationEnd}>
      {children}
    </div>
  );
};
