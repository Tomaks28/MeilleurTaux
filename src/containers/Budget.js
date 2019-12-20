import React, { useEffect } from "react";

//import of components used in this code
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";

const Budget = ({
  percentage,
  previous,
  next,
  step,
  setStep,
  project,
  setProject
}) => {
  useEffect(() => {
    //useEffect used to update current page cookie
    setStep("/budget");
  });

  //function which returns the rate to apply in function of goodCondition
  const getRate = (condition = project.goodCondition) => {
    return condition === "neuf" ? 1.8 : 7.38;
  };

  //function which calculate rate value
  const calculateCharges = (value, rate) => {
    return (value * rate) / 100;
  };

  //calculating all fields if goodPrice changed
  const handleAcquisition = value => {
    //calculating charges
    const chargesValue = calculateCharges(
      value + project.buildingCosts,
      getRate()
    );
    //setting the global state
    setProject({
      ...project,
      goodPrice: Number(value),
      buildingCosts: Number(project.handleBuildingCosts) || 0,
      charges: Number(chargesValue) || 0,
      total: Number(value + project.buildingCosts + chargesValue) || 0
    });
  };

  //calculating all fields if building costs changed
  const handleBuildingCosts = value => {
    //calculating charges
    const chargesValue = calculateCharges(value + project.goodPrice, getRate());
    //setting the global state
    setProject({
      ...project,
      goodPrice: Number(project.goodPrice) || 0,
      buildingCosts: Number(value),
      charges: Number(chargesValue) || 0,
      total: Number(value + project.goodPrice + chargesValue) || 0
    });
  };

  //updating of charges state if charges changes only
  const handleCharges = value => {
    //setting the global state
    setProject({
      ...project,
      charges: Number(value),
      total: Number(project.goodPrice + project.buildingCosts + value) || 0
    });
  };

  return (
    <>
      {/* showing the top header bar */}
      <Header />
      {/* showing the Title*/}
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
                handleAcquisition(Number(event.target.value));
              }}
              style={{ textAlign: "right" }}
              placeholder={0}
              value={Number(project.goodPrice) || 0}
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
                handleBuildingCosts(Number(event.target.value));
              }}
              style={{ textAlign: "right" }}
              placeholder={0}
              value={Number(project.buildingCosts) || 0}
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
                handleCharges(Number(event.target.value));
              }}
              style={{ textAlign: "right" }}
              placeholder={0}
              value={Number(project.charges) || 0}
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
              onChange={event => {}}
              style={{ textAlign: "right" }}
              placeholder={0}
              value={Number(project.total) || 0}
            />
            {" €"}
          </div>
        </div>
      </div>

      {/* ******************************************************************************** */}

      {/* showing the bottom footer bar */}
      <Footer
        percentage={percentage}
        previous={previous}
        next={project.goodPrice && project.charges ? next : null}
      />
    </>
  );
};

export default Budget;
