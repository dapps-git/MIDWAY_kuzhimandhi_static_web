"use client";

import React from "react";
import { BRANCHES } from "@/data/branches";
import { MapPinIcon, ClockIcon, PhoneIcon } from "./Icons";

export default function BranchesTrain() {
  // We duplicate the array to create an infinite seamless train loop
  const trainCarriages = [...BRANCHES, ...BRANCHES];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-neutral-900 via-[#181112] to-neutral-900 py-6 sm:py-8 border-y-2 border-[#A81B1E] relative select-none">
      {/* Top Train Track Line Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-300">
            MIDWAY EXPRESS TRAIN • 5 OUTLETS ACROSS KERALA
          </span>
        </div>
        <span className="text-[10px] sm:text-xs text-neutral-400 font-medium hidden sm:inline-block">
          ⚡ Continuous Line • Hover or Tap Carriage to Open Location
        </span>
      </div>

      {/* Train Track Visual Railway Indicator */}
      <div className="relative w-full h-1 bg-neutral-800 mb-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A81B1E] to-transparent animate-pulse" />
      </div>

      {/* Train Carriage Moving Wrapper */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex gap-4 sm:gap-6 animate-train whitespace-nowrap will-change-transform">
          {trainCarriages.map((branch, index) => {
            const outletNumber = (index % BRANCHES.length) + 1;
            return (
              <a
                key={`${branch.id}-${index}`}
                href={branch.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-[280px] sm:w-[320px] bg-neutral-800/90 hover:bg-[#221617] border border-neutral-700 hover:border-[#A81B1E] rounded-2xl p-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-red-950/40 text-left shrink-0 group/card relative overflow-hidden"
              >
                {/* Carriage Coupler / Number Badge */}
                <div className="flex items-center justify-between border-b border-neutral-700/60 pb-2 mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-[#A81B1E] text-white">
                      COACH #{outletNumber}
                    </span>
                    <span className="text-[11px] font-bold text-amber-300 truncate max-w-[140px]">
                      {branch.area}
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Open
                  </span>
                </div>

                {/* Branch Info */}
                <h4 className="font-serif text-base font-bold text-white group-hover/card:text-amber-200 transition-colors truncate">
                  {branch.name}
                </h4>

                <p className="text-neutral-400 text-xs mt-1 truncate flex items-center gap-1.5">
                  <MapPinIcon className="w-3.5 h-3.5 text-[#A81B1E] shrink-0" />
                  <span className="truncate">{branch.address}</span>
                </p>

                <div className="mt-3 pt-2 border-t border-neutral-700/50 flex items-center justify-between text-xs">
                  <span className="text-neutral-400 text-[11px] flex items-center gap-1">
                    <ClockIcon className="w-3 h-3 text-amber-400" />
                    Till Midnight
                  </span>

                  <span className="text-[#A81B1E] group-hover/card:text-white font-bold text-[11px] flex items-center gap-1 group-hover/card:underline">
                    <span>Google Maps</span>
                    <span>→</span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

