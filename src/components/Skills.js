import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  // Define progress values for each skill (adjust these values as needed)
  const skillProgress = {
    JavaScript: 90,
    React: 85,
    Python: 80,
    Sql: 75,
    "Machine Learning": 70,
    AWS: 65,
  };
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto transition-shadow">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill.name} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-600 rounded p-4 h-full flex flex-col items-center">
                <img src={skill.image} alt={skill.name} className="w-16 h-16 mb-4" />
                <span className="title-font font-medium text-white mb-2">
                  {skill.name}
                </span>
                <div className="w-full bg-gray-700 rounded">
                  <div
                    className="bg-green-500 text-xs leading-none py-1 text-center text-white rounded"
                    style={{ width: `${skillProgress[skill.name]}%` }}
                  >
                    {skillProgress[skill.name]}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
