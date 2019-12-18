import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import Cookies from "js-cookie";

const Finish = props => {
  const [tracking, setTracking] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://meilleur-taux-by-tomaks.herokuapp.com/save",
          {
            goodType: Cookies.get("gootType"),
            goodCondition: Cookies.get("goodCondition"),
            goodUsage: Cookies.get("goodUsage"),
            userSituation: Cookies.get("userSituation"),
            city: Cookies.get("city"),
            mail: Cookies.get("mail"),
            acquisitionValue: Cookies.get("acquisitionValue"),
            buildingCosts: Cookies.get("buildingCosts"),
            charges: Cookies.get("charges"),
            totalAmount: Cookies.get("totalAmount")
          }
        );
        setTracking(response.data.tracking);
        Cookies.remove("gootType");
        Cookies.remove("goodCondition");
        Cookies.remove("goodUsage");
        Cookies.remove("userSituation");
        Cookies.remove("city");
        Cookies.remove("mail");
        Cookies.remove("acquisitionValue");
        Cookies.remove("buildingCosts");
        Cookies.remove("charges");
        Cookies.remove("totalAmount");
      } catch (err) {
        alert(err);
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
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
