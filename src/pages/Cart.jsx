import React from "react";

import Header from "../parts/Header.jsx";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb.jsx";
import ShoppingCart from "../parts/Cart/ShoppingCart.jsx";
import ShippingDetails from "../parts/Cart/ShippingDetails.jsx";
import SiteMap from "../parts/Homepage/SiteMap.jsx";

import Footer from "../parts/Footer.jsx";

const Cart = () => {
  return (
    <div>
      <Header theme={"black"} />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>

      <SiteMap />
      <Footer />
    </div>
  );
};

export default Cart;
