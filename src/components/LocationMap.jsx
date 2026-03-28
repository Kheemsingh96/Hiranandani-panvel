"use client";

import Image from "next/image";
import React, { useState } from "react";
import GoogleMapOne from "../../public/assets/googlemapone.png";
import GoogleMapTwo from "../../public/assets/googlemapone.png";
import Layout from "./Layout";
import ModalDialog from "./RealEstateDialog";

const LocationMap = () => {
  const [open, setOpen] = useState(false);
  const cards = [
    {
      id: 1,
      cta: "Know More About Location",
      image: GoogleMapOne,
      // link: "/location-details",  // future me use kar sakte ho
    },
    {
      id: 2,
      cta: "View Location Map",
      image: GoogleMapTwo,
      // link: "/location-map",
    },
  ];

  return (
    <section className="bg-gray-50">
      {/* Heading */}
      <Layout>
        <div className="text-center md:pt-12 md:pb-16 md:py-0 py-5">
          <h2 className="max-w-[1050px] mx-auto text-[25px] md:text-[43px] font-semibold text-[#58BF52] md:leading-relaxed leading-tight">
            Location
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cards?.map((card, idx) => (
            <div
              key={card?.id}
              className={`md:rounded-[30px] bg-transparent rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${
                idx === 0 ? "hidden md:block" : ""
              }`}
            >
              {/* Map placeholder */}
              <div className="md:h-[550px] h-[307px] w-full relative">
                <Image
                  src={card?.image}
                  alt={card?.cta}
                  className="object-fill w-full h-full"
                  fill
                />
              </div>

              {/* CTA band */}
              <button
                onClick={() => setOpen(true)}
                className="w-full btn-primary text-white font-semibold md:h-[84px] h-[57px] tracking-wide md:text-[25px] text-[18px]"
              >
                {card?.cta}
              </button>
            </div>
          ))}
        </div>
      </Layout>
      <ModalDialog open={open} setOpen={setOpen} />
    </section>
  );
};

export default LocationMap;
