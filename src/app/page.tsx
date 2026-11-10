import React from "react";
import Link from "next/link";
import { BRANCHES, SOCIAL_LINKS } from "@/data/branches";
import {
  FlameIcon,
  StarIcon,
  MapPinIcon,
  WhatsAppIcon
} from "@/components/Icons";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-white text-neutral-900">
      {/* ================= HERO SECTION (CLEAR VIBRANT BANNER, OVERLAID TEXT & COMPACT FEATURE CARD) ================= */}
      <section className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Banner Image (Crisp & vivid, no foggy haze) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-dish.jpg"
            alt="Midway Kuzhimandhi Hero Banner"
            className="w-full h-full object-cover object-center transform scale-100"
          />
          {/* Light, crystal-clear contrast overlay (NO foggy effect) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
        </div>

        {/* Content Layer (Overlaid on top of the hero banner image) */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex flex-col items-center justify-between min-h-[460px] sm:min-h-[520px]">
          {/* Main Top/Center Hero Content */}
          <div className="flex flex-col items-center text-center mt-4 sm:mt-6">
            {/* Top Label: — AUTHENTIC — */}
            <div className="flex items-center justify-center gap-3 mb-1">
              <span className="w-8 sm:w-12 h-px bg-amber-400 opacity-90" />
              <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold text-amber-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                A U T H E N T I C
              </span>
              <span className="w-8 sm:w-12 h-px bg-amber-400 opacity-90" />
            </div>

            {/* Headline: Kuzhimandhi (Reduced font weight as requested) */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] mt-1">
              Kuzhimandhi
            </h1>

            {/* Subtitle: Rich Taste. Traditional Feel. */}
            <p className="italic text-base sm:text-xl md:text-2xl font-light mt-1.5 text-amber-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              Rich Taste. Traditional Feel.
            </p>

            {/* Petite 3-Column Floating Feature Card with Guaranteed Small Text Size */}
            <div className="w-full max-w-[190px] sm:max-w-[210px] bg-white/95 backdrop-blur-md rounded-xl border border-neutral-200/90 shadow-md py-1 px-1 mt-2.5 sm:mt-3 grid grid-cols-3 divide-x divide-neutral-200 text-neutral-900">
              {/* Col 1: Authentic Flavors */}
              <div className="flex flex-col items-center justify-center px-0.5 py-0.5 text-center">
                <svg className="w-3 h-3 mb-0.5 shrink-0" style={{ color: "#800C11" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 14v4a2 2 0 002 2h8a2 2 0 002-2v-4M4 14a4 4 0 012.828-6.828A4.975 4.975 0 0112 5a4.975 4.975 0 015.172 2.172A4 4 0 0120 14H4z" />
                </svg>
                <span
                  style={{ fontSize: "8px", lineHeight: "1.15" }}
                  className="font-normal text-neutral-800 tracking-tight block"
                >
                  Authentic<br />Flavors
                </span>
              </div>

              {/* Col 2: Freshly Prepared */}
              <div className="flex flex-col items-center justify-center px-0.5 py-0.5 text-center">
                <svg className="w-3 h-3 mb-0.5 shrink-0" style={{ color: "#800C11" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <span
                  style={{ fontSize: "8px", lineHeight: "1.15" }}
                  className="font-normal text-neutral-800 tracking-tight block"
                >
                  Freshly<br />Prepared
                </span>
              </div>

              {/* Col 3: A Delightful Experience */}
              <div className="flex flex-col items-center justify-center px-0.5 py-0.5 text-center">
                <svg className="w-3 h-3 mb-0.5 shrink-0" style={{ color: "#800C11" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span
                  style={{ fontSize: "8px", lineHeight: "1.15" }}
                  className="font-normal text-neutral-800 tracking-tight block"
                >
                  A Delightful<br />Experience
                </span>
              </div>
            </div>
          </div>

          {/* Explore 5 Branches Placed at Bottom of Hero Section */}
          <div className="mt-8 sm:mt-12 mb-3 sm:mb-4 z-20">
            <Link
              href="#branches-section"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wide text-amber-300 hover:text-white transition-colors cursor-pointer group drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] bg-black/45 backdrop-blur-sm px-4 py-1.5 rounded-full border border-amber-300/40 hover:border-amber-300"
            >
              <span className="underline underline-offset-4 decoration-amber-400/80">Explore 5 Branches</span>
              <span className="text-amber-300 group-hover:translate-x-1 transition-transform font-bold">➔</span>
            </Link>
          </div>
        </div>

        {/* Bottom Curved Wave Transition to Clean White Section */}
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full overflow-hidden leading-none pointer-events-none">
          <svg className="w-full h-8 sm:h-12" style={{ fill: "#FFFFFF" }} viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,90 800,90 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* ================= ABOUT US SECTION (CLEAN WHITE BG, 2-COL ON LAPTOP) ================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-white">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-1">
            <span className="w-8 sm:w-12 h-px" style={{ backgroundColor: "#800C11", opacity: 0.5 }} />
            <span
              className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold"
              style={{ color: "#800C11" }}
            >
              ABOUT US
            </span>
            <span className="w-8 sm:w-12 h-px" style={{ backgroundColor: "#800C11", opacity: 0.5 }} />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "#800C11" }}>
            Our Story
          </h2>

          <p className="italic text-sm sm:text-base text-neutral-600 font-light mt-1">
            A Taste of Tradition, A Promise of Quality
          </p>
        </div>

        {/* 2-Column on Laptop View: Paragraph on Left Side, Image on Right Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Paragraph Text */}
          <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed font-light text-left">
            <p>
              <strong className="font-semibold text-neutral-900">Midway Kuzhimandhi</strong> is more than just a restaurant — it&apos;s a celebration of authentic flavors, warm hospitality, and a passionate love for good food.
            </p>
            <p>
              With a rich heritage in Kerala&apos;s culinary culture, we bring the true taste of Kuzhimandhi to you, crafted with love and served with care.
            </p>
            <p className="text-neutral-500 text-[11px] sm:text-xs italic font-light pt-2 border-t border-neutral-100">
              Slow underground clay-pit smoking • 14 secret Yemeni spices • Unlimited fragrant Mandhi rice.
            </p>
          </div>

          {/* Right Column: Authentic Mandhi Dish Image (Clean, Borderless) */}
          <div className="lg:col-span-6 flex items-center justify-center p-2 sm:p-4">
            <div className="relative w-full max-w-[290px] sm:max-w-[320px] aspect-square transition-transform duration-500 hover:scale-105">
              <img
                src="/images/about-dish.png"
                alt="Midway Kuzhimandhi Platter"
                className="w-full h-full object-contain filter drop-shadow-[0_16px_30px_rgba(128,12,17,0.20)]"
              />
            </div>
          </div>
        </div>

        {/* ================= OUR BRANCHES SHOWCASE (MAP LOCATION IMAGES INSTEAD OF GENERIC PHOTOS) ================= */}
        <div id="branches-section" className="mt-14 sm:mt-18 text-center scroll-mt-20">
          <div className="flex items-center justify-center gap-3 mb-1">
            <span className="w-8 sm:w-12 h-px" style={{ backgroundColor: "#800C11", opacity: 0.5 }} />
            <span
              className="text-lg sm:text-xl font-extrabold tracking-tight"
              style={{ color: "#800C11" }}
            >
              Our Branches
            </span>
            <span className="w-8 sm:w-12 h-px" style={{ backgroundColor: "#800C11", opacity: 0.5 }} />
          </div>

          <p className="italic text-xs sm:text-sm text-neutral-600 font-light mb-6">
            Find a Midway Kuzhimandhi near you • Tap any branch for outlet details & Google Map location
          </p>

          {/* 5 Branches: 3 cards top, 2 cards centered bottom with perfectly balanced widths */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {BRANCHES.map((branch) => (
              <Link
                key={branch.id}
                href={`/branches/${branch.id}`}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1 block text-left flex flex-col"
              >
                <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-neutral-900 border-b border-neutral-100">
                  <img
                    src={branch.image}
                    alt={`${branch.area} Storefront`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-bold drop-shadow">{branch.area}</span>
                    <span className="text-[10px] font-semibold bg-[#800C11] px-2.5 py-0.5 rounded-full shadow-sm">
                      View Page →
                    </span>
                  </div>
                </div>
                <div className="py-3 px-3.5 flex items-center justify-between text-center bg-white mt-auto">
                  <div className="flex items-center gap-1.5">
                    <MapPinIcon className="w-3.5 h-3.5 shrink-0" style={{ color: "#800C11" }} />
                    <span className="font-semibold text-xs sm:text-sm text-neutral-900 group-hover:text-[#800C11] transition-colors">
                      {branch.area}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-neutral-500 group-hover:text-[#800C11] transition-colors">
                    Location & Info →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= THE PIT HERITAGE SECTION ================= */}
      <section className="py-12 sm:py-16 bg-neutral-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-500/30 text-amber-300 text-xs font-medium uppercase tracking-wider">
                <FlameIcon className="w-3.5 h-3.5 text-amber-400" />
                Underground Clay Pit Tradition
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                Smoked in Clay, <br />
                <span className="text-amber-400">Perfected by Fire</span>
              </h2>

              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">
                At Midway Kuzhimandhi, our Mandhi is cooked underground with glowing coconut shell embers. Fresh meat juices drip down into the saffron-kissed basmati, creating an authentic wood-smoked aroma.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-2.5">
                  <div
                    className="w-4.5 h-4.5 rounded-full text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold"
                    style={{ backgroundColor: "#800C11" }}
                  >
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-xs sm:text-sm">Fat-Dripping Flavor Infusion</h4>
                    <p className="text-neutral-400 text-[11px] sm:text-xs font-light">
                      Natural meat drippings baste the rice pot continuously during the 3-hour smoke.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div
                    className="w-4.5 h-4.5 rounded-full text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold"
                    style={{ backgroundColor: "#800C11" }}
                  >
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-xs sm:text-sm">Sun-Dried Yemeni Black Lime (Loomi)</h4>
                    <p className="text-neutral-400 text-[11px] sm:text-xs font-light">
                      Gives our spiced rice its signature deep citrus aroma.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border-4 border-neutral-800 shadow-xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                  alt="Pit Smoked Meat"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-black font-extrabold text-[10px] uppercase">
                    5 Active Branches in Kerala
                  </span>
                  <p className="text-white text-base sm:text-lg font-bold mt-1">
                    Open Every Day: 11:30 AM – 12:00 Midnight
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#800C11" }}>
              GUEST EXPERIENCES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mt-1">
              Kerala&apos;s Top Rated Kuzhimandhi
            </h2>
            <div className="flex items-center justify-center gap-1 text-amber-500 mt-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              ))}
              <span className="text-neutral-700 font-medium text-xs sm:text-sm ml-2">4.9 / 5.0 (2,400+ Google Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-[#FCFAF8] border border-neutral-200/80 shadow-xs flex flex-col justify-between text-left">
              <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed italic font-light">
                &ldquo;Undoubtedly the most authentic Kuzhimandhi in Kerala. The meat is tender to the bone, and the fat-infused rice has unbeatable flavor!&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-neutral-900 text-xs sm:text-sm">Faisal Rahman</h4>
                  <span className="text-[10px] text-neutral-500 font-light">Regular Highway Guest</span>
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#FDF2F2", color: "#800C11" }}>5.0 ★</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FCFAF8] border border-neutral-200/80 shadow-xs flex flex-col justify-between text-left">
              <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed italic font-light">
                &ldquo;Visited their Nilambur branch with family. Spacious AC hall, lightning fast service, and unlimited Mandhi rice. 10/10!&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-neutral-900 text-xs sm:text-sm">Anjali Menon</h4>
                  <span className="text-[10px] text-neutral-500 font-light">Family Dining</span>
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#FDF2F2", color: "#800C11" }}>5.0 ★</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FCFAF8] border border-neutral-200/80 shadow-xs flex flex-col justify-between text-left">
              <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed italic font-light">
                &ldquo;Clean packaging, piping hot delivery, and consistent taste across Manjeri, Perinthalmanna and all branches whenever we travel.&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-neutral-900 text-xs sm:text-sm">Mohammed Shafi</h4>
                  <span className="text-[10px] text-neutral-500 font-light">Traveller Review</span>
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#FDF2F2", color: "#800C11" }}>5.0 ★</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
