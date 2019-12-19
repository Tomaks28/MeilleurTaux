import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Line from "../components/Line";
import axios from "axios";
import Cookies from "js-cookie";
import AppCookies from "../components/Cookies";

const GoodLocation = props => {
  //Creating all needed react states
  const goodCountry = "FRANCE";
  const [goodLocation, setGoodLocation] = useState("");
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //set the current page in cookies to open there if webbrowser is closed
    Cookies.set("step", "/location");
    setGoodLocation(AppCookies("choices", "objet").goodLocation);
  }, []);

  //function to manage state changes and navigation
  const handleChange = value => {
    setIsLoading(true);
    // props.handleChoice({ goodLocation: value });
    const generateOptions = datas => {
      const options = [];
      datas.cities.map((city, index) => {
        options.push(
          <option key={index}>{`${city.city} (${city.code})`}</option>
        );
      });
      setList(options);
      setIsLoading(false);
    };
    const fetchData = async value => {
      props.handleChoice({ goodLocation: value });
      setGoodLocation(value);
      if (value.length >= 3) {
        const response = await axios(
          `https://vicopo.selfbuild.fr/cherche/${value}`
        );
        generateOptions(response.data);
      }
    };
    fetchData(value);
  };

  const text =
    "La connaissance du code postal du bien permettra de calculer les frais de notaire selon les conditions en vigueur dans le département concerné. Si vous êtes en recherche de bien sur plusieurs communes, indiquez une commune ciblée.";

  return (
    <>
      <Header />
      <PageTitle title={"où se trouve le bien à financer ?"} info={false} />
      <Line
        value={goodCountry}
        title="Dans quel pays se trouve votre projet ? *"
        color="#F1F1F1"
        type="country"
      />
      <Line
        value={goodLocation}
        callback={handleChange}
        title="Ville ou code postal ? *"
        color="white"
        type="city"
        isLoading={isLoading}
        list={list}
      />
      <p
        className="general-padding"
        style={{ fontWeight: "bold", fontSize: "16px" }}
      >
        {text}
      </p>
      <Footer
        percentage={props.percentage}
        previous={props.previous}
        next={goodLocation ? props.next : null}
      />
    </>
  );
};

export default GoodLocation;
