import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Boxes from "../components/Boxes";
import Cookies from "js-cookie";
import AppCookies from "../components/Cookies";

const GoodUsage = props => {
  //Creating all needed react states
  const boxes = [
    "Résidence principale",
    "Résidence secondaire",
    "investissement locatif"
  ];
  const [goodUsage, setGoodUsage] = useState("");

  useEffect(() => {
    //set the current page in cookies to open there if webbrowser is closed
    Cookies.set("step", "/usage");
    setGoodUsage(AppCookies("choices", "objet").goodUsage);
  }, []);

  //function to manage state changes and navigation
  const handleChange = value => {
    setGoodUsage(value);
    props.handleChoice({ goodUsage: value });
    props.setStep(props.next);
  };

  return (
    <>
      <Header />
      <PageTitle title={"usage du bien"} info={true} />
      <Boxes
        boxes={boxes}
        data={goodUsage}
        setData={handleChange}
        next={props.next}
      />
      <Footer
        percentage={props.percentage}
        previous={props.previous}
        next={goodUsage ? props.next : null}
      />
    </>
  );
};

export default GoodUsage;
