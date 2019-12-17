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
          <Route path="/usage">
            <PropertyUse
              percentage={11}
              previous={"/condition"}
              next={"/situation"}
            />
          </Route>
          <Route path="/condition">
            <PropertyCondition percentage={8} previous={"/"} next={"/usage"} />
          </Route>
          <Route path="/">
            <GoodType percentage={5} previous={"/"} next={"/condition"} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
