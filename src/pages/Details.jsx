import React from "react";

import Header from "../parts/Header.jsx";
import Breadcrumb from "../components/Breadcrumb/index.jsx";
import Clients from "../parts/Clients.jsx";
import SiteMap from "../parts/Homepage/SiteMap.jsx";
import Footer from "../parts/Footer.jsx";

function Details() {
  return (
    <div>
      <Header />
      <Breadcrumb
        list={[
          { url: "/", name: "home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "Details" },
        ]}
      />
      <Clients />
      <SiteMap />
      <Footer />
    </div>
  );
}

export default Details;
