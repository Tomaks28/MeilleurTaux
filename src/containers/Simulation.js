import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import axios from "axios";

const Simulation = ({ serverURL }) => {
  const { id } = useParams();

  //Creation of React States
  const [isLoading, setIsLoading] = useState(true);
  const [simulation, setSimulation] = useState();

  useEffect(() => {
    const createData = simulation => {
      return (
        <div>
          <p>Tracking Number : {simulation.tracking}</p>
          <p>Type : {simulation.goodType}</p>
          <p>Condition : {simulation.goodCondition}</p>
          <p>Utilisation : {simulation.goodUsage}</p>
          <p>Situation : {simulation.userSituation}</p>
          <p>Ville : {simulation.city}</p>
          <p>E-mail : {simulation.email}</p>
          <p>Prix acquisition : {simulation.goodPrice}</p>
          <p>Prix travaux : {simulation.buildingCosts}</p>
          <p>Frais notaire : {simulation.charges}</p>
          <p>Prix total : {simulation.total}</p>
        </div>
      );
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(serverURL + `simulation?id=${id}`);
        setSimulation(createData(response.data));
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            paddingTop: "100px",
            display: "flex",
            flex: "1",
            justifyContent: "center"
          }}
        >
          <ReactLoading
            type="spinningBubbles"
            color="black"
            height={100}
            width={100}
          />
        </div>
      ) : (
        <div>{simulation}</div>
      )}
    </>
  );
};

export default Simulation;
