import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:idc" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
