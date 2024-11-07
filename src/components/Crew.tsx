import React, { Dispatch, SetStateAction, useState } from "react";
import { crew, CrewMember } from "../data";
import { motion } from "framer-motion";

const Crew = () => {
  const [currentCrewIndex, setCurrentCrewIndex]: [
    number,
    Dispatch<SetStateAction<number>>,
  ] = useState(0);
  const crewMember: CrewMember = crew[currentCrewIndex];

  return (
    <motion.div
      className="flex flex-col gap-12 p-6 text-center lg:ml-36 lg:text-left"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ y: "-100vh" }}
    >
      {/* Title */}
      <div className="tracking-[0.1rem] md:self-start md:pl-4 lg:pl-0 lg:text-500">
        <span className="pr-4 font-bold opacity-25">02</span>
        MEET YOUR CREW
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-14 text-center lg:flex-row lg:text-left">
        {/* Explanation */}
        <div className="flex flex-col items-center gap-6 lg:items-start">
          <div className="font-serif uppercase">
            <p className="text-400 text-white/50 md:text-[1.5rem] lg:text-600">
              {crewMember.role}
            </p>
            <p className="text-[1.5rem] md:text-[2.5rem] lg:text-700">
              {crewMember.name}
            </p>
          </div>
          <div className="font-sans text-300 text-light md:w-[35rem] md:text-400">
            <p>{crewMember.bio}</p>
          </div>
          <div className="mt-6 flex gap-4 lg:mt-36 lg:gap-10">
            {crew.map((_, index) => (
              <button
                title="Next"
                key={index}
                onClick={() => setCurrentCrewIndex(index)}
                className={`h-[0.625rem] w-[0.625rem] rounded-full lg:h-4 lg:w-4 ${
                  currentCrewIndex === index ? "bg-white" : "bg-white/20"
                } hover:bg-white/50 focus:bg-white`}
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
    </motion.div>
  );
};

export default Crew;
