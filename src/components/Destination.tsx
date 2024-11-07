import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Image } from "../data";

type planetData = {
  name: string;
  images: Image;
};

const Destination = () => {
  const loadDestinations = () =>
    import("../data").then((mod) => mod.destinations);
  const [planets, setPlanets] = useState<planetData[]>([]);

  useEffect(() => {
    loadDestinations().then((data) => {
      const planetData: planetData[] = data.map((planet) => ({
        name: planet.name,
        images: planet.images,
      }));
      setPlanets(planetData);
    });
  }, []);

  return (
    <motion.div
      className="grid grid-cols-1 gap-8 px-6 py-10 md:grid-cols-2 lg:grid-cols-4"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ y: "-100vh" }}
    >
      {planets.map((planet) => (
        <div
          key={planet.name}
          className="transform rounded-lg bg-gray-800/60 p-6 text-center text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <Link to={`/destination/${planet.name.toLowerCase()}`}>
            <div className="relative">
              <img
                src={planet.images.png}
                alt={planet.name}
                className="mx-auto mb-6 rounded-full border-4 border-blue-500 transition-transform duration-300 hover:rotate-12"
              />
            </div>
            <h3 className="mb-4 text-2xl font-semibold transition-colors duration-300 hover:text-blue-400">
              {planet.name}
            </h3>
          </Link>
          <Link
            className="mt-4 inline-block rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
            to={`/destination/${planet.name.toLowerCase()}`}
          >
            More Info
          </Link>
        </div>
      ))}
    </motion.div>
  );
};

export default Destination;
