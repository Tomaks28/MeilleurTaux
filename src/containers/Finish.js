import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Boxes from "../components/Boxes";

const Finish = props => {
  const boxes = ["maison", "appartement"];
  return (
    <>
      <Header />
      <PageTitle title={"et voila, le formulaire est terminé !"} info={false} />
    </>
  );
};

export default Finish;
