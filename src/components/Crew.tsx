import React, { useState } from "react";
import { crew } from "../data";

const Crew = () => {
  const [currentCrewIndex, setCurrentCrewIndex] = useState(0);
  const crewMember = crew[currentCrewIndex];

  return (
    <div className="flex flex-col gap-12 p-6 text-center lg:ml-36 lg:text-left">
      {/* Title */}
      <div className="tracking-[0.1rem] lg:self-start">
        <span className="pr-4 font-bold opacity-25">01</span> MEET YOUR CREW
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-14 text-center lg:flex-row lg:text-left">
        {/* Explanation */}
        <div className="flex flex-col items-center gap-6 lg:items-start">
          <div className="font-serif uppercase">
            <p className="text-600 text-white/50">{crewMember.role}</p>
            <p className="text-700">{crewMember.name}</p>
          </div>
          <div className="w-[35rem] font-sans text-400 text-light">
            <p>{crewMember.bio}</p>
          </div>
          <div className="flex gap-10 mt-6 lg:mt-36">
            {crew.map((_, index) => (
              <button
                title="Next"
                key={index}
                onClick={() => setCurrentCrewIndex(index)}
                className={`h-4 w-4 rounded-full ${
                  currentCrewIndex === index ? "bg-white" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Image with smooth fade effect */}
        <div className="w-[24rem]">
          <div className="relative">
            <img
              src={crewMember.images.png}
              alt={crewMember.name}
              className="h-auto w-full object-cover"
              style={{
                maskImage:
                  "linear-gradient(to bottom, white 75%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, white 75%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
