import React from "react";
import { Header } from "views/header/Header";
import { useTranslation } from "react-i18next";
import { Card } from "react-bootstrap";
import Footer from "views/footer/Footer";
import { useGetData } from "api/query";
import {GoLocation} from "react-icons/go"
import {CiMail} from "react-icons/ci"
import {MdOutlineAccessTime} from "react-icons/md"
import "./Contact.scss";

const ContactPage = () => {
  const { t } = useTranslation();
  const { data } = useGetData();
  const emails = data?.emails || [];

  return (
    <div className="contact-page">
      <Header />
      <div className="bg-contact" />
      <div className="contact-card-container">
        <Card className="contact-card">
          <Card.Header className="card-header">
            <h2 className="my-1">{t("our_info")}</h2>
          </Card.Header>
          <Card.Body className="card-body">
            <div className="location">
              {/* <img src={LOCATION_ICON} alt="" /> */}
              <GoLocation  className="icons-contct" size={35}/> 
              <h6>{t("location")}</h6>
            </div>
            <div className="email">
              <CiMail className="icons-contct" size={35}/>
              <div className="emails">
                {emails.map((email) => (
                  <h6 key={email}>
                    <a href={`mailto:${email}`}>{email}</a>
                  </h6>
                ))}
              </div>
            </div>
            <div className="hours">
              <MdOutlineAccessTime className="icons-contct" size={35} />
              <h6>{t("hours_of_operation")}</h6>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
