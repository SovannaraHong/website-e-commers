import React from "react";

import HeroSection from "../components/Hero/HeroSection";
import Product from "../components/Product/Product";
import CategoryFootag from "../components/Category/CategoryFootag";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategoryFootag />
      <Product />
    </>
  );
};

export default Home;
