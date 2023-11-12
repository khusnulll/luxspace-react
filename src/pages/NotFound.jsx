import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../parts/Header.jsx";
import ErrorMessage from "../parts/Homepage/ErrorMessage.jsx";
import SiteMap from "../parts/Homepage/SiteMap.jsx";
import Footer from "../parts/Footer.jsx";

const NotFound = () => {
  return (
    <>
      <Header theme={"black"} />
      <ErrorMessage />
      <SiteMap />
      <Footer />
    </>
  );
};

export default NotFound;
