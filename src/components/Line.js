import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Line = props => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState();

  const generateOptions = useCallback(datas => {
    const options = [];
    datas.cities.map((city, index) => {
      options.push(
        <option key={index}>{`${city.city} (${city.code})`}</option>
      );
    });
    setList(options);
    setIsLoading(false);
  });

  console.log(isLoading);

  useEffect(() => {
    const fetchData = async () => {
      if (search.length >= 3) {
        console.log("requete");
        const response = await axios(
          `https://vicopo.selfbuild.fr/cherche/${search}`
        );
        generateOptions(response.data);
      }
    };
    fetchData();
  }, [search]);

  return (
    <div className="general-padding">
      <div
        className="line"
        style={{ backgroundColor: props.color, paddingRight: "200px" }}
      >
        <span style={{ flex: "1" }}>{props.line.title}</span>
        <div>
          <i className="infos"></i>
          {props.line.type === "country" ? (
            <select className="fields">
              <option>FRANCE</option>
            </select>
          ) : props.line.type === "city" ? (
            <>
              <input
                className="fields"
                type="text"
                list="cities"
                onChange={event => {
                  setIsLoading(true);
                  setSearch(event.target.value);
                }}
              />
              <datalist id="cities">
                {isLoading ? <option>Chargement...</option> : list}
              </datalist>
            </>
          ) : props.line.type === "money" ? (
            <>
              <input
                className="fields"
                type="number"
                onChange={event => {
                  setSearch(event.target.value);
                }}
                style={{ textAlign: "right" }}
              />
              {" €"}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Line;
