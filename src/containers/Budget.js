import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Line from "../components/Line";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Cookies from "js-cookie";

const Budget = props => {
  Cookies.set("step", "/budget");

  const lines = [
    {
      title: "Montant estimé de votre acquisition *",
      type: "money",
      valueToGet: "goodPrice"
    },
    {
      title: "Montant estimé des travaux",
      type: "money",
      valueToGet: "buildingCost"
    },
    { title: "Frais de notaire *", type: "money", valueToGet: "charges" },
    {
      title: "Budget total estimé du projet",
      type: "money",
      disabled: true,
      valueToGet: "total"
    }
  ];

  const [goodPrice, setGoodPrice] = useState(
    props.userChoices.budget.goodPrice
  );
  const [buildingCost, setBuildingCost] = useState(
    props.userChoices.budget.buildingCost
  );
  const [charges, setCharges] = useState(props.userChoices.budget.charges);
  const [total, setTotal] = useState(props.userChoices.budget.total);

  useEffect(() => {
    let rate = 0;
    if (props.userChoices.goodType === "neuf") {
      rate = 1.8;
    } else {
      rate = 7.38;
    }
    let result = 0;
    result = goodPrice + buildingCost;
    const taux = (result * rate) / 100;
    setCharges(taux);
    result += (result * rate) / 100;
    setTotal(result);
  }, [goodPrice, buildingCost, charges]);

  return (
    <>
      <Header />
      <PageTitle
        title={"définissons le montant de votre projet"}
        info={false}
      />

      {lines.map((line, index) => {
        return (
          <Line
            key={index}
            line={line}
            color={index % 2 ? "white" : "#F1F1F1"}
            states={{
              goodPrice,
              setGoodPrice,
              buildingCost,
              setBuildingCost,
              charges,
              setCharges,
              total,
              setTotal
            }}
          />
        );
      })}

      <Footer
        percentage={props.percentage}
        previous={props.previous}
        next={goodPrice && charges ? props.next : null}
      />
    </>
  );
};

export default Budget;
