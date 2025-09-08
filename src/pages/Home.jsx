import React from "react";

import HeroSection from "../components/Hero/HeroSection";
import Product from "../components/Product/Product";
import CategoryFootag from "../components/Category/CategoryFootag";
import Qr from "./Qr";

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
