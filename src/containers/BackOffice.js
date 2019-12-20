import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import axios from "axios";

const BackOffice = ({ serverURL }) => {
  //Creation of React States
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [password, setPassword] = useState("");
  const [simulations, setSimulations] = useState([]);

  //useEffect called when isLoading is changed at false and at the page loading. We get all datas in DB.
  useEffect(
    serverURL => {
      //Function to build array of Meilleur Taux simulation. Data are fetched by DB hosted on Heroku/mlab
      const simulationsLines = simulations => {
        //creating an empty array to store all simulation lines
        const tabSimulation = [];
        //for each data fetched, we build html element and push them in tabSimulation
        for (let index = 0; index < simulations.length; index++) {
          const simulation = simulations[index];
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
                    await axios.post(serverURL + "simulation/delete", {
                      id: simulation._id
                    });
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
        }
        return tabSimulation;
      };
      const fetchData = async () => {
        try {
          // sending post request to server
          const response = await axios.get(serverURL + "backoffice");
          // setting fetched data in state
          setSimulations(simulationsLines(response.data));
          // setting isLoading state to false and show results
          setIsLoading(false);
        } catch (err) {
          alert(err);
          console.log(err);
        }
      };
      fetchData();
    },
    [isLoading]
  );

  // function called when onSubmit button is clicked
  const handleSubmit = event => {
    // to avoid navifator to actualize page
    event.preventDefault();
    //check if password is correct then log in user
    if (password === "tothemoon") {
      setIsLogged(true);
    }
  };

  // function called when usr update password field
  const handlePasswordChange = event => {
    const value = event.target.value;
    setPassword(value);
  };

  return (
    <>
      {isLogged ? (
        isLoading ? (
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
          <div>{simulations}</div>
        )
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "100px"
          }}
        >
          <h1>Welcome to Back-Office</h1>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", alignItems: "center" }}
          >
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              style={{
                height: "30px",
                width: "300px"
              }}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
    </>
  );
};

export default BackOffice;
