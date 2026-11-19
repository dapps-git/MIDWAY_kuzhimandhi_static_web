"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function LuxuryHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-[#D6B477]/15 transition-all">
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 py-2.5 sm:py-3.5 flex items-center justify-between min-h-[72px] sm:min-h-[82px]">
          
          {/* Desktop Left Nav Links (Balanced on Left Side) */}
          <nav className="hidden lg:flex items-center gap-10 flex-1 justify-end pr-20">
            <Link
              href="/#hero"
              className="text-xs uppercase tracking-[2.5px] text-white hover:text-neutral-300 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/#story"
              className="text-xs uppercase tracking-[2.5px] text-neutral-400 hover:text-white transition-colors font-medium"
            >
              Our Story
            </Link>
          </nav>

          {/* Centered Restaurant Logo (Larger Luxury Size & 100% Dead Center) */}
          <div className="flex items-center justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
            <Link href="/" className="flex flex-col items-center group py-1" aria-label="Midway Mandi Home">
              <img
                src="/images/midway-logo-white.png"
                alt="Midway Mandi Logo"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              />
            </Link>
          </div>

          {/* Desktop Right Nav Links (Balanced on Right Side) */}
          <nav className="hidden lg:flex items-center gap-10 flex-1 justify-start pl-20">
            <Link
              href="/#savour"
              className="text-xs uppercase tracking-[2.5px] text-neutral-400 hover:text-white transition-colors font-medium"
            >
              Savour
            </Link>
            <Link
              href="/#branches"
              className="text-xs uppercase tracking-[2.5px] text-neutral-400 hover:text-white transition-colors font-medium"
            >
              Branches
            </Link>
          </nav>

          {/* Mobile Hamburger Toggle Icon (ONLY visible on mobile, completely hidden on lg/desktop view) */}
          <div className="flex lg:hidden items-center ml-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-neutral-300 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0A0A] border-b border-white/10 px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3.5">
              <Link
                href="/#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-[2px] text-white hover:text-neutral-300 uppercase"
              >
                Home
              </Link>
              <Link
                href="/#story"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-[2px] text-neutral-400 hover:text-white uppercase"
              >
                Our Story
              </Link>
              <Link
                href="/#savour"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-[2px] text-neutral-400 hover:text-white uppercase"
              >
                Savour
              </Link>
              <Link
                href="/#branches"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-[2px] text-neutral-400 hover:text-white uppercase"
              >
                Our 6 Branches
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
