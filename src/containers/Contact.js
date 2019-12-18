import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Line from "../components/Line";

import image from "../images/visuel-desktop-email.jpg";

const Contact = props => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");

  const line = {
    title: "Adresse e-mail emprunteur *",
    type: "email",
    disabled: false,
    valueToGet: "email"
  };
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
      <Line
        line={line}
        color={"#F1F1F1"}
        states={{
          email,
          setEmail
        }}
      />
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
          checked={checked}
          onClick={() => {
            setChecked(!checked);
          }}
        />
        <label for="huey" style={{ fontSize: "12px", fontWeight: "bold" }}>
          J'accepte de recevoir par email des propositions de MeilleurTaux.
        </label>
      </div>
      <Footer
        percentage={props.percentage}
        previous={props.previous}
        next={email && checked ? props.next : null}
      />
    </>
  );
};

export default Contact;
