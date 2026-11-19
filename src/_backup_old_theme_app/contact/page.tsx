"use client";

import React, { useState } from "react";
import { BRANCHES, SOCIAL_LINKS } from "@/data/branches";
import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  WhatsAppIcon,
  CheckCircleIcon,
  InstagramIcon
} from "@/components/Icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    branch: BRANCHES[0]?.name || "Midway Kuzhimandi - Main Hub",
    date: "",
    time: "19:00",
    guests: "4 Guests",
    serviceType: "Table Reservation",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `Hello Midway Kuzhimandi!
*New ${formData.serviceType} Request*
- Name: ${formData.name}
- Phone: ${formData.phone}
- Branch: ${formData.branch}
- Date: ${formData.date}
- Time: ${formData.time}
- Guests: ${formData.guests}
- Notes: ${formData.message || "None"}`;

    window.open(`https://wa.me/919846012345?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/60 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#A81B1E]" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[#A81B1E]">
            We Love to Hear From You
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-neutral-900 tracking-tight">
          Branch Directions & Contact Desk
        </h1>
        <p className="text-neutral-500 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-light">
          Have questions about our locations, route directions, or catering? Reach out directly to our 5 branches in Kerala.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Reservation / Enquiry Form */}
          <div className="lg:col-span-7 bg-[#FCFAF8] p-6 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A81B1E]">
                FAST BOOKING DESK
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mt-1">
                Table Reservation & Event Enquiry
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm mt-1">
                Fill out the details below. We confirm reservations within 10 minutes.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircleIcon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900">
                  Reservation Received!
                </h3>
                <p className="text-emerald-700 text-sm max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your request for{" "}
                  <strong>{formData.guests}</strong> at <strong>{formData.branch}</strong> on{" "}
                  <strong>{formData.date}</strong> at <strong>{formData.time}</strong> has been noted.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleSendToWhatsApp}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-black font-bold text-xs flex items-center justify-center gap-2 shadow"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Confirm via WhatsApp Now</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-white border border-neutral-300 text-neutral-700 font-semibold text-xs hover:bg-neutral-50"
                  >
                    Make Another Booking
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#A81B1E] focus:border-transparent text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98460 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#A81B1E] focus:border-transparent text-sm bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Select Nearest Branch *
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#A81B1E] focus:border-transparent text-sm bg-white"
                    >
                      {BRANCHES.map((b) => (
                        <option key={b.id} value={b.name}>
                          {b.name} ({b.area})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Booking Type *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#A81B1E] focus:border-transparent text-sm bg-white"
                    >
                      <option value="Table Reservation">Dine-in Table Reservation</option>
                      <option value="Takeaway Pickup">Takeaway Pack Order</option>
                      <option value="Party Catering">Party / Bulk Catering (10+ Pax)</option>
                      <option value="General Enquiry">General Question / Feedback</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#A81B1E] focus:border-transparent text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Time Slot *
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#A81B1E] focus:border-transparent text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Number of Guests *
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#A81B1E] focus:border-transparent text-sm bg-white"
                    >
                      <option value="1 - 2 Guests">1 - 2 Guests</option>
                      <option value="3 - 5 Guests">3 - 5 Guests</option>
                      <option value="6 - 10 Guests">6 - 10 Guests</option>
                      <option value="10 - 20 Guests (Party)">10 - 20 Guests (Party)</option>
                      <option value="25+ Guests (Banquet)">25+ Guests (Banquet)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="E.g. Extra spicy, birthday arrangement, AC cabin preferred..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#A81B1E] focus:border-transparent text-sm bg-white"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#A81B1E] hover:bg-[#8F1618] text-white font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
                  >
                    Submit Booking Request
                  </button>
                  <button
                    type="button"
                    onClick={handleSendToWhatsApp}
                    className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-black font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Instant WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details & Quick Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200/90 shadow-sm space-y-6">
              <h3 className="text-2xl font-bold text-neutral-900">
                Direct Contact Points
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#A81B1E] flex items-center justify-center shrink-0">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase">Central Booking Line</p>
                    <a href="tel:+919846012345" className="text-base font-bold text-neutral-900 hover:text-[#A81B1E]">
                      +91 98460 12345
                    </a>
                    <p className="text-xs text-neutral-500">Available 11:00 AM - Midnight</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#A81B1E] flex items-center justify-center shrink-0">
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase">Service Timings</p>
                    <p className="text-sm font-bold text-neutral-900">11:30 AM - 12:00 Midnight</p>
                    <p className="text-xs text-neutral-500">All 7 days a week including holidays</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#A81B1E] flex items-center justify-center shrink-0">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase">Official Instagram</p>
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#A81B1E] hover:underline"
                    >
                      @midway_mandi_
                    </a>
                    <p className="text-xs text-neutral-500">Follow for daily food stories & discounts</p>
                  </div>
                </div>
              </div>

              {/* Central Location Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#A81B1E] to-[#781113] text-white">
                <span className="text-[10px] font-bold tracking-widest uppercase text-amber-300">
                  Main Location Google Link
                </span>
                <p className="font-bold text-lg mt-1">Midway Mandhi Central Hub</p>
                <p className="text-white/80 text-xs mt-1">National Highway Bypass, Kerala</p>
                <a
                  href="https://maps.app.goo.gl/3X4Bq2YbFwvkiKes9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#A81B1E] text-xs font-bold hover:bg-neutral-100 transition-colors shadow"
                >
                  <MapPinIcon className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Quick 5 Branches Directory */}
            <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm">
              <h4 className="text-lg font-bold text-neutral-900 mb-3">
                All 5 Branch Maps
              </h4>
              <ul className="space-y-2 text-xs">
                {BRANCHES.slice(0, 5).map((b, idx) => (
                  <li key={b.id} className="flex items-center justify-between py-1.5 border-b border-neutral-100 last:border-none">
                    <span className="font-medium text-neutral-800">
                      {idx + 1}. {b.name}
                    </span>
                    <a
                      href={b.googleMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A81B1E] hover:underline font-semibold flex items-center gap-1"
                    >
                      Map Link ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

