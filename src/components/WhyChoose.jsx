"use client";
import React, { useState } from "react";
import Image from "next/image";
import SmartLiving from "../../public/assets/smart-living.webp";
import Layout from "./Layout";
import ModalDialog from "./RealEstateDialog";

function WhyChoose() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-50">
      <Layout>
        {/* Header */}
        <div className="text-center md:pt-12 md:pb-20 md:py-0 py-5">
          <h2 className="max-w-[1050px] mx-auto text-[25px] md:text-[43px] font-semibold text-[#58BF52] md:leading-relaxed leading-tight">
            {`Hiranandani Fortune City – Where Luxury Meets Smart Living`}
          </h2>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:items-stretch">
          {/* Left – Image */}
          <div className="order-1 md:order-1 h-full rounded-[15px] shadow-xl overflow-hidden">
            <Image
              src={SmartLiving}
              alt="Hiranandani Fortune City - Smart Living Complex with Modern Towers"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right – Content */}
          <div className="order-2 md:order-1 self-stretch flex flex-col justify-center space-y-6">
            <p className="text-[#6E6E6E] text-base text-center leading-loose md:text-[23px] text-[16px] md:text-justify">
              {`Step into the future with Hiranandani Fortune City – The Arena,
              a key launch in Mumbai 3.0 that redefines luxury living. Spread
              across 10.19 acres with G+41 floor towers, this modern township
              blends peaceful nature, great design, and city comfort. Just 20
              minutes from Navi Mumbai International Airport, it offers
              stunning forest, hill, and river views, 80% open space, and a
              5.3-acre landscaped amenity zone.`}
              {/* 👇 mobile‑par‑hide, desktop‑par‑dikhao */}
              <span className="hidden md:inline">
                {` Enjoy 80+ outdoor sports amenities, the grand CLUB ROYALE
                clubhouse (90,000+ sq.ft.), and strong Hiranandani double wall
                construction. The township is fully functional with an
                operational school, restaurants, shops, a 200‑year‑old Shiva
                temple, 24/7 health center, and Hakone Go‑Karting & Gaming zone — all
                made for the modern family.`}
              </span>
            </p>

            <div className="md:pt-4 flex md:justify-start justify-center">
              <button
                onClick={() => setOpen(true)}
                className="btn-primary text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 md:text-[20px] text-[14px]"
              >
                Book a Free Consultation
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Layout>

      {/* Modal */}
      <ModalDialog open={open} setOpen={setOpen} />
    </div>
  );
}

export default WhyChoose;
