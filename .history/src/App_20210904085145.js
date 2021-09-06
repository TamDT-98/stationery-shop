import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./screen/Home";
import "./App.css";
import ProductItem from "./components/DetailProductItem/DetailProductItem";
import GoodPriceToday from "./components/GoodPriceToday/GoodPriceToday";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        <Route path="/ProductItem">
          <ProductItem />
        </Route>
        <Route path="/gia-tot-hom-nay">
          <GoodPriceToday />
        </Route>
        <Route exact path="/" component={() => <Home />} />
      </Switch>
    </div>
  );
};

export default App;
