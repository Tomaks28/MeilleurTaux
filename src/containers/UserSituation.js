import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Boxes from "../components/Boxes";

const UserSituation = ({
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
    "locataire",
    "propriétaire",
    "bénéficiare d'un logement de fonction",
    "hébergé à titre gratuit"
  ];

  return (
    <>
      <Header />
      <PageTitle title={"votre situation actuelle"} info={true} />
      <Boxes
        boxes={boxes}
        project={project}
        setProject={setProject}
        step={step}
        setStep={setStep}
        next={next}
        field="userSituation"
      />
      <Footer
        percentage={percentage}
        previous={previous}
        next={project.userSituation ? next : null}
      />
    </>
  );
};

export default UserSituation;
