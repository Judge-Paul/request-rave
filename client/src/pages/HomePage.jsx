import React from "react";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default React.memo(HomePage);
