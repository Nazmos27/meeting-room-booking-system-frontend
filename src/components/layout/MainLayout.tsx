import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/NavBar";
import FooterSection from "../ui/Footer";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <FooterSection />
    </div>
  );
};

export default MainLayout;
