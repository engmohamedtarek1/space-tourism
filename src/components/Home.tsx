import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center p-6 md:p-32 lg:flex-row lg:items-start lg:justify-between">
      {/* Texts */}
      <div className="flex flex-col items-center lg:items-start">
        <div className="flex flex-col text-center font-sansCond text-300 uppercase tracking-1 text-light md:text-500 lg:text-left">
          So, you want to travel to
          <span className="font-serif text-800 text-white md:text-900">
            Space
          </span>
        </div>
        <p className="max-w-xl text-center text-300 leading-7 text-light md:text-400 lg:text-left">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
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
    </div>
  );
};

export default Home;
