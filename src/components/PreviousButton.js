import React from "react";
import { useHistory } from "react-router-dom";

const PreviousButton = props => {
  const history = useHistory();
  return (
    <button
      className="previous-button"
      onClick={() => {
        history.push(props.previous);
      }}
    >
      Précédent
    </button>
  );
};

export default PreviousButton;
