"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

interface DishItem {
  id: string;
  name: string;
  location: string;
  description: string;
  tag: string;
  image: string;
}

const SIGNATURE_DISHES: DishItem[] = [
  {
    id: "dish-1",
    name: "SIGNATURE ALFAHAM MANDI",
    location: "Valluvambram",
    description: "Charcoal-grilled whole spiced chicken laid over steaming, slow-smoked long-grain Mandi rice infused with authentic subterranean pit embers and fragrant Yemeni aromatics.",
    tag: "MIDWAY MANDI",
    image: "/images/dishes/dish-1.jpg",
  },
  {
    id: "dish-2",
    name: "PERI PERI SMOKED AL FAHAM",
    location: "Perinthalmanna",
    description: "Succulent chicken marinated in crushed bird's eye chilies and zesty citrus spices, slow-charred over hardwood coals for a bold and tantalizing fiery finish.",
    tag: "MIDWAY MANDI",
    image: "/images/dishes/dish-2.jpg",
  },
  {
    id: "dish-3",
    name: "KERALA BEEF PEPPER ROAST",
    location: "Nilambur",
    description: "Tender beef chunks slow-roasted with freshly crushed Malabar black pepper, curry leaves, roasted coconut slivers, and caramelized shallots in traditional copper urulis.",
    tag: "MIDWAY MANDI",
    image: "/images/dishes/dish-3.jpg",
  },
  {
    id: "dish-4",
    name: "CHEESY MELT AL FAHAM",
    location: "Manjeri",
    description: "Our signature charcoal-grilled chicken blanketed in a golden layer of molten mozzarella, aromatic Mediterranean herbs, and crushed black pepper.",
    tag: "MIDWAY MANDI",
    image: "/images/dishes/dish-4.jpg",
  },
  {
    id: "dish-5",
    name: "TRADITIONAL CHICKEN MANDI",
    location: "Vaniyambalam",
    description: "The timeless Arabian classic: tender chicken braised to fall-apart perfection over fragrant yemeni-spiced basmati rice inside authentic underground pit ovens.",
    tag: "MIDWAY MANDI",
    image: "/images/dishes/dish-5.jpg",
  },
  {
    id: "dish-6",
    name: "KANTHARI CHARCOAL ROAST",
    location: "Manjeri Bypass",
    description: "Bold and pungent green kanthari chili marinade seared into tender chicken pieces over glowing embers, garnished with fresh garden herbs and sliced onions.",
    tag: "MIDWAY MANDI",
    image: "/images/dishes/dish-6.jpg",
  },
  {
    id: "dish-7",
    name: "MALABAR SPICY CHILLI ROAST",
    location: "Valluvambram",
    description: "Tender chunks seared in iron skillets with crushed red chili flakes, roasted curry leaves, and hand-ground Malabar spices on artisan ceramic stoneware.",
    tag: "MIDWAY MANDI",
    image: "/images/dishes/dish-7.jpg",
  },
];

