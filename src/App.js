// ìmport react project
import React, { useState } from "react";

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
import GoodUsage from "./containers/GoodUsage";
import GoodCondition from "./containers/GoodCondition";
import UserSituation from "./containers/UserSituation";
import GoodLocation from "./containers/GoodLocation";
import Budget from "./containers/Budget";
import Contact from "./containers/Contact";
import Finish from "./containers/Finish";
import BackOffice from "./containers/BackOffice";

let initState = {};
if (Cookies.get("choices")) {
  initState = JSON.parse(Cookies.get("choices"));
}

let currentStep = "/";
if (Cookies.get("step")) {
  currentStep = Cookies.get("step");
}

const App = () => {
  const [userChoices, setUserChoices] = useState(initState);
  const [step, setStep] = useState(currentStep);

  const addChoice = obj => {
    // create copy of userChoices
    const newChoices = { ...userChoices };
    //Get the first element of object
    const key = Object.keys(obj).shift();
    //replacing/creating the element by the new one
    newChoices[key] = obj[key];
    //Copying the new value in states
    setUserChoices(newChoices);
    Cookies.set("choices", JSON.stringify(newChoices));
  };

  // Getting the last user step from navigator cookies

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
          {/* STEP 9 : BackOffice step */}
          <Route path="/backoffice">
            <BackOffice />
          </Route>
          {/* STEP 8 : finish step */}
          <Route path="/finish">
            <Finish userChoices={userChoices} setUserChoices={addChoice} />
          </Route>
          {/* STEP 7 : user contacts */}
          <Route path="/contact">
            <Contact
              percentage={84}
              previous={"/budget"}
              next={"/finish"}
              userChoices={userChoices}
              setUserChoices={addChoice}
            />
          </Route>
          {/* STEP 6 : Budget */}
          <Route path="/budget">
            <Budget
              percentage={70}
              previous={"/goodlocation"}
              next={"/contact"}
              userChoices={userChoices}
              setUserChoices={addChoice}
            />
          </Route>
          {/* STEP 5 : Location */}
          <Route path="/goodlocation">
            <GoodLocation
              percentage={56}
              previous={"/situation"}
              next={"/budget"}
              userChoices={userChoices}
              setUserChoices={addChoice}
            />
          </Route>
          {/* STEP 4 : Situation */}
          <Route path="/situation">
            <UserSituation
              percentage={42}
              previous={"/usage"}
              next={"/goodlocation"}
              userChoices={userChoices}
              setUserChoices={addChoice}
              setStep={setStep}
            />
          </Route>
          {/* STEP 3 : Good usage*/}
          <Route path="/usage">
            <GoodUsage
              percentage={28}
              previous={"/condition"}
              next={"/situation"}
              userChoices={userChoices}
              setUserChoices={addChoice}
              setStep={setStep}
            />
          </Route>
          {/* STEP 2 : Good condition */}
          <Route path="/condition">
            <GoodCondition
              percentage={14}
              previous={"/"}
              next={"/usage"}
              userChoices={userChoices}
              setUserChoices={addChoice}
              setStep={setStep}
            />
          </Route>
          {/* STEP 1 : Good type */}
          <Route path="/">
            <GoodType
              percentage={0}
              previous={"/"}
              next={"/condition"}
              userChoices={userChoices}
              setUserChoices={addChoice}
              setStep={setStep}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
