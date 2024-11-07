import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiList } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import logo from "../assets/shared/logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <header className="flex items-center justify-between py-6 md:pt-0 lg:pt-10">
      <motion.div
        className="flex items-center px-10 lg:pl-16 lg:pr-0"
        whileHover={{
          scale: 1.2,
        }}
      >
        <Link to="/" className="w-10 md:w-12">
          <img src={logo} alt="space tourism" />
        </Link>
      </motion.div>

      <motion.div
        className="relative z-50 px-10 md:hidden"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {isMobileMenuOpen ? (
          <IoMdClose
            size={30}
            className="fixed right-10 top-8 z-50 cursor-pointer text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        ) : (
          <FiList
            size={30}
            className="cursor-pointer text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          />
        )}
      </motion.div>

      {isMobileMenuOpen && (
        <nav className="fixed right-0 top-0 z-40 h-full w-3/4 p-8 pt-20 backdrop-blur-lg">
          <ul className="flex flex-col gap-6 text-300">
            <motion.li
              className={`underline-indicators ${
                location.pathname === "/" ? "active" : ""
              }`}
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="uppercase tracking-2 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mr-3 font-bold">00</span>Home
              </Link>
            </motion.li>
            <motion.li
              className={`underline-indicators ${
                location.pathname.startsWith("/destination") ? "active" : ""
              }`}
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/destination"
                className="uppercase tracking-2 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mr-3 font-bold">01</span>Destination
              </Link>
            </motion.li>
            <motion.li
              className={`underline-indicators ${
                location.pathname.startsWith("/crew") ? "active" : ""
              }`}
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/crew"
                className="uppercase tracking-2 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mr-3 font-bold">02</span>Crew
              </Link>
            </motion.li>
            <motion.li
              className={`underline-indicators ${
                location.pathname.startsWith("/technology") ? "active" : ""
              }`}
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/technology"
                className="uppercase tracking-2 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mr-3 font-bold">03</span>Technology
              </Link>
            </motion.li>
          </ul>
        </nav>
      )}

      {/* Navigation (Desktop and Tablet) */}
      <nav className="hidden bg-white/5 px-10 py-8 md:block lg:px-16 lg:backdrop-blur-lg">
        <ul className="flex gap-6 text-300">
          <motion.li
            className={`underline-indicators ${
              location.pathname === "/" ? "active" : ""
            }`}
            whileHover={{
              scale: 1.05,
            }}
          >
            <Link to="/" className="uppercase tracking-2 text-white">
              <span className="mr-3 font-bold">00</span>Home
            </Link>
          </motion.li>
          <motion.li
            className={`underline-indicators ${
              location.pathname.startsWith("/destination") ? "active" : ""
            }`}
            whileHover={{
              scale: 1.05,
            }}
          >
            <Link to="/destination" className="uppercase tracking-2 text-white">
              <span className="mr-3 font-bold">01</span>Destination
            </Link>
          </motion.li>
          <motion.li
            className={`underline-indicators ${
              location.pathname.startsWith("/crew") ? "active" : ""
            }`}
            whileHover={{
              scale: 1.05,
            }}
          >
            <Link to="/crew" className="uppercase tracking-2 text-white">
              <span className="mr-3 font-bold">02</span>Crew
            </Link>
          </motion.li>
          <motion.li
            className={`underline-indicators ${
              location.pathname.startsWith("/technology") ? "active" : ""
            }`}
            whileHover={{
              scale: 1.05,
            }}
          >
            <Link to="/technology" className="uppercase tracking-2 text-white">
              <span className="mr-3 font-bold">03</span>Technology
            </Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
