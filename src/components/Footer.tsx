import React from "react";
import Link from "next/link";
import { BRANCHES, SOCIAL_LINKS } from "@/data/branches";
import { InstagramIcon } from "./Icons";

export default function Footer() {
  const branchContacts = [
    {
      name: "Valluvambram",
      phone: "98467 26016",
      tel: "+919846726016",
      mapUrl: "https://share.google/55JGzrgWOf3GIsw3v",
    },
    {
      name: "Manjeri (Kacherippadi)",
      phone: "98467 26726",
      tel: "+919846726726",
      mapUrl: "https://share.google/lVKHQ06SeLY8jZkWz",
    },
    {
      name: "Manjeri (Jaseela Jdn)",
      phone: "98467 26393",
      tel: "+919846726393",
      mapUrl: "https://share.google/lVKHQ06SeLY8jZkWz",
    },
    {
      name: "Perinthalmanna",
      phone: "85929 00222",
      tel: "+918592900222",
      mapUrl: "https://share.google/MvKYdd5kWhuyNhD6r",
    },
    {
      name: "Vaniyambalam",
      phone: "88919 26726",
      tel: "+918891926726",
      mapUrl: "https://share.google/ZYmOkfYjn6hLYO3o1",
    },
    {
      name: "Nilambur",
      phone: "77364 26726",
      tel: "+917736426726",
      mapUrl: "https://share.google/1jP62omT1CnTnUEJ7",
    },
  ];

  return (
    <footer className="bg-black text-white pt-12 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 select-none">
      <div className="max-w-7xl mx-auto">
        {/* Main 4-Column Grid matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-12 border-b border-neutral-800/80">
          {/* Column 1: Logo & Short Description (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <img
                src="/images/logo.png"
                alt="Midway Kuzhimandhi"
                className="h-12 w-auto object-contain block"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="text-xs sm:text-[13px] text-neutral-400 font-light leading-relaxed max-w-sm">
              Midway Kuzhimandhi - Authentic wood-smoked Arabian pit Mandhi crafted with secret spices across Kerala.
            </p>
          </div>

          {/* Column 2: BRANCHES & CONTACT NUMBERS (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white mb-4">
              BRANCHES &amp; ORDERS
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-light">
              {branchContacts.map((branch) => (
                <li
                  key={branch.name}
                  className="flex items-center justify-between gap-3 border-b border-neutral-900 pb-1.5"
                >
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1 group"
                    title={`Open ${branch.name} on Google Maps`}
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform font-medium">
                      {branch.name}
                    </span>
                    <span className="text-[10px] text-neutral-500 group-hover:text-amber-400 transition-colors">↗</span>
                  </a>
                  <a
                    href={`tel:${branch.tel}`}
                    className="text-white/80 hover:text-white font-light tracking-wider transition-colors text-xs sm:text-[13px] shrink-0"
                    title={`Call ${branch.name} (${branch.phone})`}
                  >
                    {branch.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: QUICK LINKS (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-light">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/branches" className="text-neutral-400 hover:text-white transition-colors">
                  Our Branches
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: GET IN TOUCH (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white mb-4">
              GET IN TOUCH
            </h3>

            <div>
              <p className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium">
                Main Hotline / WhatsApp:
              </p>
              <div className="mt-1">
                <a
                  href="tel:+919846726016"
                  className="inline-block px-2.5 py-1 rounded bg-[#B34700]/80 hover:bg-[#B34700] text-white text-xs sm:text-[13px] font-medium tracking-wide transition-colors"
                >
                  +91 98467 26016
                </a>
              </div>
            </div>

            <div>
              <p className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium">
                Instagram:
              </p>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 text-xs sm:text-[13px] text-neutral-300 hover:text-amber-400 font-light transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                <span>@midway_mandi_</span>
              </a>
            </div>

            <div>
              <p className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium">
                Timings:
              </p>
              <p className="text-xs sm:text-[13px] text-neutral-300 font-light">
                Daily: 11:30 AM – 12:00 Midnight
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar matching reference */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center text-center gap-2 text-xs text-neutral-500 font-light">
          <p>© {new Date().getFullYear()} Midway Kuzhimandhi. All Rights Reserved.</p>

        <p className="mt-2 text-xs opacity-75 text-center">
          Powered by{" "}
          <a
            href="https://www.crevionads.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline hover:opacity-100 transition-opacity"
          >
            Crevion Ads
          </a>
        </p>
        </div>
      </div>
    </footer>
  );
}
