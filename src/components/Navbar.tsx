"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRANCHES } from "@/data/branches";
import { MapPinIcon } from "./Icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Branches", href: "/branches" },
    { name: "About Us", href: "/about" },
    { name: "Contact & Directions", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // 5 towns repeated for smooth continuous train loop (clean city names)
  const townNames = [
    { name: "Manjeri", url: BRANCHES[0]?.googleMapUrl },
    { name: "Perinthalmanna", url: BRANCHES[1]?.googleMapUrl },
    { name: "Vaniyambalam", url: BRANCHES[2]?.googleMapUrl },
    { name: "Nilambur", url: BRANCHES[3]?.googleMapUrl },
    { name: "Valluvambram", url: BRANCHES[4]?.googleMapUrl },
  ];
  const trainLoop = [...townNames, ...townNames, ...townNames];

  return (
    <>
      {/* ================= TOP TICKER: COMPACT TOWN NAMES ================= */}
      <div
        className="text-white py-1 overflow-hidden border-b border-white/10 select-none"
        style={{
          backgroundColor: "#5E090D",
        }}
      >
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-8 sm:gap-12 animate-train whitespace-nowrap will-change-transform">
            {trainLoop.map((item, idx) => (
              <a
                key={`${item.name}-${idx}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-8 text-white/90 hover:text-amber-300 transition-colors cursor-pointer text-[11px] sm:text-xs font-semibold tracking-wider uppercase"
                title={`Open ${item.name} branch on Google Maps`}
              >
                <span>{item.name}</span>
                <span className="text-amber-400/80 font-bold">•</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR: SLEEK, RECTANGULAR, GUARANTEED VISIBLE GLASSY ================= */}
      <header
        className="sticky top-0 z-50 transition-all duration-300 text-white border-b border-white/15 shadow-md"
        style={{
          backgroundColor: "rgba(128, 12, 17, 0.94)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between min-h-[52px]">
          {/* Logo */}
          <Link href="/" className="flex items-center group transition-transform hover:scale-105 shrink-0">
            <img
              src="/images/logo.png"
              alt="Midway Kuzhimandhi"
              className="h-8 sm:h-9 md:h-10 w-auto max-w-[140px] sm:max-w-[170px] object-contain block"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-[13px] lg:text-sm font-semibold tracking-wide transition-all duration-200 whitespace-nowrap ${
                    active
                      ? "bg-white text-[#800C11] shadow-md font-bold"
                      : "text-white/90 hover:text-white hover:bg-white/15"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Clean Branch Button on Desktop */}
          <div className="hidden sm:flex items-center shrink-0">
            <Link
              href="/branches"
              className="px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-bold text-neutral-900 bg-amber-400 hover:bg-amber-300 shadow-md transition-all flex items-center gap-2 hover:scale-105 shrink-0"
            >
              <MapPinIcon className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#800C11]" />
              <span>Branches</span>
            </Link>
          </div>

          {/* Mobile Hamburger Menu Icon (Crisp, High Contrast) */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white hover:text-amber-300 hover:bg-white/15 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer with Glass Effect (Clean Rectangular, No Border Radius) */}
        {isOpen && (
          <div
            className="md:hidden border-t border-white/15 px-4 pt-3 pb-5 space-y-2.5 shadow-2xl"
            style={{
              backgroundColor: "rgba(114, 11, 15, 0.98)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-none text-xs font-medium transition-colors ${
                      active
                        ? "bg-white text-[#800C11] font-bold shadow-sm border-l-4 border-amber-400"
                        : "text-white/90 hover:bg-white/10"
                    }`}
                  >
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-white/15">
              <Link
                href="/branches"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 rounded-none bg-amber-300 hover:bg-amber-200 text-[#800C11] font-bold text-xs shadow flex items-center justify-center gap-1.5 uppercase tracking-wider transition-colors"
              >
                <MapPinIcon className="w-3.5 h-3.5" />
                <span>View All Branches on Map</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
