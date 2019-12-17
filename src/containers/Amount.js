import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Boxes from "../components/Boxes";

const Amount = props => {
  return (
    <>
      <Header />
      <PageTitle
        title={"définissons le montant de votre projet"}
        info={false}
      />
      <Footer
        percentage={props.percentage}
        previous={props.previous}
        next={props.next}
      />
    </>
  );
};

export default Amount;
