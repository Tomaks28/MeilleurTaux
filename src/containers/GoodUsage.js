import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Boxes from "../components/Boxes";

const GoodUsage = ({
  percentage,
  previous,
  next,
  step,
  setStep,
  project,
  setProject
}) => {
  //Creating all needed react states
  const boxes = [
    "Résidence principale",
    "Résidence secondaire",
    "investissement locatif"
  ];

  return (
    <>
      <Header />
      <PageTitle title={"usage du bien"} info={true} />
      <Boxes
        boxes={boxes}
        project={project}
        setProject={setProject}
        step={step}
        setStep={setStep}
        next={next}
        field="goodUsage"
      />
      <Footer
        percentage={percentage}
        previous={previous}
        next={project.goodUsage ? next : null}
      />
    </>
  );
};

export default GoodUsage;
