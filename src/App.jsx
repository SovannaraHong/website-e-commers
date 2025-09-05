import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Component
import { RootLayout } from "./layouts/index";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<RootLayout />} />)
  );
  return (
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={router}
    />
  );
}

export default App;
