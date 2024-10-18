import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Destination = () => {
  const loadDestinations = () =>
    import("../data").then((mod) => mod.destinations);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    loadDestinations().then((data) => {
      const planetData = data.map((planet) => ({
        name: planet.name,
        images: planet.images,
      }));
      setPlanets(planetData);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 px-6 py-10">
      {planets.map((planet) => (
        <div
          key={planet.name}
          className="rounded-lg bg-gray-800/60 p-6 text-center text-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <Link to={`/destination/${planet.name.toLowerCase()}`}>
            <div className="relative">
              <img
                src={planet.images.png}
                alt={planet.name}
                className="mx-auto mb-6 rounded-full border-4 border-blue-500 transition-transform duration-300 hover:rotate-12"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 transition-colors duration-300 hover:text-blue-400">
              {planet.name}
            </h3>
          </Link>
          <Link
            className="inline-block mt-4 rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
            to={`/destination/${planet.name.toLowerCase()}`}
          >
            More Info
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Destination;
