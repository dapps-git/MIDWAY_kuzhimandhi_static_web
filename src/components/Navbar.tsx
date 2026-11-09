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

  // 5 towns repeated for smooth continuous train loop (No "5 branches" text, no icons, just clean city names)
  const townNames = [
    { name: "Manjeri", url: BRANCHES[0]?.googleMapUrl },
    { name: "Perinthalmanna", url: BRANCHES[1]?.googleMapUrl },
    { name: "Vaniyambalam", url: BRANCHES[2]?.googleMapUrl },
    { name: "Nilambur", url: BRANCHES[3]?.googleMapUrl },
    { name: "Valluvalmbram", url: BRANCHES[4]?.googleMapUrl },
  ];
  const trainLoop = [...townNames, ...townNames, ...townNames];

  return (
    <>
      {/* ================= TOP NAVBAR: CLEAN TOWN NAMES TRAIN (NO ICONS, NO "5 BRANCHES" TEXT) ================= */}
      <div
        className="text-white py-1.5 overflow-hidden border-b border-red-950 select-none"
        style={{ backgroundColor: "#6B0A0E" }}
      >
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-10 sm:gap-14 animate-train whitespace-nowrap will-change-transform">
            {trainLoop.map((item, idx) => (
              <a
                key={`${item.name}-${idx}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-10 text-white/95 hover:text-amber-300 transition-colors cursor-pointer text-xs sm:text-[13px] font-semibold tracking-wide uppercase"
                title={`Open ${item.name} branch on Google Maps`}
              >
                <span>{item.name}</span>
                <span className="text-amber-400/80 font-bold">•</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR (RED WAVE HEADER MATCHING MOCKUP) ================= */}
      <header
        className="sticky top-0 z-50 transition-all duration-300 text-white shadow-md"
        style={{ backgroundColor: "#800C11" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between">
          {/* Logo on Deep Red Background */}
          <Link href="/" className="flex items-center group transition-transform hover:scale-105">
            <img
              src="/images/logo.png"
              alt="Midway Kuzhimandhi"
              className="h-10 sm:h-13 w-auto max-w-[190px] sm:max-w-[220px] object-contain block"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    active
                      ? "bg-white text-[#800C11] shadow"
                      : "text-white/90 hover:text-amber-300 hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Clean Branch Button on Desktop */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              href="/branches"
              className="px-4 py-2 rounded-full text-xs font-bold text-[#800C11] bg-amber-300 hover:bg-amber-200 shadow transition-all flex items-center gap-1.5"
            >
              <MapPinIcon className="w-3.5 h-3.5" />
              <span>Branches</span>
            </Link>
          </div>

          {/* Mobile Clean White Hamburger Menu Icon */}
          <div className="flex md:hidden items-center space-x-1">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white hover:text-amber-300 hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Subtle Wave Divider at bottom of header */}
        <div className="w-full overflow-hidden leading-none -mb-1">
          <svg className="w-full h-3" style={{ fill: "#FFFFFF" }} viewBox="0 0 1200 12" preserveAspectRatio="none">
            <path d="M0,0 C300,12 900,12 1200,0 L1200,12 L0,12 Z" />
          </svg>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div
            className="md:hidden border-t border-red-900 px-4 pt-3 pb-6 space-y-2.5 shadow-2xl"
            style={{ backgroundColor: "#720B0F" }}
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      active
                        ? "bg-white text-[#800C11] font-bold"
                        : "text-white/90 hover:bg-white/10"
                    }`}
                  >
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/15">
              <Link
                href="/branches"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 rounded-full bg-amber-300 text-[#800C11] font-bold text-xs shadow flex items-center justify-center gap-1.5"
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
