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
import GoodCondition from "./containers/GoodCondition";
import GoodUsage from "./containers/GoodUsage";
import UserSituation from "./containers/UserSituation";

import GoodLocation from "./containers/GoodLocation";
import Budget from "./containers/Budget";
import Contact from "./containers/Contact";
import Finish from "./containers/Finish";
import BackOffice from "./containers/BackOffice";
import AppCookies from "./components/Cookies";

const App = () => {
  const [userChoices, setUserChoices] = useState({});
  const [step, setStep] = useState("");

  useEffect(() => {
    setUserChoices(AppCookies("choices", "objet"));
    setStep(AppCookies("step", "string"));
  }, []);

  const addChoice = obj => {
    // create copy of userChoices
    const newChoices = { ...userChoices };
    // //Get the first element of object
    // const key = Object.keys(obj).shift();
    Object.keys(obj).map((key, index) => {
      // console.log(key);
      // console.log(obj[key]);

      //replacing/creating the element by the new one
      newChoices[key] = obj[key];
    });
    //Copying the new value in states
    setUserChoices(newChoices);
    console.log(newChoices);
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
            <Finish userChoices={userChoices} handleChoice={addChoice} />
          </Route>
          {/* STEP 7 : user contacts */}
          <Route path="/contact">
            <Contact
              percentage={84}
              previous={"/budget"}
              next={"/finish"}
              userChoices={userChoices}
              handleChoice={addChoice}
            />
          </Route>
          {/* STEP 6 : Budget */}
          <Route path="/budget">
            <Budget
              percentage={70}
              previous={"/location"}
              next={"/contact"}
              userChoices={userChoices}
              handleChoice={addChoice}
            />
          </Route>
          {/* STEP 5 : Location */}
          <Route path="/location">
            <GoodLocation
              percentage={56}
              previous={"/situation"}
              next={"/budget"}
              userChoices={userChoices}
              handleChoice={addChoice}
            />
          </Route>
          {/* STEP 4 : Situation */}
          <Route path="/situation">
            <UserSituation
              percentage={42}
              previous={"/usage"}
              next={"/location"}
              userChoices={userChoices}
              handleChoice={addChoice}
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
              handleChoice={addChoice}
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
              handleChoice={addChoice}
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
              handleChoice={addChoice}
              setStep={setStep}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
