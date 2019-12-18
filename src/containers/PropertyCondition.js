import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Boxes from "../components/Boxes";
import Cookies from "js-cookie";

const PropertyCondition = props => {
  const boxes = ["ancien", "neuf"];
  const [goodCondition, setGoodCondition] = useState(
    props.userChoices.propertyCondition
  );

  useEffect(
    props => {
      if (goodCondition) {
        // props.setUserChoices({ propertyCondition });
        Cookies.set("goodCondition", goodCondition);
      }
    },
    [goodCondition]
  );
  return (
    <>
      <Header />
      <PageTitle title={"état du bien"} info={true} />
      <Boxes
        boxes={boxes}
        data={goodCondition}
        setData={setGoodCondition}
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

export default PropertyCondition;
