import React, { useState, useEffect } from "react";

//import of components used in this code
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";

import Cookies from "js-cookie";

//Import of axios to execute post request
import axios from "axios";

const Finish = ({ project, setProject, serverURL }) => {
  console.log(serverURL + "save");

  //Creating all needed react states
  const [tracking, setTracking] = useState("");

  // useEffect used to send post request to server and get back tracking number and deleting all cookies
  useEffect(
    project,
    serverURL => {
      const fetchData = async () => {
        // check if all datas are present
        if (
          project.goodType &&
          project.goodCondition &&
          project.goodUsage &&
          project.userSituation &&
          project.goodLocation &&
          project.email &&
          project.goodPrice !== undefined &&
          project.buildingCosts !== undefined &&
          project.charges !== undefined &&
          project.total !== undefined
        ) {
          try {
            // sending post request to server with all data
            const response = await axios.post(serverURL + "simulation/save", {
              goodType: project.goodType,
              goodCondition: project.goodCondition,
              goodUsage: project.goodUsage,
              userSituation: project.userSituation,
              city: project.goodLocation,
              email: project.email,
              goodPrice: project.goodPrice,
              buildingCosts: project.buildingCosts,
              charges: project.charges,
              total: project.total
            });
            // state to show the tracking number
            setTracking(response.data.tracking);
            // removing of all cookies
            Cookies.remove("project");
            Cookies.remove("step");
            // reseting project datas
            setProject({});
          } catch (err) {
            alert(err.message);
            console.log(err);
          }
        } else {
          alert("erreur");
        }
      };
      fetchData();
    },
    []
  );

  return (
    <>
      {/* showing the top header bar */}
      <Header />
      {/* showing the Title*/}
      <PageTitle title={"et voila, le formulaire est terminé !"} info={false} />
      {tracking ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              paddingLeft: "200px",
              fontSize: "20px",
              fontWeight: "500"
            }}
          >
            Votre numéro de dossier est le :
          </span>
          <span
            style={{ fontWeight: "bold", fontSize: "20px", marginLeft: "5px" }}
          >
            {tracking}
          </span>
        </div>
      ) : null}
      <p
        className="general-padding"
        style={{
          textDecoration: "underline",
          fontSize: "15px",
          marginTop: "20px",
          cursor: "pointer"
        }}
      >
        Mentions légales
      </p>
    </>
  );
};

export default Finish;
