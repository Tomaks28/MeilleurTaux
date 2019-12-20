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

//Creation of serveur URL
const serverURL = "https://meilleur-taux-by-tomaks.herokuapp.com/";

const App = () => {
  //Creation of React States
  const [step, setStep] = useState(Cookies.get("step") || "/");
  const [project, setProject] = useState(Cookies.getJSON("project") || {});

  //This function will be called on project state updates and it will be stored in nav Cookies
  useEffect(() => {
    Cookies.set("project", project);
  }, [project]);

  //This function will be called on step state updates and it will be stored in nav Cookies
  useEffect(() => {
    Cookies.set("step", step);
  }, [step]);

  return (
    <Router>
      <div>
        <nav>
          {/* Redirect user to the correct step, if not defined then got to the first step */}
          <Redirect to={step} />
        </nav>
        <Switch>
          {/* STEP 9 : BackOffice step */}
          <Route path="/backoffice">
            <BackOffice serverURL={serverURL} />
          </Route>
          {/* STEP 8 : finish step */}
          <Route path="/finish">
            <Finish
              step={step}
              setStep={setStep}
              project={project}
              setProject={setProject}
              serverURL={serverURL}
            />
          </Route>
          {/* STEP 7 : user contacts */}
          <Route path="/contact">
            <Contact
              percentage={84}
              previous="/budget"
              next="/finish"
              step={step}
              setStep={setStep}
              project={project}
              setProject={setProject}
            />
          </Route>
          {/* STEP 6 : Budget */}
          <Route path="/budget">
            <Budget
              percentage={70}
              previous={"/location"}
              next={"/contact"}
              step={step}
              setStep={setStep}
              project={project}
              setProject={setProject}
            />
          </Route>
          {/* STEP 5 : Location */}
          <Route path="/location">
            <GoodLocation
              percentage={56}
              previous={"/situation"}
              next={"/budget"}
              step={step}
              setStep={setStep}
              project={project}
              setProject={setProject}
            />
          </Route>
          {/* STEP 4 : Situation */}
          <Route path="/situation">
            <UserSituation
              percentage={42}
              previous={"/usage"}
              next={"/location"}
              step={step}
              setStep={setStep}
              project={project}
              setProject={setProject}
            />
          </Route>
          {/* STEP 3 : Good usage*/}
          <Route path="/usage">
            <GoodUsage
              percentage={28}
              previous={"/condition"}
              next={"/situation"}
              step={step}
              setStep={setStep}
              project={project}
              setProject={setProject}
            />
          </Route>
          {/* STEP 2 : Good condition */}
          <Route path="/condition">
            <GoodCondition
              percentage={14}
              previous={"/type"}
              next={"/usage"}
              step={step}
              setStep={setStep}
              project={project}
              setProject={setProject}
            />
          </Route>
          {/* STEP 1 : Good type */}
          <Route path="/">
            <GoodType
              percentage={0}
              previous="/type"
              next="/condition"
              step={step}
              setStep={setStep}
              project={project}
              setProject={setProject}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
