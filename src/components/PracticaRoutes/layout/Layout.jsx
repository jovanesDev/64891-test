import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import GlobalProvider from "../provider/GlobalProvider";

const WithNavbarAndFooter = () => {
  return (
    <>
      <GlobalProvider>
        <Navbar />
           <Outlet />
        <Footer />
      </GlobalProvider>
    </>

    // aca van components y outlet
  );
};

export default WithNavbarAndFooter;
