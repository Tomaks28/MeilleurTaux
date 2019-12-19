import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Line from "../components/Line";
import Cookies from "js-cookie";

const GoodLocation = props => {
  Cookies.set("step", "/goodlocation");

  const [goodLocation, setGoodLocation] = useState(
    props.userChoices.goodLocation
  );

  useEffect(() => {
    if (goodLocation) {
      Cookies.set("goodLocation", goodLocation);
      // props.setUserChoices({ goodLocation: goodLocation });
      // props.setStep(props.next);
    }
  }, [goodLocation, setGoodLocation]);

  const lines = [
    { title: "Dans quel pays se trouve votre projet ? *", type: "country" },
    { title: "Ville ou code postal ? *", type: "city" }
  ];
  const text =
    "La connaissance du code postal du bien permettra de calculer les frais de notaire selon les conditions en vigueur dans le département concerné. Si vous êtes en recherche de bien sur plusieurs communes, indiquez une commune ciblée.";

  return (
    <>
      <Header />
      <PageTitle title={"où se trouve le bien à financer ?"} info={false} />
      {lines.map((line, index) => {
        return (
          <Line
            key={index}
            data={goodLocation}
            setData={setGoodLocation}
            line={line}
            color={index % 2 ? "white" : "#F1F1F1"}
          />
        );
      })}
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
