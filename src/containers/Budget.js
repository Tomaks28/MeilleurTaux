import React from "react";
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
  //function which returns the rate to apply in function of goodCondition
  const getRate = (condition = project.goodCondition) => {
    return condition === "neuf" ? 1.8 : 7.38;
  };

  //function which calculate rate value
  const calculateCharges = (value, rate) => {
    return (value * rate) / 100;
  };

  const handleAcquisition = value => {
    //calculating all fields if goodPrice changed
    console.log(Number(project.buildingCosts));
    const chargesValue = calculateCharges(
      value + project.buildingCosts,
      getRate()
    );
    setProject({
      ...project,
      goodPrice: Number(value),
      buildingCosts: Number(project.handleBuildingCosts) || 0,
      charges: Number(chargesValue) || 0,
      total: Number(value + project.buildingCosts + chargesValue) || 0
    });
  };

  const handleBuildingCosts = value => {
    //calculating all fields if goodPrice changed
    const chargesValue = calculateCharges(value + project.goodPrice, getRate());
    setProject({
      ...project,
      goodPrice: Number(project.goodPrice) || 0,
      buildingCosts: Number(value),
      charges: Number(chargesValue) || 0,
      total: Number(value + project.goodPrice + chargesValue) || 0
    });
  };

  const handleCharges = value => {
    setProject({
      ...project,
      charges: Number(value),
      total: Number(project.goodPrice + project.buildingCosts + value) || 0
    });
  };

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

      <Footer
        percentage={percentage}
        previous={previous}
        next={project.goodPrice && project.charges ? next : null}
      />
    </>
  );
};

export default Budget;
