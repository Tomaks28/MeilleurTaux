import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Boxes from "../components/Boxes";
import Cookies from "js-cookie";
import AppCookies from "../components/Cookies";

const UserSituation = props => {
  //Creating all needed react states
  const boxes = [
    "locataire",
    "propriétaire",
    "bénéficiare d'un logement de fonction",
    "hébergé à titre gratuit"
  ];
  const [userSituation, setUserSituation] = useState("");

  useEffect(() => {
    //set the current page in cookies to open there if webbrowser is closed
    Cookies.set("step", "/situation");
    setUserSituation(AppCookies("choices", "objet").userSituation);
  }, []);

  //function to manage state changes and navigation
  const handleChange = value => {
    setUserSituation(value);
    props.handleChoice({ userSituation: value });
    props.setStep(props.next);
  };
  return (
    <>
      <Header />
      <PageTitle title={"votre situation actuelle"} info={true} />
      <Boxes
        boxes={boxes}
        data={userSituation}
        setData={handleChange}
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
