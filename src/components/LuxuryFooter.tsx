"use client";

import React from "react";
import Link from "next/link";

export default function LuxuryFooter() {
  return (
    <footer className="bg-black text-white pt-20 sm:pt-28 pb-12 px-5 sm:px-8 border-t border-neutral-900 select-none">
      <div className="max-w-[1360px] mx-auto space-y-16 sm:space-y-20">
        
        {/* Top Centered Brand Emblem & Title matching Four Seasons */}
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <Link href="/" className="group flex flex-col items-center">
            <img
              src="/images/midway-logo-white.png"
              alt="Midway Mandi Emblem"
              className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-serif text-lg sm:text-xl tracking-[5px] sm:tracking-[7px] text-white uppercase font-normal mt-3">
              MIDWAY MANDI
            </span>
            <span className="text-[9px] uppercase tracking-[4px] text-neutral-400 font-light mt-0.5">
              AUTHENTIC ARABIAN RESTAURANT
            </span>
          </Link>
        </div>

        {/* Navigation Columns: About & Destinations in Refined Lightweight Four Seasons Style */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-around max-w-2xl mx-auto gap-12 sm:gap-20 pt-2 text-center sm:text-left">
          
          {/* Column 1: About */}
          <div className="space-y-4">
            <h4 className="font-serif italic text-base sm:text-lg text-white font-normal">
              About
            </h4>
            <ul className="space-y-3 text-[11px] sm:text-xs uppercase tracking-[2.5px] font-light text-neutral-300 font-sans">
              <li>
                <Link href="#story" className="hover:text-white transition-colors">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href="#story" className="hover:text-white transition-colors">
                  OUR STORY
                </Link>
              </li>
              <li>
                <Link href="#savour" className="hover:text-white transition-colors">
                  SAVOUR EXPERIENCE
                </Link>
              </li>
              <li>
                <Link href="#branches" className="hover:text-white transition-colors">
                  OUR BRANCHES
                </Link>
              </li>
              <li>
                <Link href="#destinations" className="hover:text-white transition-colors">
                  LOCATIONS &amp; CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Destinations (Our 6 Outlets) */}
          <div className="space-y-4">
            <h4 className="font-serif italic text-base sm:text-lg text-white font-normal">
              Destinations
            </h4>
            <ul className="space-y-3 text-[11px] sm:text-xs uppercase tracking-[2.5px] font-light text-neutral-300 font-sans">
              <li>
                <Link href="/branches/valluvambram" className="hover:text-white transition-colors">
                  VALLUVAMBRAM (HUB)
                </Link>
              </li>
              <li>
                <Link href="/branches/manjeri-kacherippadi" className="hover:text-white transition-colors">
                  MANJERI KACHERIPPADI
                </Link>
              </li>
              <li>
                <Link href="/branches/manjeri-jaseela" className="hover:text-white transition-colors">
                  MANJERI JASEELA
                </Link>
              </li>
              <li>
                <Link href="/branches/perinthalmanna" className="hover:text-white transition-colors">
                  PERINTHALMANNA
                </Link>
              </li>
              <li>
                <Link href="/branches/vaniyambalam" className="hover:text-white transition-colors">
                  VANIYAMBALAM
                </Link>
              </li>
              <li>
                <Link href="/branches/nilambur" className="hover:text-white transition-colors">
                  NILAMBUR
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar matching Four Seasons: Horizontal Rule + Social Icons on Left */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Social Icons on Bottom Left */}
          <div className="flex items-center gap-5">
            {/* Facebook */}
            <a
              href="https://facebook.com/midwaykuzhimandi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-neutral-400 transition-colors"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/midway_mandi_?exln=MTNybzJscGViaWU4dA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-neutral-400 transition-colors"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white hover:text-neutral-400 transition-colors"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919846726016"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white hover:text-neutral-400 transition-colors"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
            </a>
          </div>

          {/* Minimal Copyright and Legal links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2 text-[10px] uppercase tracking-[1.5px] text-neutral-500 font-light">
            <span>© {new Date().getFullYear()} MIDWAY KUZHIMANDI. ALL RIGHTS RESERVED.</span>
            <span className="hidden sm:inline">·</span>
            <Link href="#story" className="hover:text-neutral-300 transition-colors">
              PRIVACY POLICY
            </Link>
            <span>·</span>
            <Link href="#menu" className="hover:text-neutral-300 transition-colors">
              TERMS OF SERVICE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

