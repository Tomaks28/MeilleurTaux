// ìmport react project
import React from "react";
//import react router to naviguate between pages
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import css stylizing files
import "../src/reset.css";
import "./App.css";
//import React components
import GoodType from "./containers/GoodType";

const App = () => {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Good type</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <GoodType />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

function About() {
  return <h2>About</h2>;
}
function Users() {
  return <h2>Users</h2>;
}

export default App;
