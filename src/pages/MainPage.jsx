import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import BodySection from "../layout/BodySection";
import SingleCard from "../component/SingleCard";

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <BodySection />
      <Footer />
    </div>
  );
};

export default MainPage;
