import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Line from "../components/Line";

const GoodLocation = props => {
  const lines = [
    { title: "Dans quel pays se trouve votre projet ? *", type: "country" },
    { title: "Ville ou code postal ? *", type: "city" }
  ];
  const text =
    "La connaissance du code postal du bien permettra de calculer les frais de notaire selon les conditions en vigueur dans le département concerné. Si vous êtes en recherche de bien sur plusieurs communes, indiquez une commune ciblée.";

  return (
    <>
      <Header />
      <PageTitle title={"où se trouve le bien à financer ?"} info={false} />
      {lines.map((line, index) => {
        return (
          <Line
            key={index}
            line={line}
            color={index % 2 ? "white" : "#F1F1F1"}
          />
        );
      })}
      <p
        className="general-padding"
        style={{ fontWeight: "bold", fontSize: "16px" }}
      >
        {text}
      </p>
      <Footer
        percentage={props.percentage}
        previous={props.previous}
        next={props.next}
      />
    </>
  );
};

export default GoodLocation;
