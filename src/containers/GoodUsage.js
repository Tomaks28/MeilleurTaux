import React, { useEffect, useState, useCallback } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Boxes from "../components/Boxes";
import Cookies from "js-cookie";

//declaring global variables
const cookieName = "goodUsage";

const GoodUsage = props => {
  //Creating all needed react states
  const boxes = [
    "Résidence principale",
    "Résidence secondaire",
    "investissement locatif"
  ];
  const [goodUsage, setGoodUsage] = useState("");

  //if exist, get the last value else create the cookies
  useEffect(() => {
    //set the current page in cookies to open there if webbrowser is closed
    Cookies.set("step", "/usage");
    const updateDatas = () => {
      let initState = "";
      if (Cookies.get(cookieName)) {
        initState = Cookies.get(cookieName);
      } else {
        Cookies.set(cookieName, "");
        initState = "";
      }
      setGoodUsage(initState);
    };
    updateDatas();
  }, []);

  //function to manage state changes and navigation
  const handleChange = useCallback(value => {
    setGoodUsage(value);
    Cookies.set(cookieName, value);
    props.setUserChoices({ goodType: value });
    props.setStep(props.next);
  });

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
