import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Boxes from "../components/Boxes";

const PropertyCondition = props => {
  const boxes = ["neuf", "ancien"];
  return (
    <>
      <Header />
      <PageTitle title={"état du bien"} info={true} />
      <Boxes boxes={boxes} />
      <Footer
        percentage={props.percentage}
        previous={props.previous}
        next={props.next}
      />
    </>
  );
};

export default PropertyCondition;
