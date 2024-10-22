import React, { Dispatch, SetStateAction, useState } from "react";
import { technologies, Technology } from "../data";

const Technologies = () => {
  const [currentCrewIndex, setCurrentCrewIndex]: [
    number,
    Dispatch<SetStateAction<number>>,
  ] = useState(0);
  const technology: Technology = technologies[currentCrewIndex];

  return (
    <div className="flex flex-col gap-12 text-center lg:ml-36 lg:text-left">
      {/* Title */}
      <div className="tracking-[0.1rem] md:self-start md:pl-4 lg:pl-0 lg:text-500">
        <span className="pr-4 font-bold opacity-25">03</span>
        SPACE LAUNCH 101
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-14 text-center lg:flex-row lg:text-left lg:mb-24">
        {/* Explanation */}
        <div className="mt-6 flex gap-4 lg:flex-col lg:gap-10">
          {technologies.map((_, index) => (
            <div
              title="Next"
              key={index}
              onClick={() => setCurrentCrewIndex(index)}
              className={`h-[0.625rem] w-[0.625rem] rounded-full lg:h-20 lg:w-20 ${
                currentCrewIndex === index
                  ? "bg-white text-black"
                  : "border border-white/25 bg-transparent"
              } flex items-center justify-center hover:bg-white/50 focus:bg-white`}
            >
              {index + 1}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 lg:items-start">
          <div className="font-serif uppercase">
            <p className="text-400 text-white/50 md:text-[1.5rem] lg:text-600">
              THE TERMINOLOGY…
            </p>
            <p className="text-[1.5rem] md:text-[2.5rem] lg:text-700">
              {technology.name}
            </p>
          </div>
          <div className="font-sans text-300 text-light md:w-[32rem] md:text-400">
            <p>{technology.description}</p>
          </div>
        </div>

        {/* Image with smooth fade effect */}
        <div className="">
          <img
            src={technology.images.portrait}
            alt={technology.name}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
