import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
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

  //function used to generate cities list above the input field
  useEffect(() => {
    const generateCitiesList = cities => {
      const citiesList = [];
      setIsLoading(true);
      for (let i = 0; i < cities.length; i++) {
        citiesList.push(
          <option key={i}>{`${cities[i].city} (${cities[i].code})`}</option>
        );
      }
      setCityList(citiesList);
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
      <Header />
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
              value={project.goodLocation}
              className="fields"
              type="text"
              list="cities"
              onChange={event => {
                setProject({ ...project, goodLocation: event.target.value });
                setGoodLocation(event.target.value);
              }}
            />
            <datalist id="cities">
              {isLoading ? <option>Chargement...</option> : cityList}
            </datalist>
          </div>
        </div>
      </div>
      <p
        className="general-padding"
        style={{ fontWeight: "bold", fontSize: "16px" }}
      >
        La connaissance du code postal du bien permettra de calculer les frais
        de notaire selon les conditions en vigueur dans le département concerné.
        Si vous êtes en recherche de bien sur plusieurs communes, indiquez une
        commune ciblée.
      </p>
      <Footer
        percentage={percentage}
        previous={previous}
        next={project.goodLocation ? next : null}
      />
    </>
  );
};

export default GoodLocation;
