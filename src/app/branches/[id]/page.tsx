import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BRANCH_EXPERIENCES } from "@/data/branchExperiences";
import LuxuryHeader from "@/components/LuxuryHeader";
import LuxuryFooter from "@/components/LuxuryFooter";
import BranchGallery from "@/components/BranchGallery";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return BRANCH_EXPERIENCES.map((b) => ({
    id: b.id,
  }));
}

export default async function BranchDetailPage({ params }: Props) {
  const { id } = await params;
  const branch = BRANCH_EXPERIENCES.find((b) => b.id.toLowerCase() === id.toLowerCase());

  if (!branch) {
    notFound();
  }

  // Combine branch image + gallery images into a single gallery list
  const galleryList = Array.from(
    new Set(
      [branch.image, ...(branch.galleryImages || [])].filter(Boolean) as string[]
    )
  );

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-neutral-900 selection:text-white">
      {/* 1. Same Luxury Header as Home Page */}
      <LuxuryHeader />

      {/* 2. Main Content (with top padding to clear fixed header) */}
      <main className="max-w-[1360px] mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-20 sm:pb-28 space-y-10 sm:space-y-14">
        
        {/* Back Link directly BELOW navbar */}
        <div className="border-b border-neutral-200 pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[2px] text-neutral-500 hover:text-black transition-colors font-medium group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>BACK TO HOME</span>
          </Link>
        </div>

        {/* Branch Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[4px] text-neutral-500 font-medium">
            OUTLET &amp; DINING EXPERIENCE
          </p>
          <h1 className="text-3xl sm:text-5xl font-saol uppercase tracking-[4px] text-neutral-900 font-light">
            {branch.locationName}
          </h1>
          <p className="font-serif text-lg sm:text-xl text-neutral-700 italic">
            Authentic Arabian Mandi &amp; Charcoal Grills
          </p>
        </div>

        {/* 3. Interactive Photo Gallery: Main Image + 4 Images per row underneath */}
        <BranchGallery images={galleryList} branchName={branch.locationName} />

        {/* 4. Branch Info & Reservations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 border-t border-b border-neutral-300 py-10">
          
          {/* Location Address */}
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[3px] text-neutral-400 font-medium block">
              LOCATION ADDRESS
            </span>
            <p className="text-sm sm:text-base text-neutral-800 font-light leading-relaxed">
              {branch.address}
            </p>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[3px] text-neutral-400 font-medium block">
              DIRECT RESERVATIONS &amp; ORDERS
            </span>
            <a
              href={`tel:${branch.tel}`}
              className="text-lg sm:text-xl font-light tracking-[1px] text-black hover:underline block"
            >
              {branch.phone}
            </a>
            <span className="text-xs text-neutral-500 block">
              11:30 AM – 12:00 Midnight Daily
            </span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 flex flex-col justify-center">
            <a
              href={branch.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-black hover:bg-neutral-800 text-white text-center text-xs uppercase tracking-[2px] font-semibold transition-colors block"
            >
              GET GOOGLE MAPS DIRECTIONS →
            </a>
            <a
              href={`tel:${branch.tel}`}
              className="w-full py-3.5 border border-black hover:bg-black hover:text-white text-black text-center text-xs uppercase tracking-[2px] font-semibold transition-colors block"
            >
              CALL {branch.phone}
            </a>
          </div>
        </div>

      </main>

      {/* 5. Luxury Footer */}
      <LuxuryFooter />
    </div>
  );
}
