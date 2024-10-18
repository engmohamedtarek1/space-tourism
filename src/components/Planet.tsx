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
    return <p>Planet not found</p>;
  }

  return (
    <div className="flex flex-col items-center gap-12 p-6 text-center">
      {/* Title */}
      <div className="tracking-[0.1rem]">
        <span className="pr-4 font-bold opacity-25">01</span> PICK YOUR
        DESTINATION
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-14">
        {/* Image */}
        <div className="w-48">
          <img src={planet.images.png} alt={planet.name} />
        </div>

        {/* Explanation */}
        <div className="flex flex-col items-center gap-6">
          {/* Destination Tab - Desktop and Tablet */}
          <ul className="flex gap-6 uppercase text-light">
            {planetsName.map((planet) => (
              <li
                className={`${planet.name.toLowerCase() === planetName ? "border-b-4 text-white" : ""} py-2`}
              >
                <Link to={`/destination/${planet.name.toLowerCase()}`}>
                  {planet.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Text */}
          <div className="flex flex-col gap-4">
            <p className="font-serif text-700 uppercase">{planet.name}</p>
            <p className="text-light">{planet.description}</p>
          </div>

          <div className="w-full border-t text-white opacity-25"></div>

          {/* Statistics */}
          <div className="flex flex-col gap-6 uppercase">
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
