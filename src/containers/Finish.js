import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";

const Finish = props => {
  const dossier = "23343244";
  return (
    <>
      <Header />
      <PageTitle title={"et voila, le formulaire est terminé !"} info={false} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{ paddingLeft: "200px", fontSize: "20px", fontWeight: "500" }}
        >
          Votre numéro de dossier est le :
        </span>
        <span
          style={{ fontWeight: "bold", fontSize: "20px", marginLeft: "5px" }}
        >
          {dossier}
        </span>
      </div>
      <p
        className="general-padding"
        style={{
          textDecoration: "underline",
          fontSize: "15px",
          marginTop: "20px",
          cursor: "pointer"
        }}
      >
        Mentions légales
      </p>
    </>
  );
};

export default Finish;
