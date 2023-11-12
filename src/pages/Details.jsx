import React from "react";

import Header from "../parts/Header.jsx";
import Breadcrumb from "../components/Breadcrumb/index.jsx";
import ProductDetails from "../parts/Details/ProductDetails.jsx";
import Suggestion from "../parts/Details/Suggestion.jsx";
import SiteMap from "../parts/Homepage/SiteMap.jsx";
import Footer from "../parts/Footer.jsx";

function Details() {
  return (
    <div>
      <Header theme={"black"} />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "Details" },
        ]}
      />
      <ProductDetails />
      <Suggestion />
      <SiteMap />
      <Footer />
    </div>
  );
}

export default Details;
