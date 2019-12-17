import React from "react";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import ProgressBar from "./ProgressBar";
import LegalNotice from "./LegalNotice";

const Footer = () => {
  return (
    <>
      <div className="general-padding footer">
        <PreviousButton />
        <ProgressBar percentage={24} />
        <NextButton />
      </div>
      <LegalNotice />
    </>
  );
};

export default Footer;
