import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import ScrollPage from "../../ScrollPage";

const RootLayout = () => {
  return (
    <>
      <ScrollPage />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
