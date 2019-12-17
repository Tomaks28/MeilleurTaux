import React from "react";

const PreviousButton = () => {
  return (
    <button
      className="previous-button"
      onClick={() => {
        alert("cliked");
      }}
    >
      Précédent
    </button>
  );
};

export default PreviousButton;
