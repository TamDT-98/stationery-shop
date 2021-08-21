import React from "react";
import { ToastContainer } from "react-toastify";
import Home from "./screen/Home";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Home />
    </div>
  );
};

export default App;
