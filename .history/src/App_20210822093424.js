import React from "react";
import { ToastContainer } from "react-toastify";

import Home from "./screen/Home";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Home />
    </div>
  );
};

export default App;
