// ìmport react project
import React, { useState } from "react";
//import react router to naviguate between pages
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import cookies
import Cookies from "js-cookie";
//import css stylizing files
import "../src/reset.css";
import "./App.css";
//import React components
import GoodType from "./containers/GoodType";
import PropertyUse from "./containers/PropertyUse";
import PropertyCondition from "./containers/PropertyCondition";
import UserSituation from "./containers/UserSituation";
import GoodLocation from "./containers/GoodLocation";
import Amount from "./containers/Amount";
import Contact from "./containers/Contact";
import Finish from "./containers/Finish";

const App = () => {
  const [userChoices, setUserChoices] = useState(Cookies.get("userChoices"));
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Good type</Link>
            </li>
            <li>
              <Link to="/usage">About</Link>
            </li>
            <li>
              <Link to="/condition">Users</Link>
            </li>
          </ul>
        </nav> */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* STEP 8 : terminé */}
          <Route path="/finish">
            <Finish />
          </Route>
          {/* STEP 7 : coordonnées */}
          <Route path="/contact">
            <Contact percentage={93} previous={"/amount"} next={"/finish"} />
          </Route>
          {/* STEP 6 : Montant */}
          <Route path="/amount">
            <Amount
              percentage={29}
              previous={"/goodlocation"}
              next={"/contact"}
            />
          </Route>
          {/* STEP 5 : Location */}
          <Route path="/goodlocation">
            <GoodLocation
              percentage={26}
              previous={"/situation"}
              next={"/amount"}
            />
          </Route>
          {/* STEP 4 : Situation */}
          <Route path="/situation">
            <UserSituation
              percentage={16}
              previous={"/usage"}
              next={"/goodlocation"}
            />
          </Route>
          {/* STEP 3 : Usage du bien */}
          <Route path="/usage">
            <PropertyUse
              percentage={11}
              previous={"/condition"}
              next={"/situation"}
            />
          </Route>
          {/* STEP 2 : Etat du bien */}
          <Route path="/condition">
            <PropertyCondition percentage={8} previous={"/"} next={"/usage"} />
          </Route>
          {/* STEP 1 : Type de bien */}
          <Route path="/">
            <GoodType percentage={5} previous={"/"} next={"/condition"} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
