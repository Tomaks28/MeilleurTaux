import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Boxes from "../components/Boxes";
import Cookies from "js-cookie";

const GoodType = props => {
  const boxes = ["maison", "appartement"];
  const [goodType, setGoodType] = useState(props.userChoices.goodType);

  useEffect(() => {
    if (goodType) {
      Cookies.set("goodType", goodType);
      // props.setUserChoices({ goodType: goodType });
      // props.setStep(props.next);
    }
  }, [goodType, setGoodType]);

  return (
    <>
      <Header />
      <PageTitle title={"type de bien"} info={true} />
      <Boxes
        boxes={boxes}
        data={goodType}
        setData={setGoodType}
        next={props.next}
      />
      <Footer
        percentage={props.percentage}
        previous={props.previous}
        next={goodType ? props.next : null}
      />
    </>
  );
};

export default GoodType;
