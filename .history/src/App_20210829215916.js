import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./screen/Home";
import "./App.css";
import ProductItem from "./components/ProductItem/ProductItem";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Home>
        <Switch>
          <Route path="/ProductItem">
            <ProductItem />
          </Route>
          <Route path="/" exact component={Home} />
        </Switch>
      </Home>
    </div>
  );
};

export default App;
