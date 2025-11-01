import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";   // adjust path if needed
import Footer from "./Footer";   // adjust path if needed

const Layout = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Outlet />   {/* Page content will load here */}
      <Footer />
    </div>
  );
};

export default Layout;
