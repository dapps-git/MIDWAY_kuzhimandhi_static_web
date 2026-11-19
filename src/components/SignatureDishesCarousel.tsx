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
  const touchStartY = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const touchEndY = useRef<number>(0);
  const isSwiping = useRef<boolean>(false);

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
    touchStartY.current = e.touches[0].clientY;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
    isSwiping.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping.current) return;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (!isSwiping.current) return;
    isSwiping.current = false;
    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;

    // Must be predominantly horizontal gesture of at least 35px
    if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY) * 1.2) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handleTouchCancel = () => {
    isSwiping.current = false;
  };

  // Dimensions
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
    <section className="relative py-14 sm:py-20 bg-white text-black overflow-hidden border-t border-neutral-200 select-none">
      <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-4">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-[11px] sm:text-xs uppercase tracking-[4px] sm:tracking-[5px] text-neutral-800 font-medium">
            SIGNATURE DISHES & DRINKS
          </h2>
        </div>

        {/* Carousel Viewport Container: Top-anchored layout with touch-action: pan-y */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden h-[490px] sm:h-[530px]"
          style={{ touchAction: "pan-y" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchCancel}
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
                  setActiveIndex(i);
                }}
                className="absolute top-3 sm:top-5 left-1/2 cursor-pointer flex flex-col items-center will-change-transform"
                style={{
                  width: `${cardWidth}px`,
                  // Fixed horizontal centering + step offset; NO dynamic translateY percent that causes jumps!
                  transform: `translate3d(calc(-50% + ${diff * step}px), 0, 0)`,
                  transition: isVisible
                    ? "transform 0.55s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.4s ease"
                    : "none",
                  opacity: isCenter ? 1 : isEdge ? (isMobile ? 0.6 : 0.65) : isVisible ? 0.8 : 0,
                  zIndex: isCenter ? 30 : 20 - Math.abs(diff),
                  pointerEvents: isVisible ? "auto" : "none",
                  visibility: isVisible ? "visible" : "hidden",
                }}
              >
                {/* Card Box with Whisper-Light Border & Soft Diffused Shadow */}
                <div
                  className={`w-full bg-white rounded-[2px] overflow-hidden flex flex-col transition-shadow duration-500 ${
                    isCenter
                      ? "border border-black/[0.06] shadow-[0_20px_45px_rgba(0,0,0,0.09),0_2px_8px_rgba(0,0,0,0.04)]"
                      : "border border-black/[0.04] shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                  }`}
                >
                  {/* Top Image: Constant height prevents layout thrashing & image resizing during slide */}
                  <div className="w-full h-[180px] sm:h-[205px] bg-neutral-100 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="eager"
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        isCenter ? "scale-105" : "scale-100"
                      }`}
                    />
                  </div>

                  {/* Card Content Area */}
                  <div className="w-full px-5 py-4 sm:px-6 sm:py-5 flex flex-col items-center text-center">
                    
                    {/* Location in Elegant Italic Serif */}
                    <p className="font-serif italic text-xs sm:text-[13px] text-neutral-600">
                      {dish.location}
                    </p>

                    {/* Dish Title in Bold Clean Uppercase with equal min-height */}
                    <div className="min-h-[34px] sm:min-h-[38px] flex items-center justify-center mt-1">
                      <h3 className="font-sans font-bold tracking-[1.5px] text-xs sm:text-[13px] uppercase text-black leading-snug">
                        {dish.name}
                      </h3>
                    </div>

                    {/* Expanded Content: Downward reveal that never alters the card's top position */}
                    <div
                      className={`w-full flex flex-col items-center overflow-hidden transition-all duration-500 ease-out ${
                        isCenter
                          ? "max-h-[260px] opacity-100 translate-y-0 mt-1 pointer-events-auto"
                          : "max-h-0 opacity-0 -translate-y-2 mt-0 pointer-events-none"
                      }`}
                    >
                      {/* Thick Black Horizontal Dash */}
                      <div
                        className={`w-8 h-[2px] bg-black my-3 transition-opacity duration-300 ${
                          isCenter ? "opacity-100" : "opacity-0"
                        }`}
                      />

                      {/* Dish Description */}
                      <p
                        className={`font-serif italic text-xs sm:text-[12.5px] text-neutral-800 leading-relaxed max-w-[260px] transition-opacity duration-400 ${
                          isCenter ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {dish.description}
                      </p>

                      {/* Solid Black Button */}
                      <div
                        className="w-full bg-black text-white text-[10px] tracking-[3px] py-2.5 sm:py-3 text-center uppercase font-medium mt-4"
                      >
                        {dish.tag}
                      </div>
                    </div>

                    {/* Bottom spacing for inactive cards */}
                    {!isCenter && <div className="h-2" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Controls: < 1 / 7 > */}
        <div className="flex items-center justify-center gap-6 mt-1 sm:mt-2">
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
