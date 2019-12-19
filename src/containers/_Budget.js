import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Line from "../components/Line";
import Test from "../components/test";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Cookies from "js-cookie";
import AppCookies from "../components/Cookies";

const Budget = props => {
  const [goodPrice, setGoodPrice] = useState("");
  const [buildingCost, setBuildingCost] = useState("");
  const [charges, setCharges] = useState("");
  const [total, setTotal] = useState("");

  const getRate = (condition = props.userChoices.goodCondition) => {
    return condition === "neuf" ? 1.8 : 7.38;
  };

  const calculateCharges = (value, rate) => {
    return (value * rate) / 100;
  };

  const goodPriceCallback = value => {
    setGoodPrice(value);
    console.log(buildingCost);
    // setCharges(value + buildingCost);
    props.handleChoice({ goodPrice: value });
  };

  const buildingCostsCallback = value => {
    setBuildingCost(value);
    props.handleChoice({ buildingCosts: value });
  };

  const chargesCallback = value => {
    setCharges(value);
    props.handleChoice({ charges: value });
  };

  return (
    <>
      <Header />
      <PageTitle
        title={"définissons le montant de votre projet"}
        info={false}
      />

      <Test
        title="Montant estimé de votre acquisition *"
        disabled={false}
        callback={goodPriceCallback}
        fieldName="goodPrice"
        type="money"
        color="#F1F1F1"
      />
      <Test
        title="Montant estimé des travaux"
        disabled={false}
        callback={buildingCostsCallback}
        fieldName="buildingCosts"
        type="money"
        color="white"
      />
      <Test
        title="Frais de notaire *"
        disabled={false}
        callback={chargesCallback}
        fieldName="charges"
        type="money"
        color="#F1F1F1"
      />
      <Test
        title="Budget total estimé du projet"
        disabled={true}
        fieldName="total"
        type="money"
        color="white"
      />

      <Footer
        percentage={props.percentage}
        previous={props.previous}
        next={goodPrice && charges ? props.next : null}
      />
    </>
  );
};

export default Budget;
