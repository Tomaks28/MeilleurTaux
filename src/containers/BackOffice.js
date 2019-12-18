import React, { useState, useEffect } from "react";
import axios from "axios";

const BackOffice = () => {
  //Creation of React States
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [password, setPassword] = useState("");
  const [simulations, setSimulations] = useState([]);

  //Function to build array of Meilleur Taux simulation. Data are fetched by DB hosted on Heroku/mlab
  const simulationsLines = simulations => {
    //creating an empty array to store all simulation lines
    const tabSimulation = [];
    //for each data fetched, we build html element and push them in tabSimulation
    simulations.map((simulation, index) => {
      tabSimulation.push(
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: index % 2 ? "white" : "#F1F1F1"
          }}
        >
          <div
            style={{
              display: "flex",
              flex: "1",
              justifyContent: "space-between",
              fontSize: "20px"
            }}
            onClick={() => {
              alert(JSON.stringify(simulation));
            }}
          >
            <span>code postal : {simulation.city}</span>
            <span>E-mail : {simulation.mail}</span>
            <span>Type du bien : {simulation.goodType}</span>
            <span>Etat du bien : {simulation.goodCondition}</span>
            <span>Montant total : {simulation.totalAmount}</span>
          </div>
          <span
            style={{ marginLeft: "20px" }}
            // On click on cross, we delete the corresponding simulation in DB by id, then we actualize loading state and the useEffect can occurs
            onClick={async () => {
              try {
                setIsLoading(true);
                const response = await axios.post(
                  "https://meilleur-taux-by-tomaks.herokuapp.com/delete",
                  { id: simulation._id }
                );
                // setSimulations(simulationsLines(response.data));
                setIsLoading(false);
              } catch (err) {
                console.log(err);
              }
            }}
          >
            X
          </span>
        </div>
      );
    });
    return tabSimulation;
  };

  //useEffect called when isLoading is changed at false and at the page loading. We get all datas in DB.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://meilleur-taux-by-tomaks.herokuapp.com/backoffice"
        );
        setSimulations(simulationsLines(response.data));
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [isLoading === false]);

  //Use Effect to manage user typing the password. if password is correct we switch in logged mode and we can manage simulations administration
  useEffect(() => {
    if (password === "tothemoon") {
      setIsLogged(true);
    }
  }, [password]);

  return (
    <>
      {isLogged ? (
        isLoading ? (
          <p>Chargement en cours...</p>
        ) : (
          <div>{simulations}</div>
        )
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "100px"
          }}
        >
          <input
            type="password"
            style={{
              height: "20px",
              width: "300px"
            }}
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
        </div>
      )}
    </>
  );
};

export default BackOffice;
