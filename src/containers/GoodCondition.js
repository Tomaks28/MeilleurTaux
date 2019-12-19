import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Boxes from "../components/Boxes";
import Cookies from "js-cookie";
import AppCookies from "../components/Cookies";

const GoodCondition = props => {
  //Creating all needed react states
  const boxes = ["ancien", "neuf"];
  const [goodCondition, setGoodCondition] = useState("");

  useEffect(() => {
    //set the current page in cookies to open there if webbrowser is closed
    Cookies.set("step", "/condition");
    setGoodCondition(AppCookies("choices", "objet").goodCondition);
  }, []);

  //function to manage state changes and navigation
  const handleChange = value => {
    setGoodCondition(value);
    props.handleChoice({ goodCondition: value });
    props.setStep(props.next);
  };

  return (
    <>
      <Header />
      <PageTitle title={"état du bien"} info={true} />
      <Boxes
        boxes={boxes}
        data={goodCondition}
        setData={handleChange}
        next={props.next}
      />
      <Footer
        percentage={props.percentage}
        previous={props.previous}
        next={goodCondition ? props.next : null}
      />
    </>
  );
};

export default GoodCondition;
