"use client";
import Image from "next/image";
import React, { useState } from "react";
import FloorPlanImage from "../../public/assets/downoload-plan.png";
import UnlockPlanImage from "../../public/assets/unlock-plan (1).png";
import Layout from "./Layout";
import ModalDialog from "./RealEstateDialog";

const FloorPlansSection = () => {
  const floorPlans = [
    {
      id: 1,
      title: "Master Plan",
      description: "Explore township layout. Green zones. Smart design.",
      buttonText: "Download Plan",
      image: FloorPlanImage,
    },
    {
      id: 2,
      title: "1 BHK: Cozy Living",
      description: "Cozy and efficient 1 BHK homes designed for smart living.",
      buttonText: "Unlock Floor Plan",
      image: UnlockPlanImage,
    },
    {
      id: 3,
      title: "2 BHK: Spacious Comfort",
      description:
        "Spacious 2 BHK apartments perfect for growing families and comfort.",
      buttonText: "Unlock Floor Plan",
      image: UnlockPlanImage,
    },
    {
      id: 4,
      title: "3 BHK: Family Elegance",
      description:
        "Elegant 3 BHK homes offering luxury and ample space for families.",
      buttonText: "Unlock Floor Plan",
      image: UnlockPlanImage,
    },
    {
      id: 5,
      title: "4 BHK: Luxury Residence",
      description:
        "Luxury 4 BHK residences with premium features and grand living spaces.",
      buttonText: "Unlock Floor Plan",
      image: UnlockPlanImage,
    },
    {
      id: 6,
      title: "4 BHK: Elite Residences",
      description:
        "Luxurious, expansive residences for premium living experience.",
      buttonText: "Unlock Floor Plan",
      image: UnlockPlanImage,
    },
  ];

  // jo plans mobile par dikhne chahiye
  const showOnMobile = new Set([1, 4, 5]);

  const [open, setOpen] = useState(false);

  return (
    <div className="md:py-5 bg-gray-50">
      <Layout>
        {/* Header */}
        <div className="text-center md:pt-12 md:pb-16 md:py-0 py-5">
          <h2 className="max-w-[1050px] mx-auto text-[25px] md:text-[43px] font-semibold text-[#58BF52] md:leading-relaxed leading-tight">
            Floor Plans That Fit Your Life
          </h2>
        </div>

        {/* Floor Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-14 gap-8">
          {floorPlans.map((plan) => (
            <div
              key={plan.id}
              className={`${
                showOnMobile.has(plan.id) ? "" : "hidden"
              } md:block bg-white rounded-[27px] shadow-[#0000001A] shadow-lg overflow-hidden
                 transition-transform duration-300 ease-out
                 transform origin-bottom hover:scale-105`}
            >
              {/* Floor Plan Image */}
              <div className="h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  placeholder="blur"
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {plan.title}
                </h3>

                <p className="text-gray-600 text-[16px] mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Action Button */}
                <button
                  onClick={() => setOpen(true)}
                  className="w-full py-3 px-6 rounded-[17px] text-white font-semibold transition-all duration-300 transform btn-primary"
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </Layout>

      {/* Enquiry / Brochure modal */}
      <ModalDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default FloorPlansSection;
