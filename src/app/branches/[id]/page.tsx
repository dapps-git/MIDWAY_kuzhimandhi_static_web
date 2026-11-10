import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BRANCHES, getBranchById } from "@/data/branches";
import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  CheckCircleIcon,
  WhatsAppIcon,
  ArrowRightIcon
} from "@/components/Icons";

export function generateStaticParams() {
  const params = BRANCHES.map((branch) => ({ id: branch.id }));
  // Add common aliases
  params.push({ id: "valluvambram" });
  return params;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const branch = getBranchById(id);
  if (!branch) {
    return { title: "Branch Not Found | Midway Kuzhimandhi" };
  }
  return {
    title: `${branch.name} | Midway Kuzhimandhi Location & Contact`,
    description: branch.description || `Visit ${branch.name}. ${branch.address}. Phone: ${branch.phone}`
  };
}

export default async function BranchDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const branch = getBranchById(id);

  if (!branch) {
    notFound();
  }

  // Related branches
  const otherBranches = BRANCHES.filter((b) => b.id !== branch.id);

  // Google Maps embed URL
  const embedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    branch.name + " " + branch.address
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="bg-white min-h-screen py-8 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
          <Link href="/" className="hover:text-[#800C11] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/branches" className="hover:text-[#800C11] transition-colors">
            Our Branches
          </Link>
          <span>/</span>
          <span className="font-semibold text-neutral-900">{branch.area}</span>
        </nav>

        {/* Branch Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-neutral-100">
          <div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              {branch.name}
            </h1>
            <p className="text-neutral-500 text-sm mt-1.5 flex items-center gap-1.5">
              <MapPinIcon className="w-4 h-4 text-[#800C11] shrink-0" />
              <span>{branch.address}</span>
            </p>
          </div>

          <div className="flex flex-row items-center gap-2 sm:gap-3">
            <a
              href={branch.googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#800C11" }}
              className="px-4 py-2.5 rounded-xl text-white text-xs font-bold transition-all shadow hover:opacity-90 flex items-center gap-1.5"
            >
              <MapPinIcon className="w-4 h-4 text-amber-200" />
              <span>Maps</span>
            </a>
            <a
              href={`tel:${branch.phone}`}
              style={{ backgroundColor: "#FFFFFF", borderColor: "#800C11", borderWidth: "1px", color: "#800C11" }}
              className="px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 hover:bg-neutral-50"
            >
              <PhoneIcon className="w-4 h-4 text-[#800C11]" />
              <span>Call</span>
            </a>
            <a
              href={`https://wa.me/${branch.whatsapp}?text=Hello%20${encodeURIComponent(
                branch.name
              )},%20I%20would%20like%20to%20get%20location%20details%20and%20timings`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#10b981" }}
              className="px-4 py-2.5 rounded-xl text-white text-xs font-bold transition-all shadow hover:opacity-90 flex items-center gap-1.5"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Main Grid: Storefront Image & Branch Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-start">
          {/* Left Column: Real Storefront Photo */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-neutral-900 group">
              <Image
                src={branch.image}
                alt={`${branch.name} Exterior Storefront`}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="px-3 py-1 rounded-full bg-[#800C11] text-[11px] font-bold uppercase tracking-wider">
                  Storefront View
                </span>
                <p className="text-xl sm:text-2xl font-bold mt-2 text-white drop-shadow">
                  {branch.area} Outlet
                </p>
                <p className="text-xs text-neutral-200 mt-1 drop-shadow">
                  {branch.address}
                </p>
              </div>
            </div>

            {/* Description & Ambience */}
            {branch.description && (
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#800C11] mb-1.5">
                  About This Branch
                </h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  {branch.description}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Key Details & Amenities Card */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-3xl bg-white border border-neutral-200 shadow-lg space-y-5">
              <h3 className="text-base font-bold text-neutral-900 pb-3 border-b border-neutral-100 flex items-center justify-between">
                <span>Branch Quick Details</span>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  ● Open Now
                </span>
              </h3>

              {/* Operating Hours */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200/60">
                  <ClockIcon className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Service Hours
                  </p>
                  <p className="text-sm font-bold text-neutral-900 mt-0.5">
                    {branch.timing}
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Open 7 Days a Week • Dine-in & Takeaway
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#800C11] flex items-center justify-center shrink-0 border border-red-100">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Direct Phone Line
                  </p>
                  <a
                    href={`tel:${branch.phone}`}
                    className="text-base font-bold text-[#800C11] hover:underline block mt-0.5"
                  >
                    {branch.phone}
                  </a>
                  <p className="text-xs text-neutral-500">
                    Call for takeaway pre-orders or table enquiries
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-800 flex items-center justify-center shrink-0 border border-neutral-200">
                  <MapPinIcon className="w-5 h-5 text-[#800C11]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Address
                  </p>
                  <p className="text-sm font-medium text-neutral-800 mt-0.5 leading-snug">
                    {branch.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Map Section */}
        <section className="mt-14 sm:mt-18 pt-10 border-t border-neutral-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#800C11]" />
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#800C11]">
                Interactive Map & Directions
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              Locate {branch.name}
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm mt-1">
              Explore the exact map location below or tap the button to open directly inside Google Maps app.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Embedded Interactive Map */}
            <div className="lg:col-span-8 rounded-3xl overflow-hidden border border-neutral-300 shadow-xl min-h-[380px] bg-neutral-100 relative">
              <iframe
                title={`${branch.name} Map Location`}
                src={embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Side Location Card with Quick Directions */}
            <div className="lg:col-span-4 bg-neutral-900 text-white p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Google Maps Link
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Ready to Visit?
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Open your Google Maps app for real-time traffic updates, live ETA, and turn-by-turn spoken driving directions to our {branch.area} location.
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 space-y-2">
                  <p className="text-xs font-semibold text-neutral-400 uppercase">
                    Destination Pin:
                  </p>
                  <p className="text-xs font-medium text-white">
                    {branch.address}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={branch.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#800C11] hover:bg-[#9c1015] text-white text-xs font-bold text-center flex items-center justify-center gap-2 transition-colors shadow-lg"
                >
                  <MapPinIcon className="w-4 h-4 text-amber-200" />
                  <span>Open in Google Maps App</span>
                </a>
                <a
                  href={`https://wa.me/${branch.whatsapp}?text=Hello,%20please%20send%20me%20the%20Google%20Maps%20location%20pin%20for%20${encodeURIComponent(
                    branch.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-2xl bg-neutral-800 hover:bg-neutral-700 text-emerald-400 text-xs font-bold text-center flex items-center justify-center gap-2 transition-colors border border-neutral-700"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Request Pin on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Other Branches Carousel / Strip */}
        <section className="mt-16 sm:mt-24 pt-10 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#800C11]">
                Other Outlets
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 mt-0.5">
                Explore More Midway Branches
              </h2>
            </div>
            <Link
              href="/branches"
              className="text-xs font-bold text-[#800C11] hover:underline flex items-center gap-1"
            >
              <span>View All 5 Outlets</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherBranches.map((other) => (
              <Link
                key={other.id}
                href={`/branches/${other.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 block hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={other.image}
                    alt={other.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 text-white">
                    <p className="text-xs font-bold text-white drop-shadow">
                      {other.area}
                    </p>
                  </div>
                </div>
                <div className="p-3 flex items-center justify-between text-xs">
                  <span className="font-semibold text-neutral-900 group-hover:text-[#800C11] transition-colors line-clamp-1">
                    {other.area}
                  </span>
                  <span className="text-[#800C11] font-bold text-[11px] group-hover:translate-x-0.5 transition-transform">
                    View →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

