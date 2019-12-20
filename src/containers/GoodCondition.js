import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Boxes from "../components/Boxes";

const GoodCondition = ({
  percentage,
  previous,
  next,
  step,
  setStep,
  project,
  setProject
}) => {
  //Creating all needed react states
  const boxes = ["ancien", "neuf"];

  return (
    <>
      <Header />
      <PageTitle title={"état du bien"} info={true} />
      <Boxes
        boxes={boxes}
        project={project}
        setProject={setProject}
        step={step}
        setStep={setStep}
        next={next}
        field="goodCondition"
      />
      <Footer
        percentage={percentage}
        previous={previous}
        next={project.goodCondition ? next : null}
      />
    </>
  );
};

export default GoodCondition;
