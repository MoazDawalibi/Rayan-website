import React from "react";
import "./Terms.scss";
import { Header } from "views/header/Header";
import { useTranslation } from "react-i18next";
import { Card } from "react-bootstrap";
import Footer from "views/footer/Footer";
import i18next from "i18next";
import { useGetPolicy } from "api/query";
import BounceLoader from "react-spinners/BounceLoader";

const TermsPage = () => {
  const { t } = useTranslation();
  const { data: policy } = useGetPolicy(i18next.language) || "";

  React.useEffect(() => {
    if (policy) {
      document.getElementById("policy-container").innerHTML = policy;
    }
  }, [policy]);

  return (
    <div className="terms-page">
      <Header />
      <div className="bg-terms" />
      <div className="terms-card-container">
        <Card className="terms-card">
          <Card.Header className="card-header">
            <h2 className="my-1">{t("terms_&_policy")}</h2>
          </Card.Header>
          <Card.Body className="p-0 card-body">
            <div id="policy-container">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "15rem" }}>
                <BounceLoader color="#8228f0" />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default TermsPage;
