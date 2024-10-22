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
      <div className="tracking-[0.1rem] md:self-start md:pl-10 md:text-[1.5rem] lg:pl-0 lg:text-500">
        <span className="pr-4 font-bold opacity-25">03</span>
        SPACE LAUNCH 101
      </div>

      {/* Content */}

      <div className="md:msb-0 flex flex-col items-center gap-8 text-center mb-10 lg:mb-24 lg:flex-row lg:gap-14 lg:text-left">
        <div className="block md:hidden">
          <img
            src={technology.images.portrait}
            alt={technology.name}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="hidden md:block lg:hidden">
          <img
            src={technology.images.landscape}
            alt={technology.name}
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Explanation */}
        <div className="flex gap-4 lg:mt-6 lg:flex-col lg:gap-10">
          {technologies.map((_, index) => (
            <div
              title="Next"
              key={index}
              onClick={() => setCurrentCrewIndex(index)}
              className={`h-10 w-10 rounded-full md:h-14 md:w-14 lg:h-20 lg:w-20 ${
                currentCrewIndex === index
                  ? "bg-white text-black"
                  : "border border-white/25 bg-transparent"
              } flex items-center justify-center hover:border-white focus:bg-white`}
            >
              {index + 1}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center md:gap-4 lg:items-start lg:gap-6">
          <div className="font-serif uppercase">
            <p className="text-40000 text-white/50 md:text-[1.5rem] lg:text-600">
              THE TERMINOLOGY…
            </p>
            <p className="text-[1.5rem] md:text-[2.5rem] lg:text-700">
              {technology.name}
            </p>
          </div>
          <div className="w-[24rem] font-sans text-300 text-light md:w-[32rem] md:text-400">
            <p>{technology.description}</p>
          </div>
        </div>

        <div className="hidden lg:block">
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
