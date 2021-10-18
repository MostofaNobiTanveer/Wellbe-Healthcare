import React from "react";
import Banner from "../../components/Banner";
import Brands from "../../components/Brands";
import Features from "../../components/Features";
import SpecialityList from "../../components/SpecialtyList";
import Stats from "../../components/Stats";
import ScrollToTop from "../../utils/ScrollToTop";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Banner />
      <Features />
      <SpecialityList /> 
      <Brands />
      <Stats />
    </div>
  );
};

export default Home;
