import React from "react";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import ProgressBar from "./ProgressBar";
import LegalNotice from "./LegalNotice";

const Footer = props => {
  return (
    <>
      <div className="general-padding footer">
        <PreviousButton previous={props.previous} />
        <ProgressBar percentage={props.percentage} />
        <NextButton next={props.next} />
      </div>
      <LegalNotice />
    </>
  );
};

export default Footer;
