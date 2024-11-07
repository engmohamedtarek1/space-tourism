import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const pVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const spanVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center p-6 md:p-32 lg:flex-row lg:items-start lg:justify-between"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ y: "-100vh" }}
    >
      {/* Texts */}
      <div className="flex flex-col items-center lg:items-start">
        <motion.div
          className="flex flex-col text-center font-sansCond text-300 uppercase tracking-1 text-light md:text-500 lg:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          So, you want to travel to
          <motion.span
            className="font-serif text-800 text-white md:text-900"
            variants={pVariants}
            initial="hidden"
            animate="visible"
          >
            {"Space".split("").map((char, idx) => (
              <motion.span key={idx} variants={spanVariants}>
                {char}
              </motion.span>
            ))}
          </motion.span>
        </motion.div>
        <motion.p
          className="max-w-xl text-center text-300 leading-7 text-light md:text-400 lg:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </motion.p>
      </div>

      {/* Button */}
      <div className="py-20">
        <Link
          to="/destination"
          className="large-button fs-600 bg-white font-serif uppercase text-dark"
        >
          Explore
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