export default function SignatureDishesCarousel() {
  const total = SIGNATURE_DISHES.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1200);

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isNavigating = useRef<boolean>(false);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX; // Prevents tap from triggering swipe
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Dimensions matching the reference screenshot:
  const isMobile = containerWidth < 768;
  const isTablet = containerWidth >= 768 && containerWidth < 1100;

  const cardWidth = isMobile
    ? Math.min(containerWidth * 0.8, 290)
    : isTablet
    ? 250
    : 270;

  const gap = isMobile ? 16 : 22;
  const step = cardWidth + gap;

  return (
    <section className="relative py-16 sm:py-24 bg-white text-black overflow-hidden border-t border-neutral-200 select-none">
      <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-4">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-[11px] sm:text-xs uppercase tracking-[4px] sm:tracking-[5px] text-neutral-800 font-medium">
            SIGNATURE DISHES & DRINKS
          </h2>
        </div>

        {/* Carousel Viewport Container: Fixed height with absolute center layout (Can NEVER go blank) */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden h-[510px] sm:h-[560px] flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {SIGNATURE_DISHES.map((dish, i) => {
            // Calculate circular offset from activeIndex: -2, -1, 0, 1, 2, etc.
            let diff = i - activeIndex;
            while (diff > total / 2) diff -= total;
            while (diff < -total / 2) diff += total;

            const isCenter = diff === 0;
            const isVisible = isMobile ? Math.abs(diff) <= 1 : Math.abs(diff) <= 2;
            const isEdge = Math.abs(diff) === (isMobile ? 1 : 2);

            return (
              <div
                key={dish.id}
                onClick={() => {
                  if (isNavigating.current) return;
                  setActiveIndex(i);
                }}
                className="absolute top-1/2 left-1/2 cursor-pointer flex flex-col items-center will-change-transform"
                style={{
                  width: `${cardWidth}px`,
                  transform: `translate3d(calc(-50% + ${diff * step}px), calc(-50% + ${
                    isCenter ? (isMobile ? -14 : -18) : 0
                  }px), 0)`,
                  transition:
                    "transform 0.7s cubic-bezier(0.25, 1, 0.35, 1), opacity 0.5s ease",
                  opacity: isCenter ? 1 : isEdge ? (isMobile ? 0.6 : 0.65) : isVisible ? 0.8 : 0,
                  zIndex: isCenter ? 30 : 20 - Math.abs(diff),
                  pointerEvents: isVisible ? "auto" : "none",
                }}
              >
                {/* Card Box with Whisper-Light Border & Soft Diffused Shadow */}
                <div
                  className={`w-full bg-white rounded-[2px] overflow-hidden flex flex-col transition-all duration-700 ease-[cubic-bezier(0.25,1,0.35,1)] ${
                    isCenter
                      ? "border border-black/[0.06] shadow-[0_20px_45px_rgba(0,0,0,0.09),0_2px_8px_rgba(0,0,0,0.04)]"
                      : "border border-black/[0.04] shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                  }`}
                >
                  {/* Top Image: Smoothly shrinks into landscape format when active (slower, calmer transition) */}
                  <div
                    className={`w-full bg-neutral-100 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.35,1)] ${
                      isCenter
                        ? "h-[170px] sm:h-[195px]" // Landscape ratio when active
                        : "h-[210px] sm:h-[240px]" // Taller photo when inactive
                    }`}
                  >
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="eager"
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isCenter ? "scale-105" : "scale-100"
                      }`}
                    />
                  </div>

                  {/* Card Content Area */}
                  <div className="w-full px-5 py-5 sm:px-6 sm:py-6 flex flex-col items-center text-center transition-all duration-700">
                    
                    {/* Location in Elegant Italic Serif */}
                    <p className="font-serif italic text-xs sm:text-[13px] text-neutral-600 transition-colors">
                      {dish.location}
                    </p>

                    {/* Dish Title in Bold Clean Uppercase with equal min-height */}
                    <div className="min-h-[36px] sm:min-h-[40px] flex items-center justify-center mt-1">
                      <h3 className="font-sans font-bold tracking-[1.5px] text-xs sm:text-[13px] uppercase text-black leading-snug">
                        {dish.name}
                      </h3>
                    </div>

                    {/* Expanded Content: Smoothly Pops Up from Bottom to Top */}
                    <div
                      className={`w-full flex flex-col items-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.35,1)] ${
                        isCenter
                          ? "max-h-[300px] opacity-100 translate-y-0 mt-1 pointer-events-auto"
                          : "max-h-0 opacity-0 translate-y-6 mt-0 pointer-events-none"
                      }`}
                    >
                      {/* Thick Black Horizontal Dash */}
                      <div
                        className={`w-8 h-[2px] bg-black my-3.5 transition-all duration-500 delay-100 ease-out ${
                          isCenter ? "opacity-100 scale-x-100" : "opacity-0 scale-x-50"
                        }`}
                      />

                      {/* Dish Description: Popping up smoothly */}
                      <p
                        className={`font-serif italic text-xs sm:text-[12.5px] text-neutral-800 leading-relaxed max-w-[260px] transition-all duration-600 delay-150 ease-out ${
                          isCenter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                        }`}
                      >
                        {dish.description}
                      </p>

                      {/* Solid Black Button: Popping up smoothly (Sub-tag text completely removed) */}
                      <div
                        className="w-full bg-black text-white text-[10px] tracking-[3px] py-2.5 sm:py-3 text-center uppercase font-medium mt-5 transition-all duration-700 delay-200 ease-out"
                      >
                        {dish.tag}
                      </div>
                    </div>

                    {/* Minimal bottom spacing for inactive cards */}
                    {!isCenter && <div className="h-2" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Controls: < 1 / 6 > (Tight spacing directly beneath cards) */}
        <div className="flex items-center justify-center gap-6 mt-2 sm:mt-3">
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Dish"
            className="p-2 text-neutral-600 hover:text-black transition-colors focus:outline-none cursor-pointer"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Current Index / Total Indicator */}
          <span className="font-sans text-xs tracking-[3px] text-neutral-600 font-light">
            {activeIndex + 1} / {total}
          </span>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Dish"
            className="p-2 text-neutral-600 hover:text-black transition-colors focus:outline-none cursor-pointer"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
