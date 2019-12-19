import React, { useState, useEffect } from "react";
import AppCookies from "../components/Cookies";

const Test = props => {
  const [value, setValue] = useState("");

  useEffect(() => {
    //set the current page in cookies to open there if webbrowser is closed
    if (props.fieldName === "goodPrice") {
      setValue(AppCookies("choices", "objet").goodPrice);
    } else if (props.fieldName === "buildingCosts") {
      setValue(AppCookies("choices", "objet").buildingCosts);
    } else if (props.fieldName === "charges") {
      setValue(AppCookies("choices", "objet").charges);
    } else {
      setValue(AppCookies("choices", "objet").total);
    }
  }, []);

  //function to manage state changes and navigation
  const handleChange = value => {
    setValue(value);
    props.callback(value);
  };

  return (
    <div className="general-padding">
      <div className="line" style={{ backgroundColor: props.color }}>
        <span style={{ flex: "1" }}>{props.title}</span>
        <div style={{ display: "flex" }}>
          <i className="infos"></i>
          <input
            className={
              props.disabled
                ? "fields text-area-grey"
                : "fields text-area-orange"
            }
            disabled={props.disabled}
            type="number"
            onChange={event => {
              handleChange(Number(event.target.value));
            }}
            style={{ textAlign: "right" }}
            placeholder={0}
            value={value}
          />
          {" €"}
        </div>
      </div>
    </div>
  );
};

export default Test;
