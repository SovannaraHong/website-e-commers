import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollPage = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return <></>;
};

export default ScrollPage;
