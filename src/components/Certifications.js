import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { certifications } from "../data";

export default function Certifications() {
  return (
    <section id="certifications" className="text-gray-400 bg-gray-900 body-font pt-24">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <BadgeCheckIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Certifications
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {certifications.certifications.map((certification) => (
            <div
              key={certification}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <BadgeCheckIcon className="mx-auto inline-block w-10 mb-4" />
                <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 opacity-1 hover:opacity-60">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {certification}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
