import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Line from "../components/Line";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";

const Budget = props => {
  const lines = [
    { title: "Montant estimé de votre acquisition *", type: "money" },
    { title: "Montant estimé des travaux", type: "money" },
    { title: "Frais de notaire *", type: "money" },
    { title: "Budget total estimé du projet", type: "money", disabled: "true" }
  ];
  return (
    <>
      <Header />
      <PageTitle
        title={"définissons le montant de votre projet"}
        info={false}
      />

      {lines.map((line, index) => {
        return (
          <Line
            key={index}
            line={line}
            color={index % 2 ? "white" : "#F1F1F1"}
          />
        );
      })}

      <Footer
        percentage={props.percentage}
        previous={props.previous}
        next={props.next}
      />
    </>
  );
};

export default Budget;
