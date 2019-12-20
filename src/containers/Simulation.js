import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import axios from "axios";

const Simulation = ({ serverURL }) => {
  const { id } = useParams();

  //Creation of React States
  const [isLoading, setIsLoading] = useState(true);
  const [simulation, setSimulation] = useState();

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
        <div>{id}</div>
      )}
    </>
  );
};

export default Simulation;
