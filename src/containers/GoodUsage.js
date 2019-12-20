import React from "react";

//import of components used in this code
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
  //Creating dynamically boxes to show on screen
  const boxes = [
    "Résidence principale",
    "Résidence secondaire",
    "investissement locatif"
  ];

  return (
    <>
      {/* showing the top header bar */}
      <Header />
      {/* showing the Title*/}
      <PageTitle title={"usage du bien"} info={true} />
      {/* showing dynamically boxes*/}
      <Boxes
        boxes={boxes}
        project={project}
        setProject={setProject}
        step={step}
        setStep={setStep}
        next={next}
        field="goodUsage"
      />
      {/* showing the bottom footer bar */}
      <Footer
        percentage={percentage}
        previous={previous}
        next={project.goodUsage ? next : null}
      />
    </>
  );
};

export default GoodUsage;
