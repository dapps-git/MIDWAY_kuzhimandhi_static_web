"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import LuxuryHeader from "@/components/LuxuryHeader";
import SignatureDishesCarousel from "@/components/SignatureDishesCarousel";
import DiningExperiences from "@/components/DiningExperiences";
import FindDiningDestination from "@/components/FindDiningDestination";
import LuxuryFooter from "@/components/LuxuryFooter";

export default function HomePage() {
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideoSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsVideoMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <div className="bg-[#050505] text-[#D0D0D0] min-h-screen selection:bg-[#D6B477] selection:text-[#050505] font-sans antialiased overflow-x-hidden">

      {/* ================= FIXED LUXURY HEADER ================= */}
      <LuxuryHeader />

      {/* ================= 1. HERO SECTION (BLACK & WHITE THEME) ================= */}
      <section
        id="hero"
        className="hero-section hero bg-[#050505] relative"
      >
        {/* Left Column: Hero Content */}
        <div className="hero-content space-y-5 sm:space-y-6 text-left">
          {/* Large Serif Heading (Pure White & Silver) */}
          <h1
            className="hero-title font-serif text-white font-normal leading-[1.08] tracking-tight"
            style={{
              fontSize: "clamp(38px, 5.5vw, 84px)",
            }}
          >
            A True Taste <br />
            <span className="italic font-light text-neutral-200">of Mandi</span>
          </h1>

          {/* Short Description */}
          <p className="hero-description text-sm sm:text-base text-neutral-300 font-light max-w-lg leading-relaxed">
            Slow-cooked, flavourful Mandi with the rich heritage of Arabian cuisine. Infused with natural pit smoke and secret Yemeni spices.
          </p>
        </div>

        {/* Right Column: Hero Image Container */}
        <div className="hero-image-container">
          <picture className="w-full flex justify-center">
            <source media="(max-width: 768px)" srcSet="/images/hero-dish-mobile.jpg" />
            <img
              src="/images/hero-dish.jpg"
              alt="Midway Mandi Authentic Arabian Cuisine"
              className="hero-image"
            />
          </picture>
        </div>

        {/* Scroll Indicator Chevron */}
        <div className="flex absolute bottom-3 left-1/2 -translate-x-1/2 flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity z-20">
          <Link href="#story" className="text-white/80 animate-bounce" aria-label="Scroll Down">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ================= 2. OUR STORY SECTION (WHITE LUXURY THEME) ================= */}
      <section
        id="story"
        className="py-16 sm:py-24 lg:py-28 px-5 sm:px-8 bg-white text-black border-t border-neutral-200 select-none overflow-hidden"
      >
        <div className="max-w-[1360px] mx-auto">
          
          {/* LAPTOP / DESKTOP VIEW: Plate Image strictly on LEFT, All Text strictly on RIGHT */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Side: Dish Plate Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-[540px] group">
                <img
                  src="/images/about-dish-transparent.png"
                  alt="Midway Mandi - A Taste of Tradition, Made to Share"
                  className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105 drop-shadow-[0_20px_45px_rgba(0,0,0,0.12)]"
                />
              </div>
            </div>

            {/* Right Side: Eyebrow + Heading + Paragraph grouped neatly together */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1.5px] bg-neutral-900" />
                <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[3px] text-neutral-800 font-medium">
                  OUR STORY
                </p>
              </div>

              <h2 className="Heading-title font-saol text-4xl lg:text-[46px] font-light text-neutral-900 tracking-tight leading-[1.18]">
                A Taste of Tradition, Made to Share
              </h2>

              <p className="font-sans font-light tracking-[0.02em] text-neutral-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Midway Mandi brings the essence of Arabian cuisine to your table, with our signature mandi and a wide range of freshly prepared dishes. Crafted with rich spices, quality ingredients and care, we offer a warm and welcoming dining experience for families and food lovers alike.
              </p>
            </div>
          </div>

          {/* MOBILE VIEW: Eyebrow + Title FIRST, Photo in MIDDLE, Paragraph LAST */}
          <div className="block lg:hidden space-y-6">
            {/* 1. Eyebrow + Title */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1.5px] bg-neutral-900" />
                <p className="font-sans text-[11px] uppercase tracking-[3px] text-neutral-800 font-medium">
                  OUR STORY
                </p>
              </div>
              <h2 className="Heading-title font-saol text-3xl font-light text-neutral-900 tracking-tight leading-[1.18]">
                A Taste of Tradition, Made to Share
              </h2>
            </div>

            {/* 2. Photo in the middle */}
            <div className="flex justify-center items-center py-2">
              <img
                src="/images/about-dish-transparent.png"
                alt="Midway Mandi - A Taste of Tradition, Made to Share"
                className="w-full max-w-[420px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
              />
            </div>

            {/* 3. Paragraph at the bottom */}
            <p className="font-sans font-light tracking-[0.02em] text-neutral-600 text-sm leading-relaxed">
              Midway Mandi brings the essence of Arabian cuisine to your table, with our signature mandi and a wide range of freshly prepared dishes. Crafted with rich spices, quality ingredients and care, we offer a warm and welcoming dining experience for families and food lovers alike.
            </p>
          </div>

        </div>
      </section>

      {/* ================= 3. SAVOUR THE EXTRAORDINARY (CINEMATIC VIDEO SHOWCASE - WHITE THEME) ================= */}
      <section
        id="savour"
        className="StandardHero--white relative py-16 sm:py-24 bg-white text-black border-t border-neutral-200"
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 text-center space-y-3">
          {/* Small Eyebrow Label */}
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[4px] text-neutral-500 font-medium">
            FEAST CRAFTED WITH LOVE
          </p>

          {/* Heading in Saol Display (Pure Black) */}
          <h2 className="Heading-title font-saol text-black font-light tracking-wide uppercase">
            SAVOUR THE EXTRAORDINARY
          </h2>
        </div>

        {/* Cinematic Video Banner Container (Ready for Video to play) */}
        <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-8 my-8 sm:my-12">
          <div className="savour-video-container border border-neutral-300 shadow-xl group relative">
            {/* HTML5 Video element */}
            <video
              ref={videoRef}
              src="/videos/savour-video.mp4"
              poster="/images/savour-poster.jpg"
              autoPlay
              loop
              muted={isVideoMuted}
              playsInline
              className="w-full h-full object-cover object-center"
            />

            {/* Small Weight Sound Toggle Icon (Bottom Right Side) */}
            <button
              onClick={toggleVideoSound}
              type="button"
              className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/85 text-white/90 hover:text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer hover:scale-105 active:scale-95"
              aria-label={isVideoMuted ? "Turn video sound on" : "Mute video sound"}
              title={isVideoMuted ? "Sound Off (click to turn on)" : "Sound On (click to mute)"}
            >
              {isVideoMuted ? (
                /* Muted: Speaker with slash in small stroke weight */
                <svg
                  className="w-4 h-4 stroke-[1.3]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
                  />
                </svg>
              ) : (
                /* Sound On: Speaker with sound waves in small stroke weight */
                <svg
                  className="w-4 h-4 stroke-[1.3]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Centered Descriptive Text (Black & Charcoal) */}
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
            The finest cuts. The richest flavours. All freshly prepared every day. Step into the world of exquisite culinary experiences, shaped by passion and served with utmost care. Your journey of culinary memories begins here.
          </p>
        </div>
      </section>

      {/* ================= 3. SIGNATURE DISHES & DRINKS (EXACT REFERENCE CAROUSEL LAYOUT) ================= */}
      <SignatureDishesCarousel />

      {/* ================= 4. UNFORGETTABLE DINING EXPERIENCES (OUR 6 BRANCHES) ================= */}
      <DiningExperiences />

      {/* ================= 5. FIND YOUR DINING DESTINATION (ABOVE FOOTER) ================= */}
      <FindDiningDestination />

      {/* ================= 6. FOUR SEASONS STYLE LUXURY FOOTER ================= */}
      <LuxuryFooter />
    </div>
  );
}
