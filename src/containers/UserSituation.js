import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Boxes from "../components/Boxes";
import Cookies from "js-cookie";

const UserSituation = props => {
  Cookies.set("step", "/situation");

  const boxes = [
    "locataire",
    "propriétaire",
    "bénéficiare d'un logement de fonction",
    "hébergé à titre gratuit"
  ];

  const [userSituation, setUserSituation] = useState(
    props.userChoices.userSituation
  );

  useEffect(() => {
    if (userSituation) {
      Cookies.set("userSituation", userSituation);
      // props.setUserChoices({ userSituation: userSituatio });
      // props.setStep(props.next);
    }
  }, [userSituation, setUserSituation]);
  return (
    <>
      <Header />
      <PageTitle title={"votre situation actuelle"} info={true} />
      <Boxes
        boxes={boxes}
        data={userSituation}
        setData={setUserSituation}
        next={props.next}
      />
      <Footer
        percentage={props.percentage}
        previous={props.previous}
        next={userSituation ? props.next : null}
      />
    </>
  );
};

export default UserSituation;
