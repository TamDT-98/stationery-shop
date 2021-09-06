import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./screen/Home";
import "./App.css";
import ProductItem from "./components/DetailProductItem/DetailProductItem";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/ProductItem">
          <ProductItem />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
