import React from "react";
import { useHistory } from "react-router-dom";

const NextButton = props => {
  const history = useHistory();
  return (
    <button
      className="next-button"
      onClick={() => {
        history.push(props.next);
      }}
    >
      Suivant
    </button>
  );
};

export default NextButton;
