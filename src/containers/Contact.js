import React, { useEffect } from "react";

//import of components used in this code
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import picto from "../images/picto-confidentiel.png";

//Load of desktop image
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
  useEffect(() => {
    //useEffect used to update current page cookie
    setStep("/contact");
  });

  return (
    <>
      {/* showing the top header bar */}
      <Header />
      {/* showing the Title*/}
      <PageTitle title={"vos coordonnées"} info={false} />
      {/* showing the box with image*/}
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
      {/* showing and managing email field*/}
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
                  // updating the global state by passing email field
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
      {/* Showing and managing the radio button field */}
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
            // updating the global state by passing checked radio button
            setProject({ ...project, checked: !project.checked });
          }}
        />
        <label for="huey" style={{ fontSize: "12px", fontWeight: "bold" }}>
          J'accepte de recevoir par email des propositions de MeilleurTaux.
        </label>
      </div>
      {/* showing the bottom footer bar */}
      <Footer
        percentage={percentage}
        previous={previous}
        next={project.email && project.checked ? next : null}
      />
    </>
  );
};

export default Contact;
