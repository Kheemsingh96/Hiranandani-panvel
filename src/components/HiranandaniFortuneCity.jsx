import React from "react";
import WhyChooseImage from "../../public/assets/whychoose.webp";
import Image from "next/image";
import Layout from "./Layout";

export default function HiranandaniFortuneCity() {
  const features = [
    "Hiranandani Fortune City Panvel World class Township",
    "Elevated Lifestyle AT Hiranandani Fortune City Panvel",
    "Impressive Property Price Appreciation",
    "Upcoming Infrastructure Projects/ Development",
    "Good Rental Yield",
  ];

  const getMarginClass = (index) => {
    switch (index) {
      case 0:
      case 4:
        return "md:ml-0";
      case 1:
      case 3:
        return "md:ml-8";
      case 2:
        return "md:ml-16";
      default:
        return "md:ml-0";
    }
  };

  return (
    <div className="bg-gray-50">
      <Layout>
        {/* Header */}
        <div className="text-center md:pt-12 md:pb-20 md:py-0 py-5">
          <h2 className="max-w-[1050px] mx-auto text-[25px] md:text-[43px] font-semibold text-[#58BF52] md:leading-relaxed leading-tight">
            Why Choose Hiranandani Fortune City – The Arena?
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-12 gap-8">
          {/* Left Side - Image Placeholder */}
          <div className="flex-1">
            <div className="relative">
              {/* Small circular image overlays */}
              <Image
                src={WhyChooseImage}
                alt=""
                // className="w-[650px] h-[600px]"
                className="w-full"
              />
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="flex-1">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl lg:w-[550px] lg:p-[20px] p-[15px] shadow-[#58BF5226] shadow-lg  transition-all duration-300 transform ${getMarginClass(
                    index
                  )}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <p className="text-[#4D4D4D] lg:text-[20px] md:text-[12px] text-[15px] font-medium leading-relaxed md:text-start text-center md:px-0 px-4 ">
                        {feature}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
