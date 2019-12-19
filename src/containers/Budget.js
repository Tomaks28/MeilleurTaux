import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Cookies from "js-cookie";
import AppCookies from "../components/Cookies";

const Budget = props => {
  //creating all React States
  const [goodPrice, setGoodPrice] = useState(0);
  const [buildingCost, setBuildingCost] = useState(0);
  const [charges, setCharges] = useState(0);
  const [total, setTotal] = useState(0);

  //function which returns the rate to apply in function of goodCondition
  const getRate = (condition = props.userChoices.goodCondition) => {
    return condition === "neuf" ? 1.8 : 7.38;
  };

  //function which calculate rate value
  const calculateCharges = (value, rate) => {
    return (value * rate) / 100;
  };

  useEffect(() => {
    //get all current values from cookies
    Cookies.set("step", "/budget");
    if (AppCookies("choices", "objet").goodPrice !== undefined) {
      setGoodPrice(AppCookies("choices", "number").goodPrice);
    }
    if (AppCookies("choices", "objet").buildingCost !== undefined) {
      setBuildingCost(AppCookies("choices", "number").buildingCost);
    }
    if (AppCookies("choices", "objet").charges !== undefined) {
      setCharges(AppCookies("choices", "number").charges);
    }
    if (AppCookies("choices", "objet").total !== undefined) {
      setTotal(AppCookies("choices", "number").total);
    }
  }, []);

  useEffect(() => {
    //calculating all fields if goodPrice or buildingCosts change
    // console.log(goodPrice, buildingCost, charges, total);
    const chargesValue = calculateCharges(goodPrice + buildingCost, getRate());
    setCharges(chargesValue);
    setTotal(goodPrice + buildingCost + chargesValue);

    //Updating global states
    props.handleChoice({ goodPrice: goodPrice });

    // props.handleChoice({ goodPrice: goodPrice, buildingCost: buildingCost });
    // props.handleChoice({ goodPrice, buildingCost, charges, total });
    // props.handleChoice({ charges: charges });
    // props.handleChoice({ total: total });
  }, [goodPrice, setGoodPrice, buildingCost, setBuildingCost]);

  useEffect(() => {
    //calculating all fields if charges change
    setTotal(goodPrice + buildingCost + charges);
  }, [charges, setCharges]);

  return (
    <>
      <Header />
      <PageTitle
        title={"définissons le montant de votre projet"}
        info={false}
      />

      {/* ******************************************************************************** */}

      <div className="general-padding">
        <div className="line" style={{ backgroundColor: "#F1F1F1" }}>
          <span style={{ flex: "1" }}>
            Montant estimé de votre acquisition *
          </span>
          <div style={{ display: "flex" }}>
            <i className="infos"></i>
            <input
              className={
                false ? "fields text-area-grey" : "fields text-area-orange"
              }
              disabled={false}
              type="number"
              onChange={event => {
                setGoodPrice(Number(event.target.value));
              }}
              style={{ textAlign: "right" }}
              placeholder={0}
              value={goodPrice}
            />
            {" €"}
          </div>
        </div>
      </div>

      {/* ******************************************************************************** */}

      <div className="general-padding">
        <div className="line" style={{ backgroundColor: "white" }}>
          <span style={{ flex: "1" }}>Montant estimé des travaux</span>
          <div style={{ display: "flex" }}>
            <i className="infos"></i>
            <input
              className={
                false ? "fields text-area-grey" : "fields text-area-orange"
              }
              disabled={false}
              type="number"
              onChange={event => {
                setBuildingCost(Number(event.target.value));
              }}
              style={{ textAlign: "right" }}
              placeholder={0}
              value={buildingCost}
            />
            {" €"}
          </div>
        </div>
      </div>

      {/* ******************************************************************************** */}

      <div className="general-padding">
        <div className="line" style={{ backgroundColor: "#F1F1F1" }}>
          <span style={{ flex: "1" }}>Frais de notaire *</span>
          <div style={{ display: "flex" }}>
            <i className="infos"></i>
            <input
              className={
                false ? "fields text-area-grey" : "fields text-area-orange"
              }
              disabled={false}
              type="number"
              onChange={event => {
                setCharges(Number(event.target.value));
              }}
              style={{ textAlign: "right" }}
              placeholder={0}
              value={charges}
            />
            {" €"}
          </div>
        </div>
      </div>

      {/* ******************************************************************************** */}

      <div className="general-padding">
        <div className="line" style={{ backgroundColor: "white" }}>
          <span style={{ flex: "1" }}>Budget total estimé du projet</span>
          <div style={{ display: "flex" }}>
            <i className="infos"></i>
            <input
              className={
                true ? "fields text-area-grey" : "fields text-area-orange"
              }
              disabled={true}
              type="number"
              onChange={event => {
                setTotal(Number(event.target.value));
              }}
              style={{ textAlign: "right" }}
              placeholder={0}
              value={total}
            />
            {" €"}
          </div>
        </div>
      </div>

      {/* ******************************************************************************** */}

      <Footer
        percentage={props.percentage}
        previous={props.previous}
        next={goodPrice && charges ? props.next : null}
      />
    </>
  );
};

export default Budget;
