import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Outlet} from 'react-router-dom'

const WithNavbarAndFooter = () => {
  return (
    <>
      <Navbar />
        <Outlet/>
      <Footer />
    </>

    // aca van components y outlet
  );
};

export default WithNavbarAndFooter;
