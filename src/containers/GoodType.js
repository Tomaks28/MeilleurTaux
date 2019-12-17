import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";

const GoodType = () => {
  return (
    <>
      <Header />
      <PageTitle title={"type de bien"} info={true} />
      <Footer />
    </>
  );
};

export default GoodType;
