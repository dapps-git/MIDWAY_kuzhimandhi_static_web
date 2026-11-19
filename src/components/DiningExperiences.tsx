"use client";

import React from "react";
import Link from "next/link";
import { BRANCH_EXPERIENCES } from "@/data/branchExperiences";

export default function DiningExperiences() {
  return (
    <section
      id="branches"
      className="relative bg-white text-black py-20 sm:py-28 px-5 sm:px-8 border-t border-neutral-200"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* Section Heading matching reference */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-saol uppercase tracking-[5px] sm:tracking-[7px] text-neutral-900 font-normal">
            UNFORGETTABLE DINING EXPERIENCES
          </h2>
        </div>

        {/* Cards Grid: 3 cards in one row on laptop, 2 cards in one row on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 lg:gap-10 dining-cards-grid">
          {BRANCH_EXPERIENCES.map((branch) => (
            <article
              key={branch.id}
              className="flex flex-col group"
            >
              {/* Card Image Area (4:5 portrait aspect ratio) */}
              <Link
                href={`/branches/${branch.id}`}
                className="block relative aspect-[4/5] w-full overflow-hidden bg-[#F6F5F2] border border-black/[0.05]"
              >
                {branch.image ? (
                  <img
                    src={branch.image}
                    alt={branch.locationName}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                ) : (
                  /* Elegant Blank Card Frame matching reference proportions */
                  <div className="w-full h-full flex flex-col items-center justify-center p-3 sm:p-5 text-center bg-[#F8F7F4] border border-dashed border-neutral-300/80">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-400 mb-2 group-hover:border-black/40 group-hover:text-black/60 transition-colors">
                      {/* Location Map Pin Icon */}
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.4]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-medium tracking-[1.5px] uppercase text-neutral-700 truncate w-full">
                      {branch.locationName}
                    </span>
                    <span className="text-[8px] sm:text-[9px] tracking-[1px] uppercase text-neutral-400 mt-0.5 font-light">
                      COMING SOON
                    </span>
                  </div>
                )}
              </Link>

              {/* Card Content Below Image */}
              <div className="pt-3.5 sm:pt-4 space-y-2 flex-1 flex flex-col justify-between">
                {/* Location (Left) & Phone Number (Right-most End in Light-weight text) */}
                <div className="flex items-center justify-between gap-2 text-[10px] sm:text-xs lg:text-[13px] uppercase text-neutral-800">
                  {/* Left: Location Pin & Name linking to inner page */}
                  <div className="flex items-center gap-1.5 min-w-0">
                    <svg
                      className="w-3.5 h-3.5 flex-shrink-0 text-neutral-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <Link
                      href={`/branches/${branch.id}`}
                      className="tracking-[1.5px] font-medium truncate hover:text-black transition-colors"
                    >
                      {branch.locationName}
                    </Link>
                  </div>

                  {/* Right-most End: Phone Number in light-weight font (calls on click) */}
                  <a
                    href={`tel:${branch.tel}`}
                    className="font-light text-neutral-500 hover:text-black tracking-[1px] transition-colors flex-shrink-0 text-[10px] sm:text-xs"
                    title="Tap to call"
                  >
                    {branch.phone}
                  </a>
                </div>

                {/* Explore Action Link */}
                <div className="pt-0.5">
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-[1.5px] text-black font-semibold underline underline-offset-4 decoration-black/40 hover:decoration-black transition-colors"
                  >
                    <span>EXPLORE</span>
                    <span className="text-[11px] transition-transform group-hover:translate-x-0.5">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
