import React from "react";

import HeroSection from "../components/Hero/HeroSection";
import Product from "../components/Product/Product";
import CategoryFootag from "../components/Category/CategoryFootag";
import Qr from "./Qr";
import AboutFooter from "../components/Footer/AboutFooter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategoryFootag />
      <Product />
      <AboutFooter />
    </>
  );
};

export default Home;
