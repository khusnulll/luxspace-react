import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../parts/Header.jsx";
import Breadcrumb from "../components/Breadcrumb/index.jsx";
import SiteMap from "../parts/Homepage/SiteMap.jsx";
import Footer from "../parts/Footer.jsx";

const Congratulation = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Header theme={"black"} />
        <Breadcrumb
          list={[
            { url: "/", name: "Home" },
            { url: "/congratulation", name: "Success Checkout" },
          ]}
        />
      </div>
      <section className="">
        <div className="container mx-auto min-h-screen">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full md:w-4/12 text-center">
              <img src="../.././public/assets/images/content/illustration-success.png" alt="congrats illustration" />
              <h2 className="text-3xl font-semibold mb-6">Ah yes it’s success!</h2>
              <p className="text-lg mb-12">Furniture yang anda beli akan kami kirimkan saat ini juga so now please sit tight and be ready for it</p>
              <a onClick={() => navigate("/")} className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer">
                Back to Shop
              </a>
            </div>
          </div>
        </div>
      </section>
      <SiteMap />
      <Footer />
    </>
  );
};

export default Congratulation;
