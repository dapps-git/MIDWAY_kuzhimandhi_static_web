import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon, FlameIcon, ArrowRightIcon } from "@/components/Icons";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/60 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#A81B1E]" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[#A81B1E]">
            Our Heritage & Story
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-neutral-900 tracking-tight">
          The Midway Kuzhimandhi Story
        </h1>
        <p className="text-neutral-500 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-light">
          Rooted in ancient Yemeni culinary art and infused with the rich coastal soul of Kerala, we preserve the authentic underground clay-pit cooking tradition.
        </p>
      </div>

      {/* Story & Image Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/images/hero-mandhi.jpg"
              alt="Midway Kuzhimandi Tradition"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-3 py-1 rounded-full bg-[#A81B1E] text-xs font-bold uppercase tracking-wider">
                Clay-Pit Smoked Daily
              </span>
              <p className="text-2xl font-bold mt-2">
                Honoring Century-Old Smoked Mandhi Traditions
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A81B1E]">
              WHERE PASSION MEETS FIRE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
              From a Single Underground Pit to 5 Thriving Outlets
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Midway Kuzhimandhi was founded on a simple, uncompromising promise: to serve authentic Kuzhimandhi just as it was meant to be made — cooked slowly underground with glowing coconut shell embers, handpicked Yemeni whole spices, and the finest basmati rice.
            </p>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              What began as a passionate stop along Kerala&apos;s highways quickly captured the hearts of food lovers, families, and road trippers. Today, our 5 branches serve thousands of guests daily while preserving the exact artisanal recipe and warmth of hospitality that made us a household name.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100">
                <span className="font-bold text-2xl text-[#A81B1E]">5 Outlets</span>
                <p className="text-neutral-600 text-xs mt-1">Conveniently situated across prime locations in Kerala</p>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                <span className="font-bold text-2xl text-neutral-900">100% Halal</span>
                <p className="text-neutral-600 text-xs mt-1">Daily fresh poultry & premium cut meats only</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-[#FCFAF8] py-16 sm:py-20 mt-20 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A81B1E]">
              OUR FOUNDATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mt-1">
              The Four Pillars of Midway
            </h2>
            <p className="text-neutral-500 text-sm mt-2">
              Every platter that arrives at your table reflects our dedication to culinary integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#A81B1E] flex items-center justify-center mb-4">
                <FlameIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">True Underground Pit</h3>
              <p className="text-neutral-500 text-xs sm:text-sm mt-2 leading-relaxed">
                We never compromise with convection ovens. Authentic earthen pits give the distinct wood-smoke aroma you crave.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#A81B1E] flex items-center justify-center mb-4">
                <span className="font-bold text-xl text-[#A81B1E]">🌿</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900">Unadulterated Spices</h3>
              <p className="text-neutral-500 text-xs sm:text-sm mt-2 leading-relaxed">
                Imported Yemeni black lime, whole green cardamoms, cinnamon quills, and saffron threads sourced directly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#A81B1E] flex items-center justify-center mb-4">
                <CheckCircleIcon className="w-6 h-6 text-[#A81B1E]" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">Unmatched Hygiene</h3>
              <p className="text-neutral-500 text-xs sm:text-sm mt-2 leading-relaxed">
                Stainless-steel prep kitchens, certified halal procurement, and rigorous food quality tests before every batch.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#A81B1E] flex items-center justify-center mb-4">
                <span className="font-bold text-xl text-[#A81B1E]">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900">Generous Malabar Hospitality</h3>
              <p className="text-neutral-500 text-xs sm:text-sm mt-2 leading-relaxed">
                Unlimited fragrant Mandhi rice refills for every guest, attentive service, and comfortable air-conditioned family spaces.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">
          Come, Feast with Family & Friends
        </h3>
        <p className="text-neutral-500 text-sm mt-2 max-w-md mx-auto">
          Visit any of our 5 branches or order online to taste the difference authentic pit cooking makes.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/branches"
            className="px-8 py-3 rounded-full bg-[#A81B1E] text-white font-bold text-sm shadow hover:bg-[#8D1618] transition-colors"
          >
            Explore 5 Branches
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full border border-neutral-300 text-neutral-800 hover:border-[#A81B1E] hover:text-[#A81B1E] font-bold text-sm transition-colors"
          >
            Contact & Directions
          </Link>
        </div>
      </div>
    </div>
  );
}

