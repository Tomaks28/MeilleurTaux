import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Boxes from "../components/Boxes";

const GoodType = props => {
  const boxes = ["maison", "appartement"];
  const [goodType, setGoodType] = useState(props.userChoices.goodType);

  useEffect(() => {
    if (goodType) {
      props.setUserChoices({ goodType: goodType });
    }
  }, [goodType]);

  return (
    <>
      <Header />
      <PageTitle title={"type de bien"} info={true} />
      <Boxes boxes={boxes} data={goodType} setData={setGoodType} />
      <Footer
        percentage={props.percentage}
        previous={props.previous}
        next={goodType ? props.next : null}
      />
    </>
  );
};

export default GoodType;
