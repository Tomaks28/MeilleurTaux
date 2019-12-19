import React, { useState, useEffect } from "react";
import axios from "axios";
import AppCookies from "../components/Cookies";
import picto from "../images/picto-confidentiel.png";

const Line = props => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState();

  useEffect(() => {
    const generateOptions = datas => {
      const options = [];
      datas.cities.map((city, index) => {
        options.push(
          <option key={index}>{`${city.city} (${city.code})`}</option>
        );
      });
      setList(options);
      setIsLoading(false);
      // props.setData(AppCookies("choices", "objet").goodLocation);

      props.setData(search);
    };
    const fetchData = async () => {
      if (search.length >= 3) {
        const response = await axios(
          `https://vicopo.selfbuild.fr/cherche/${search}`
        );
        generateOptions(response.data);
      }
    };
    fetchData();
  }, [search, setSearch]);

  const handleFieldsChanges = value => {
    if (props.line.valueToGet === "goodPrice") props.states.setGoodPrice(value);
    else if (props.line.valueToGet === "buildingCost") {
      props.states.setBuildingCost(value);
    } else if (props.line.valueToGet === "charges") {
      props.states.setCharges(value);
    } else if (props.line.valueToGet === "total") {
      props.states.setTotal(value);
    } else if (props.line.valueToGet === "email") {
      props.states.setEmail(value);
    }
  };

  return (
    <div className="general-padding">
      <div className="line" style={{ backgroundColor: props.color }}>
        <span style={{ flex: "1" }}>{props.line.title}</span>
        <div style={{ display: "flex" }}>
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
                  props.handleEmailChange(event.target.value);
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
                className={
                  props.line.disabled
                    ? "fields text-area-grey"
                    : "fields text-area-orange"
                }
                disabled={props.line.disabled}
                type="number"
                onChange={event => {
                  handleFieldsChanges(Number(event.target.value));
                }}
                style={{ textAlign: "right" }}
                value={
                  props.line.valueToGet === "goodPrice"
                    ? props.states.goodPrice
                    : props.line.valueToGet === "buildingCost"
                    ? props.states.buildingCost
                    : props.line.valueToGet === "charges"
                    ? props.states.charges
                    : props.line.valueToGet === "total"
                    ? props.states.total
                    : null
                }
              />
              {" €"}
            </>
          ) : props.line.type === "email" ? (
            <div className="email">
              <input
                className={
                  props.line.disabled
                    ? "fields text-area-grey"
                    : "fields text-area-orange"
                }
                disabled={props.line.disabled}
                type="email"
                onChange={event => {
                  handleFieldsChanges(event.target.value);
                }}
                style={{ textAlign: "left" }}
                value={
                  props.line.valueToGet === "goodPrice"
                    ? props.states.goodPrice
                    : props.line.valueToGet === "buildingCost"
                    ? props.states.buildingCost
                    : props.line.valueToGet === "charges"
                    ? props.states.charges
                    : props.line.valueToGet === "total"
                    ? props.states.total
                    : props.line.valueToGet === "email"
                    ? props.states.email
                    : null
                }
              />
              <img className="picto" src={picto} alt="confidential picto" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Line;
