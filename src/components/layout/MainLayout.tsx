import React from "react";
import { Outlet } from "react-router-dom";
import FooterSection from "../ui/Footer";
import NavBar from "../ui/NavBar";

const MainLayout: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <FooterSection />
    </div>
  );
};

export default MainLayout;
