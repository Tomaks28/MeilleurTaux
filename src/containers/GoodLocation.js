import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Boxes from "../components/Boxes";

const GoodLocation = props => {
  return (
    <>
      <Header />
      <PageTitle title={"où se trouve le bien à financer ?"} info={false} />
      <Footer
        percentage={props.percentage}
        previous={props.previous}
        next={props.next}
      />
    </>
  );
};

export default GoodLocation;
