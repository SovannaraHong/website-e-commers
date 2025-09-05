import React from "react";
import Category from "../components/Category/Category";
import HeroSection from "../components/Hero/HeroSection";
import Product from "../components/Product/Product";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Category />
      <Product />
    </>
  );
};

export default Home;
