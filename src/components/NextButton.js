import React from "react";

const NextButton = () => {
  return (
    <button
      className="next-button"
      onClick={() => {
        alert("cliked");
      }}
    >
      Suivant
    </button>
  );
};

export default NextButton;
