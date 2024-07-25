import React from "react";
import Navbar from "./navbar.jsx";
import HeroBanner from "./herobanner.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <HeroBanner />
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;