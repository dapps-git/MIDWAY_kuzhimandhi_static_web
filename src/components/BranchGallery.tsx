"use client";

import React, { useState } from "react";

interface BranchGalleryProps {
  images: string[];
  branchName: string;
}

export default function BranchGallery({ images, branchName }: BranchGalleryProps) {
  const [activeImage, setActiveImage] = useState<string>(images[0] || "");

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[16/9] sm:aspect-[21/9] flex flex-col items-center justify-center p-8 text-center bg-[#F8F7F4] border border-neutral-200">
        <span className="text-xs uppercase tracking-[3px] text-neutral-500">
          PHOTOS FOR {branchName} COMING SOON
        </span>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4 sm:space-y-6">
      {/* 1. Main Featured Image Display */}
      <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden bg-neutral-900 border border-neutral-200 rounded-[2px] shadow-sm">
        <img
          src={activeImage}
          alt={`${branchName} Featured Photo`}
          className="w-full h-full object-cover object-center transition-all duration-500 ease-out"
        />
        {/* Subtle Bottom Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. Interactive Thumbnail Row: Exactly 4 Images in 1 Row on Laptop / Tablet */}
      {images.length > 1 && (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {images.map((img, idx) => {
              const isSelected = img === activeImage;
              return (
                <button
                  key={`${img}-${idx}`}
                  type="button"
                  onClick={() => setActiveImage(img)}
                  className={`group relative aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-neutral-100 focus:outline-none transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "ring-2 ring-black ring-offset-2 opacity-100 scale-[1.01]"
                      : "opacity-60 hover:opacity-100 border border-black/15 hover:scale-[1.02]"
                  }`}
                  aria-label={`View photo ${idx + 1} of ${branchName}`}
                >
                  <img
                    src={img}
                    alt={`${branchName} thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle active indicator bar */}
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-black" />
                  )}
                </button>
              );
            })}
          </div>
          <p className="text-[10px] uppercase tracking-[1.5px] text-neutral-400 mt-2.5 text-center sm:text-left font-light">
            Click any photo above to view in full size
          </p>
        </div>
      )}
    </div>
  );
}

