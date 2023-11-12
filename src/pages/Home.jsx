import React from "react";

import Header from "../parts/Header.jsx";
import Hero from "../parts/Homepage/Hero.jsx";
import BrowseRoom from "../parts/Homepage/BrowseRoom.jsx";
import JustArrived from "../parts/Homepage/JustArrived.jsx";
import Clients from "../parts/Clients.jsx";
import SiteMap from "../parts/Homepage/SiteMap.jsx";
import Footer from "../parts/Footer.jsx";

import useScrollAnchor from "../helpers/hooks/useScrollAnchor.jsx";

function Home() {
  useScrollAnchor();
  return (
    <div>
      <Header theme={"white"} position={"absolute"} />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <SiteMap />
      <Footer />
    </div>
  );
}

export default Home;
