import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import picto from "../images/picto-confidentiel.png";

import image from "../images/visuel-desktop-email.jpg";

const Contact = ({
  percentage,
  previous,
  next,
  step,
  setStep,
  project,
  setProject
}) => {
  return (
    <>
      <Header />
      <PageTitle title={"vos coordonnées"} info={false} />
      <div
        className="general-padding"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px"
        }}
      >
        <p className="quotation-box">
          Un devis vous sera envoyé par mail avec un récapitulatif de votre
          demande.
        </p>
        <img className="image" src={image} alt="visuel desktop email" />
      </div>
      <div className="general-padding">
        <div className="line" style={{ backgroundColor: "#F1F1F1" }}>
          <span style={{ flex: "1" }}>Adresse e-mail emprunteur *</span>
          <div style={{ display: "flex" }}>
            <i className="infos"></i>
            <div className="email">
              <input
                className="fields text-area-orange"
                type="email"
                onChange={event => {
                  setProject({ ...project, email: event.target.value });
                }}
                style={{ textAlign: "left" }}
                value={project.email}
              />
              <img className="picto" src={picto} alt="confidential picto" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="general-padding"
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <input
          type="radio"
          id="huey"
          name="drone"
          value="huey"
          checked={project.checked}
          onClick={() => {
            setProject({ ...project, checked: !project.checked });
          }}
        />
        <label for="huey" style={{ fontSize: "12px", fontWeight: "bold" }}>
          J'accepte de recevoir par email des propositions de MeilleurTaux.
        </label>
      </div>
      <Footer
        percentage={percentage}
        previous={previous}
        next={project.email && project.checked ? next : null}
      />
    </>
  );
};

export default Contact;
