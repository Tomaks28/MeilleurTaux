import React from "react";
import Logo from "../images/logo.jpg";

const Header = () => {
  return (
    <div className="general-padding header">
      <img src={Logo} alt="meilleur taux logo" />
      <p>Crédit immobilier : 5mn pour obtenir le meilleur taux</p>
    </div>
  );
};

export default Header;
