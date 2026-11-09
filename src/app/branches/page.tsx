import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BRANCHES, SOCIAL_LINKS } from "@/data/branches";
import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  CheckCircleIcon,
  WhatsAppIcon,
  ArrowRightIcon
} from "@/components/Icons";

export default function BranchesPage() {
  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      {/* Branches Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/60 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#A81B1E]" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[#A81B1E]">
            Across Kerala
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-neutral-900 tracking-tight">
          Our 5 Outlets & Hub Locations
        </h1>
        <p className="text-neutral-500 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-light">
          Whether you&apos;re travelling on the highway or in the heart of town, authentic Midway Kuzhimandhi is never far away. Visit your nearest outlet today!
        </p>

        {/* Central Map Banner Shortcut */}
        <div className="mt-8 max-w-xl mx-auto p-4 rounded-2xl bg-red-50/70 border border-red-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#A81B1E] text-white flex items-center justify-center shrink-0 shadow-sm">
              <MapPinIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#A81B1E] font-bold uppercase tracking-wider">
                Midway Mandhi Central Location
              </p>
              <p className="text-xs text-neutral-600">
                Main Kerala Flagship Hub & Kitchen
              </p>
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/3X4Bq2YbFwvkiKes9"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#A81B1E] hover:bg-[#8F1619] text-white text-xs font-bold text-center transition-colors shadow"
          >
            Open in Google Maps
          </a>
        </div>
      </div>

      {/* Branches List Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18 space-y-10">
        {BRANCHES.map((branch, index) => (
          <div
            key={branch.id}
            className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Left Image */}
            <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[240px] bg-neutral-900">
              <Image
                src={branch.image}
                alt={branch.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#A81B1E] text-white font-bold text-xs uppercase shadow">
                  Outlet #{index + 1}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xl font-bold">{branch.name}</p>
                <p className="text-xs text-amber-300 font-medium">{branch.area}</p>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-100 pb-4">
                  <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open Now • Dine-in & Takeaway
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                    <ClockIcon className="w-4 h-4 text-neutral-400" />
                    <span>{branch.timing}</span>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <MapPinIcon className="w-5 h-5 text-[#A81B1E] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold uppercase text-neutral-400">Address & Location</p>
                      <p className="text-sm font-medium text-neutral-800 leading-relaxed mt-0.5">
                        {branch.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2">
                    <PhoneIcon className="w-5 h-5 text-[#A81B1E] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold uppercase text-neutral-400">Direct Hotline</p>
                      <a
                        href={`tel:${branch.phone}`}
                        className="text-sm font-bold text-[#A81B1E] hover:underline"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Features Pill tags */}
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase text-neutral-400 mb-2">Amenities</p>
                  <div className="flex flex-wrap gap-2">
                    {branch.features.map((feat) => (
                      <span
                        key={feat}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700 flex items-center gap-1.5"
                      >
                        <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-600" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons row with the provided Google Link */}
              <div className="pt-4 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={branch.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#A81B1E] hover:bg-[#8E1517] text-white text-xs font-bold text-center flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MapPinIcon className="w-4 h-4 text-amber-200" />
                  <span>Google Maps Link</span>
                </a>

                <a
                  href={`tel:${branch.phone}`}
                  className="py-3 px-4 rounded-xl border border-neutral-300 hover:border-[#A81B1E] text-neutral-800 hover:text-[#A81B1E] text-xs font-bold text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <PhoneIcon className="w-4 h-4 text-[#A81B1E]" />
                  <span>Call Branch</span>
                </a>

                <a
                  href={`https://wa.me/${branch.whatsapp}?text=Hello%20${encodeURIComponent(branch.name)},%20I%20would%20like%20to%20get%20location%20details%20and%20timings`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold text-center flex items-center justify-center gap-2 transition-colors border border-emerald-200"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Branch</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="p-8 rounded-3xl bg-neutral-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-2xl font-bold">Have Questions About Branch Timings or Directions?</h3>
            <p className="text-neutral-400 text-sm mt-1">Our customer desk is active 7 days a week from 11:00 AM to midnight.</p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full bg-[#A81B1E] hover:bg-[#8D1618] text-white font-bold text-sm shrink-0 transition-all shadow"
          >
            Contact Customer Desk
          </Link>
        </div>
      </div>
    </div>
  );
}

