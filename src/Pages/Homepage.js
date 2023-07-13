import React from "react";
import Products from "../components/Products";
import Xx99 from "../components/Homepage/Xx99";
import Advertisement from "../components/Homepage/Advertisement.js";
import Compliment from "../components/Compliment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      {/* <Navbar from/> */}
      <Xx99 />
      <Products />
      <Advertisement />
      <Compliment />
      <Footer />
      <Outlet/>
    </div>
  );
}
