import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Boxes from "../components/Boxes";

const GoodType = ({
  percentage,
  previous,
  next,
  step,
  setStep,
  project,
  setProject
}) => {
  //Creating dynamically boxes to show
  const boxes = ["maison", "appartement"];

  return (
    <>
      <Header />
      <PageTitle title={"type de bien"} info={true} />
      <Boxes
        boxes={boxes}
        project={project}
        setProject={setProject}
        step={step}
        setStep={setStep}
        next={next}
        field="goodType"
      />
      <Footer
        percentage={percentage}
        previous={previous}
        next={project.goodType ? next : null}
      />
    </>
  );
};

export default GoodType;
