import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Boxes from "../components/Boxes";

const UserSituation = props => {
  const boxes = [
    "locataire",
    "propriétaire",
    "bénéficiare d'un logement de fonction",
    "hébergé à titre gratuit"
  ];
  return (
    <>
      <Header />
      <PageTitle title={"votre situation actuelle"} info={true} />
      <Boxes boxes={boxes} />
      <Footer
        percentage={props.percentage}
        previous={props.previous}
        next={props.next}
      />
    </>
  );
};

export default UserSituation;
