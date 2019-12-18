import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../images/logo.jpg";

const Header = () => {
  const history = useHistory();
  return (
    <div className="general-padding header">
      <img
        src={Logo}
        alt="meilleur taux logo"
        onClick={() => {
          history.push("/backoffice");
        }}
      />
      <p>Crédit immobilier : 5mn pour obtenir le meilleur taux</p>
    </div>
  );
};

export default Header;
