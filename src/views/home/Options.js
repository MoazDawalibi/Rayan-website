import React from "react";
import "./styles/options.scss";
import { useTranslation } from "react-i18next";
import BOOK from "assets/images/icons/book.png";
import PAY from "assets/images/icons/pay.png";
import TRACK from "assets/images/icons/track.png";

const list = [
  {
    img: BOOK,
    title: "options.book",
    text: "options.book_text",
  },
  {
    img: PAY,
    title: "options.pay",
    text: "options.pay_text",
  },
  {
    img: TRACK,
    title: "options.track",
    text: "options.track_text",
  },
];

const Options = () => {
  const { t } = useTranslation();

  return (
    <div id="options" className="options-section-wrapper">
      <img src="/logos.png" className="image-logo" alt="" />

      <div className="list-wrapper">
        {list.map((item) => (
          <div className="list-item" key={item.title}>
            <div className="img-wrapper">
              <img src={item.img} alt="" />
            </div>
            <h5>{t(item.title)}</h5>
            <p>{t(item.text)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
