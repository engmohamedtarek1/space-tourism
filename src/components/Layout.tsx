// Layout.tsx
import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  const getBackgroundClass = () => {
    if (location.pathname === "/") {
      return "bg-homeMobile md:bg-homeTablet lg:bg-homeDesktop";
    } else if (location.pathname.startsWith("/destination")) {
      return "bg-destinationMobile md:bg-destinationTablet lg:bg-destinationDesktop";
    } else if (location.pathname.startsWith("/crew")) {
      return "bg-crewMobile md:bg-crewTablet lg:bg-crewDesktop";
    } else if (location.pathname.startsWith("/technology")) {
      return "bg-technologyMobile md:bg-technologyTablet lg:bg-technologyDesktop";
    } else {
      return "bg-homeMobile md:bg-homeTablet lg:bg-homeDesktop";
    }
  };

  return (
    <div
      className={`min-h-screen bg-cover bg-no-repeat ${getBackgroundClass()}`}
    >
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
