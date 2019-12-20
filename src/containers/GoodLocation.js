import React, { useState, useEffect } from "react";

//import of components used in this code
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";

//Import of axios to execute post request
import axios from "axios";

const GoodLocation = ({
  percentage,
  previous,
  next,
  step,
  setStep,
  project,
  setProject
}) => {
  //Creating all needed react states
  const [goodLocation, setGoodLocation] = useState("");
  const [cityList, setCityList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //useEffect used to update current page cookie by passing the current step to setStep function
    setStep("/location");
  });

  //function used to generate cities list below input field
  useEffect(() => {
    //generating the list of cities
    const generateCitiesList = cities => {
      //Set at empty the list array
      const citiesList = [];
      //set at true of isLoading state
      setIsLoading(true);
      //loop which generates all cities according to last typed value
      for (let i = 0; i < cities.length; i++) {
        citiesList.push(
          <option key={i}>{`${cities[i].city} (${cities[i].code})`}</option>
        );
      }
      //update of cities list state
      setCityList(citiesList);
      //set at false of isLoading state
      setIsLoading(false);
    };
    //function used to fetch data from API
    const fetchData = async () => {
      if (goodLocation.length >= 3) {
        const response = await axios(
          "https://vicopo.selfbuild.fr/cherche/" + goodLocation
        );
        generateCitiesList(response.data.cities);
      } else {
        setCityList([]);
      }
    };
    fetchData();
  }, [goodLocation]);

  return (
    <>
      {/* showing the top header bar */}
      <Header />
      {/* showing the Title*/}
      <PageTitle title={"où se trouve le bien à financer ?"} info={false} />
      {/* Beginning of country line */}
      <div className="general-padding">
        <div className="line" style={{ backgroundColor: "#F1F1F1" }}>
          <span style={{ flex: "1" }}>
            Dans quel pays se situe votre projet ? *
          </span>
          <div style={{ display: "flex" }}>
            <i className="infos"></i>
            <select className="fields">
              <option>FRANCE</option>
            </select>
          </div>
        </div>
      </div>
      {/* Beginning of city line */}
      <div className="general-padding">
        <div className="line" style={{ backgroundColor: "white" }}>
          <span style={{ flex: "1" }}>Ville ou code postal ? *</span>
          <div style={{ display: "flex" }}>
            <i className="infos"></i>
            <input
              //the field value is set by the last global state value (useful when loading page)
              value={project.goodLocation}
              className="fields"
              type="text"
              list="cities"
              onChange={event => {
                // On change event, we update global state
                setProject({ ...project, goodLocation: event.target.value });
                // Udpdate of the field state
                setGoodLocation(event.target.value);
              }}
            />
            {/* Loading list of cities according to field state value */}
            <datalist id="cities">
              {isLoading ? <option>Chargement...</option> : cityList}
            </datalist>
          </div>
        </div>
      </div>
      {/* Text to shown below city*/}
      <p
        className="general-padding"
        style={{ fontWeight: "bold", fontSize: "16px" }}
      >
        La connaissance du code postal du bien permettra de calculer les frais
        de notaire selon les conditions en vigueur dans le département concerné.
        Si vous êtes en recherche de bien sur plusieurs communes, indiquez une
        commune ciblée.
      </p>
      {/* showing the bottom footer bar */}
      <Footer
        percentage={percentage}
        previous={previous}
        next={project.goodLocation ? next : null}
      />
    </>
  );
};

export default GoodLocation;
