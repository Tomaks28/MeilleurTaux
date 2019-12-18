// ìmport react project
import React, { useState, useEffect } from "react";

//import react router to naviguate between pages
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

//import cookies
import Cookies from "js-cookie";

//import css stylizing files
import "./reset.css";
import "./App.css";

//import React containers
import GoodType from "./containers/GoodType";
import PropertyUse from "./containers/PropertyUse";
import PropertyCondition from "./containers/PropertyCondition";
import UserSituation from "./containers/UserSituation";
import GoodLocation from "./containers/GoodLocation";
import Budget from "./containers/Budget";
import Contact from "./containers/Contact";
import Finish from "./containers/Finish";

const App = () => {
  const [userChoices, setUserChoices] = useState({});

  useEffect(() => {
    console.log(userChoices);
  }, [userChoices]);

  // Getting the last user step from navigator cookies
  const step = Cookies.get("step");

  // const getRoutes = () => {
  //   const reactRoutes = [];
  //   const routes = [
  //     "/",
  //     "/condition",
  //     "/usage",
  //     "/situation",
  //     "/goodlocation",
  //     "/budget",
  //     "/contact",
  //     "/finish"
  //   ];

  //   const containers = [<GoodType />];
  //   routes.map((route, index) => {
  //     if (index === 0) {
  //       reactRoutes.push(<Route path={route}></Route>);
  //     }
  //   });
  // };

  return (
    <Router>
      <div>
        <nav>
          {/* Redirect user to the correct step, if not defined then got to the first step */}
          <Redirect to={step ? step : "/"} />
        </nav>
        <Switch>
          {/* STEP 8 : finish step */}
          <Route path="/finish">
            <Finish userChoices={userChoices} setUserChoices={setUserChoices} />
          </Route>
          {/* STEP 7 : user contacts */}
          <Route path="/contact">
            <Contact
              percentage={84}
              previous={"/budget"}
              next={"/finish"}
              userChoices={userChoices}
              setUserChoices={setUserChoices}
            />
          </Route>
          {/* STEP 6 : Budget */}
          <Route path="/budget">
            <Budget
              percentage={70}
              previous={"/goodlocation"}
              next={"/contact"}
              userChoices={userChoices}
              setUserChoices={setUserChoices}
            />
          </Route>
          {/* STEP 5 : Location */}
          <Route path="/goodlocation">
            <GoodLocation
              percentage={56}
              previous={"/situation"}
              next={"/budget"}
              userChoices={userChoices}
              setUserChoices={setUserChoices}
            />
          </Route>
          {/* STEP 4 : Situation */}
          <Route path="/situation">
            <UserSituation
              percentage={42}
              previous={"/usage"}
              next={"/goodlocation"}
              userChoices={userChoices}
              setUserChoices={setUserChoices}
            />
          </Route>
          {/* STEP 3 : Good usage*/}
          <Route path="/usage">
            <PropertyUse
              percentage={28}
              previous={"/condition"}
              next={"/situation"}
              userChoices={userChoices}
              setUserChoices={setUserChoices}
            />
          </Route>
          {/* STEP 2 : Good condition */}
          <Route path="/condition">
            <PropertyCondition
              percentage={14}
              previous={"/"}
              next={"/usage"}
              userChoices={userChoices}
              setUserChoices={setUserChoices}
            />
          </Route>
          {/* STEP 1 : Good type */}
          <Route path="/">
            <GoodType
              percentage={0}
              previous={"/"}
              next={"/condition"}
              userChoices={userChoices}
              setUserChoices={setUserChoices}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
