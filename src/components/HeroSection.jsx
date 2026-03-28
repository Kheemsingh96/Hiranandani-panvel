"use client";
import React, { useEffect, useState, useRef } from "react"; // ⭐ useRef add
import { MapPin } from "lucide-react";
import Image from "next/image";
import Layout from "./Layout";
import ModalDialog from "./RealEstateDialog";

// Swiper core
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import HomeImageOne from "../../public/assets/Aerial.webp";
import HomeImageTwo from "../../public/assets/Aerialtwo.webp";
import HomeImageThree from "../../public/assets/Aerialthree.webp";
import HomeImageFour from "../../public/assets/Aerialfour.webp";

const SLIDES = [HomeImageOne, HomeImageTwo, HomeImageThree, HomeImageFour];

const HeroSection = ({ title, subtitle, price, location }) => {
  const [open, setOpen] = useState(false);
  const swiperRef = useRef(null); // ⭐ hold swiper instance

  // Auto‑open brochure dialog after 5 s
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center md:items-end md:justify-start">
      {/* ---------- Background Swiper ---------- */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }} // autoplay continues
          loop
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full h-full"
        >
          {SLIDES.map((src, idx) => (
            <SwiperSlide
              key={idx}
              className="relative w-full h-full"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <Image
                src={src}
                alt={`property-slide-${idx + 1}`}
                fill
                priority={idx === 0}
                className="object-cover object-center select-none"
              />
              <div className="block absolute -left-[2px] top-[123px] w-[674px] h-[1000px] bg-black opacity-60 rounded-full -rotate-90 blur-[200px] pointer-events-none z-10" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ---------- Foreground content ---------- */}
      <div
        onClick={() => swiperRef.current?.slideNext()}
        className="relative z-20 w-full md:mt-0 mt-16 py-10 md:py-16"
      >
        <Layout>
          <div className="max-w-3xl flex flex-col gap-4 items-center md:items-start text-center md:text-left px-4 md:px-0">
            <h1 className="text-white text-[34px] md:text-[52px] font-bold leading-tight">
              {title}
            </h1>
            <p className="text-white/90 text-[16px] sm:text-lg md:text-xl">
              {subtitle}
            </p>
            <div className="flex items-center text-white/90 text-sm sm:text-base">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{location}</span>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="bg-[#429b3d] hover:bg-[#388434] text-white flex items-center justify-center gap-2 md:h-[50px] md:w-[233px] w-[162px] h-[38px] md:rounded-[15px] rounded-[10px] text-sm sm:text-base md:text-lg transition-all cursor-pointer"
            >
              Download Brochure
            </button>
          </div>
        </Layout>
      </div>

      <div className="md:hidden block fixed left-4 top-1/2 -translate-y-1/2 rotate-90 origin-left z-50">
        <button
          onClick={() => setOpen(true)}
          className="btn-primary w-[126px] h-[35px] rounded-[8px] text-[18px] text-white capitalize"
        >
          Contact us
        </button>
      </div>

      {/* ---------- Pop‑up brochure form ---------- */}
      <ModalDialog open={open} setOpen={setOpen} />
    </section>
  );
};

export default HeroSection;
