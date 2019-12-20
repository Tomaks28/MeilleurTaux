import React from "react";

//import of components used in this code
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
  //Creating dynamically boxes to show on screen
  const boxes = [
    "locataire",
    "propriétaire",
    "bénéficiare d'un logement de fonction",
    "hébergé à titre gratuit"
  ];

  return (
    <>
      {/* showing the top header bar */}
      <Header />
      {/* showing the Title*/}
      <PageTitle title={"votre situation actuelle"} info={true} />
      {/* showing dynamically boxes*/}
      <Boxes
        boxes={boxes}
        project={project}
        setProject={setProject}
        step={step}
        setStep={setStep}
        next={next}
        field="userSituation"
      />
      {/* showing the bottom footer bar */}
      <Footer
        percentage={percentage}
        previous={previous}
        next={project.userSituation ? next : null}
      />
    </>
  );
};

export default UserSituation;
