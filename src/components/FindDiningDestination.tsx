"use client";

import React from "react";
import Link from "next/link";
import { BRANCH_EXPERIENCES } from "@/data/branchExperiences";

export default function FindDiningDestination() {
  return (
    <section className="bg-white text-black py-20 sm:py-28 px-5 sm:px-8 border-t border-neutral-200">
      <div className="max-w-[1360px] mx-auto">
        {/* Section Heading matching reference */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-saol uppercase tracking-[5px] sm:tracking-[7px] text-neutral-900 font-normal">
            FIND YOUR DINING DESTINATION
          </h2>
        </div>

        {/* Destination List matching reference lines & + markers */}
        <div className="border-t-2 border-black">
          {BRANCH_EXPERIENCES.map((branch) => (
            <div
              key={branch.id}
              className="border-b border-black py-5 sm:py-6 flex items-center justify-between gap-4 group transition-colors hover:bg-neutral-50/70 px-2 sm:px-4"
            >
              {/* Left: Branch Name linking to its inner page */}
              <Link
                href={`/branches/${branch.id}`}
                className="text-xs sm:text-sm tracking-[3px] sm:tracking-[4px] uppercase font-medium text-black group-hover:translate-x-1.5 transition-transform duration-300"
              >
                {branch.locationName}
              </Link>

              {/* Right: Phone Number in light-weight text (calls on click) + '+' Sign */}
              <div className="flex items-center gap-5 sm:gap-10 flex-shrink-0">
                <a
                  href={`tel:${branch.tel}`}
                  className="text-xs sm:text-sm font-light tracking-[2px] text-neutral-500 hover:text-black transition-colors"
                  title="Tap to call"
                >
                  {branch.phone}
                </a>

                <Link
                  href={`/branches/${branch.id}`}
                  className="text-base sm:text-lg text-neutral-400 group-hover:text-black transition-colors font-light"
                  aria-label={`View ${branch.locationName} details`}
                >
                  +
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
