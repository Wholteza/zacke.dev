import React from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import "./App.scss";
import Contact from "./components/contact";

function App() {
  return (
    <div className="container">
      <Route path="/" exact>
        <Contact />
      </Route>
      <Route path="/test" exact>
        <Link to="/">Go back</Link>
      </Route>
    </div>
  );
}

export default App;
