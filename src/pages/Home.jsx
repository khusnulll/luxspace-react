import React from "react";

import Header from "../parts/Header.jsx";
import Hero from "../parts/Hero.jsx";
import BrowseRoom from "../parts/Homepage/BrowseRoom.jsx";
import JustArrived from "../parts/Homepage/JustArrived.jsx";
import Clients from "../parts/Clients.jsx";
import SiteMap from "../parts/Homepage/SiteMap.jsx";

function Home(props) {
  return (
    <div>
      <Header />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <SiteMap />
    </div>
  );
}

export default Home;
