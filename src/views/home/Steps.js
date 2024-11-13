import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/steps.scss";
import { FadeIn } from "views/animation";

const steps = [
  {
    title: "steps.set_location",
    description: "steps.set_location_description",
    id: 1,
  },
  {
    title: "steps.choose_driver",
    description: "steps.choose_driver_description",
    id: 2,
  },
  {
    title: "steps.dropoff_location",
    description: "steps.dropoff_location_description",
    id: 3,
  },
  {
    title: "steps.payment",
    id: 4,
  },
];

const Steps = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const { t } = useTranslation();

  return (
    <section className="steps-section">
      <h2>{t("how_rayan_taxi_works")}</h2>
      <div className="container">
        <div className="img-wrapper">
          {steps.map((step) => (
            <FadeIn show={step.id === activeStep} key={step.id}>
              <img src={`/assets/images/sliders/slider-${activeStep}.png`} alt="" />
            </FadeIn>
          ))}
        </div>
        <div className="steps-container">
          {steps.map((step) => (
            <div key={step.id} className={`step-wrapper ${step.id === activeStep ? "step-wrapper-active" : ""}`}>
              <h3 onClick={() => setActiveStep(step.id)}>{step.id}</h3>
              <div className="step-texts" onClick={() => setActiveStep(step.id)}>
                <h5>{t(step.title)}</h5>
                {step.description && <p>{t(step.description)}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
