import React, { useState, useEffect, useCallback } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Boxes from "../components/Boxes";
import Cookies from "js-cookie";

//declaring global variables
const cookieName = "goodCondition";

const GoodCondition = props => {
  //Creating all needed react states
  const boxes = ["ancien", "neuf"];
  const [goodCondition, setGoodCondition] = useState("");

  //if exist, get the last value else create the cookies
  useEffect(() => {
    //set the current page in cookies to open there if webbrowser is closed
    Cookies.set("step", "/condition");
    const updateDatas = () => {
      let initState = "";
      if (Cookies.get(cookieName)) {
        initState = Cookies.get(cookieName);
      } else {
        Cookies.set(cookieName, "");
        initState = "";
      }
      setGoodCondition(initState);
    };
    updateDatas();
  }, []);

  //function to manage state changes and navigation
  const handleChange = useCallback(value => {
    setGoodCondition(value);
    Cookies.set(cookieName, value);
    props.setUserChoices({ goodCondition: value });
    props.setStep(props.next);
  });

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
