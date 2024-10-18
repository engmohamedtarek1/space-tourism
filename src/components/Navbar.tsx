import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiList } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/shared/logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <header className="flex items-center justify-between py-6 md:pt-0 lg:pt-10">
      <div className="flex items-center px-10 lg:pl-16 lg:pr-0">
        <Link to="/" className="w-10 md:w-12">
          <img src={logo} alt="space tourism" />
        </Link>
      </div>

      <div className="relative z-50 px-10 md:hidden">
        {isMobileMenuOpen ? (
          <IoMdClose
            size={30}
            className="cursor-pointer text-white fixed top-8 right-10 z-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        ) : (
          <FiList
            size={30}
            className="cursor-pointer text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          />
        )}
      </div>

      {isMobileMenuOpen && (
        <nav className="fixed right-0 top-0 z-40 h-full w-3/4 p-8 pt-20 backdrop-blur-lg">
          <ul className="flex flex-col gap-6 text-300">
            <li
              className={`underline-indicators ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link
                to="/"
                className="uppercase tracking-2 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mr-3 font-bold">00</span>Home
              </Link>
            </li>
            <li
              className={`underline-indicators ${
                location.pathname.startsWith("/destination") ? "active" : ""
              }`}
            >
              <Link
                to="/destination"
                className="uppercase tracking-2 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mr-3 font-bold">01</span>Destination
              </Link>
            </li>
            <li
              className={`underline-indicators ${
                location.pathname.startsWith("/crew") ? "active" : ""
              }`}
            >
              <Link
                to="/crew"
                className="uppercase tracking-2 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mr-3 font-bold">02</span>Crew
              </Link>
            </li>
            <li
              className={`underline-indicators ${
                location.pathname.startsWith("/technology") ? "active" : ""
              }`}
            >
              <Link
                to="/technology"
                className="uppercase tracking-2 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mr-3 font-bold">03</span>Technology
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Navigation (Desktop and Tablet) */}
      <nav className="hidden bg-white/5 px-10 py-8 md:block lg:px-16 lg:backdrop-blur-lg">
        <ul className="flex gap-6 text-300">
          <li
            className={`underline-indicators ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            <Link to="/" className="uppercase tracking-2 text-white">
              <span className="mr-3 font-bold">00</span>Home
            </Link>
          </li>
          <li
            className={`underline-indicators ${
              location.pathname.startsWith("/destination") ? "active" : ""
            }`}
          >
            <Link to="/destination" className="uppercase tracking-2 text-white">
              <span className="mr-3 font-bold">01</span>Destination
            </Link>
          </li>
          <li
            className={`underline-indicators ${
              location.pathname.startsWith("/crew") ? "active" : ""
            }`}
          >
            <Link to="/crew" className="uppercase tracking-2 text-white">
              <span className="mr-3 font-bold">02</span>Crew
            </Link>
          </li>
          <li
            className={`underline-indicators ${
              location.pathname.startsWith("/technology") ? "active" : ""
            }`}
          >
            <Link
              to="/technology"
              className="uppercase tracking-2 text-white"
            >
              <span className="mr-3 font-bold">03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
