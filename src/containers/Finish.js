import React, { useState, useEffect } from "react";

//import of components used in this code
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";

import Cookies from "js-cookie";

//Import of axios to execute post request
import axios from "axios";

const Finish = ({ project, serverURL }) => {
  //Creating all needed react states
  const [tracking, setTracking] = useState("");

  // useEffect used to send post request to server and get back tracking number and deleting all cookies
  useEffect(() => {
    const fetchData = async () => {
      if (Object.keys(project).length >= 10) {
        try {
          const response = await axios.post(serverURL + "save", {
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
          setTracking(response.data.tracking);
          Cookies.remove("project");
          Cookies.remove("step");
        } catch (err) {
          alert(err);
          console.log(err);
        }
      }
    };
    fetchData();
  }, []);

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
