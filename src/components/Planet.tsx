import React from "react";
import { Link, useParams } from "react-router-dom";
import { destinations } from "../data";

const Planet = () => {
  const { planetName } = useParams();

  const planet = destinations.find(
    (destination) =>
      destination.name.toLowerCase() === planetName?.toLowerCase(),
  );

  const planetsName = destinations.map((planet) => ({
    name: planet.name,
  }));

  if (!planet) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p className="font-sans text-600 text-light md:text-700 lg:text-800">
          Planet not found!
        </p>

        <Link
          className="mt-4 inline-block rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
          to="/destination"
        >
          Return Back
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-12 p-6 text-center lg:text-left">
      {/* Title */}
      <div className="tracking-[0.1rem] lg:ml-36 lg:self-start">
        <span className="pr-4 font-bold opacity-25">01</span> PICK YOUR
        DESTINATION
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-14 text-center lg:flex-row lg:gap-28 lg:text-left">
        {/* Image */}
        <div className="w-80">
          <img src={planet.images.png} alt={planet.name} />
        </div>

        {/* Explanation */}
        <div className="flex flex-col items-center gap-6 lg:items-start">
          {/* Destination Tab - Desktop and Tablet */}
          <ul className="flex gap-6 uppercase text-light">
            {planetsName.map((planet) => (
              <li
              key={planet.name}
                className={`${planet.name.toLowerCase() === planetName ? "border-b-4 text-white" : ""} py-2`}
              >
                <Link to={`/destination/${planet.name.toLowerCase()}`}>
                  {planet.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Text */}
          <div className="flex max-w-[36rem] flex-col gap-4 lg:max-w-[29rem]">
            <p className="font-serif text-[5rem] uppercase">{planet.name}</p>
            <p className="text-light">{planet.description}</p>
          </div>

          <div className="w-full border-t text-white opacity-25"></div>

          {/* Statistics */}
          <div className="flex flex-col gap-6 uppercase md:flex-row md:gap-28">
            <div className="flex flex-col gap-3">
              <p className="font-sans text-200 text-light">AVG. DISTANCE</p>
              <p className="font-serif text-500">{planet.distance}</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-sans text-200 text-light">Est. travel time</p>
              <p className="font-serif text-500">{planet.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planet;
