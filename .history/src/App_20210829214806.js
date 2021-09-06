import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./screen/Home";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
      </Switch>
    </div>
  );
};

export default App;
