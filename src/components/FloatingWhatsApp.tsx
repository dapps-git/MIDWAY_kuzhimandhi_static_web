import React from "react";
import { SOCIAL_LINKS } from "@/data/branches";
import { WhatsAppIcon } from "./Icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center group transition-all duration-300 transform hover:scale-110 focus:outline-none"
      aria-label="WhatsApp Helpline"
    >
      <WhatsAppIcon className="w-7 h-7" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out px-0 group-hover:px-2 text-sm font-semibold text-neutral-900">
        WhatsApp Helpline
      </span>
      {/* Pulse ping effect */}
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-600"></span>
      </span>
    </a>
  );
}

