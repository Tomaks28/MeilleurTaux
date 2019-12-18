import React from "react";
import { useHistory } from "react-router-dom";

const NextButton = props => {
  const history = useHistory();
  return (
    <button
      className="next-button"
      onClick={() => {
        props.next
          ? history.push(props.next)
          : alert("Veuillez remplir tous les champs");
      }}
    >
      Suivant
    </button>
  );
};

export default NextButton;
