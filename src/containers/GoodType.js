import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Boxes from "../components/Boxes";
import Cookies from "js-cookie";
import AppCookies from "../components/Cookies";

const GoodType = props => {
  //Creating all needed react states
  const boxes = ["maison", "appartement"];
  const [goodType, setGoodType] = useState("");

  useEffect(() => {
    //set the current page in cookies to open there if webbrowser is closed
    Cookies.set("step", "/");
    setGoodType(AppCookies("choices", "objet").goodType);
  }, []);

  //function to manage state changes and navigation
  const handleChange = value => {
    setGoodType(value);
    props.handleChoice({ goodType: value });
    props.setStep(props.next);
  };

  return (
    <>
      <Header />
      <PageTitle title={"type de bien"} info={true} />
      <Boxes
        boxes={boxes}
        data={goodType}
        setData={handleChange}
        next={props.next}
      />
      <Footer
        percentage={props.percentage}
        previous={props.previous}
        next={goodType ? props.next : null}
      />
    </>
  );
};

export default GoodType;
