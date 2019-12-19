import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Boxes from "../components/Boxes";
import Cookies from "js-cookie";

const PropertyUse = props => {
  Cookies.set("step", "/usage");

  const boxes = [
    "Résidence principale",
    "Résidence secondaire",
    "investissement locatif"
  ];
  const [goodUsage, setGoodUsage] = useState(
    props.userChoices.propertyCondition
  );

  useEffect(
    props => {
      if (goodUsage) {
        // props.setUserChoices({ propertyCondition });
        Cookies.set("goodUsage", goodUsage);
      }
    },
    [goodUsage]
  );

  return (
    <>
      <Header />
      <PageTitle title={"usage du bien"} info={true} />
      <Boxes
        boxes={boxes}
        data={goodUsage}
        setData={setGoodUsage}
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

export default PropertyUse;
