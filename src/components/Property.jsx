"use client";

import PropertyCard from "./PropertyCard";
import Layout from "./Layout";
import ModalDialog from "./RealEstateDialog";
import { useState } from "react";

import Interior1 from "../../public/assets/interior 1.webp";
import Interior2 from "../../public/assets/interior 2.webp";
import Interior3 from "../../public/assets/interior 3.webp";
import Interior4 from "../../public/assets/interior 4.webp";
import Interior5 from "../../public/assets/interior 5.webp";
import Interior6 from "../../public/assets/interior 6.webp";
import Interior7 from "../../public/assets/interior 7.webp";
import Interior8 from "../../public/assets/interior 8.webp";
import Interior9 from "../../public/assets/interior 9.webp";

function Property() {
  const properties = [
    {
      id: 1,
      image: Interior1,
      title: "1 BHK – Smart Urban Living",
      areaDesktop: "492 Sq. Ft. Carpet",
      possessionDesktop: "Possession: Mid 2027",
    },
    {
      id: 2,
      image: Interior2,
      title: "2 BHK – Modern Comfort",
      areaDesktop: "612 Sq. Ft. Carpet",
      possessionDesktop: "Possession: Mid 2027",
    },
    {
      id: 3,
      image: Interior3,
      title: "2 BHK – Spacious & Stylish",
      areaDesktop: "676 Sq. Ft. Carpet",
      areaMobile: "1170 Sq. Ft. Carpet",
      possessionDesktop: "Possession: December 2027",
      possessionMobile: "Possession: December 2028",
    },
    {
      id: 4,
      image: Interior4,
      title: "3 BHK – Arcadia Smart Living",
      areaDesktop: "970 Sq. Ft. Carpet",
      possessionDesktop: "Possession: December 2027 & March 2030",
    },
    {
      id: 5,
      image: Interior5,
      title: "3 BHK – Elevated Lifestyle",
      areaDesktop: "1040 Sq. Ft. Carpet",
      possessionDesktop: "Possession: December 2028",
    },
    {
      id: 6,
      image: Interior6,
      title: "3 BHK – Spacious Elegance",
      areaDesktop: "1170 Sq. Ft. Carpet",
      areaMobile: "1170 Sq. Ft. Carpet",
      possessionDesktop: "Possession: December 2028",
      possessionMobile: "Possession: December 2028",
    },
    {
      id: 7,
      image: Interior7,
      title: "3 BHK – Grand City Living",
      areaDesktop: "1280 Sq. Ft. Carpet",
      areaMobile: "1280 Sq. Ft. Carpet",
      possessionDesktop: "Possession: December 2028 & March 2030",
      possessionMobile: "Possession: December 2028 & March 2030",
    },
    {
      id: 8,
      image: Interior8,
      title: "4 BHK – Citadel Luxury Living",
      areaDesktop: "1650 Sq. Ft. Carpet",
      areaMobile: "1650 Sq. Ft. Carpet",
      possessionDesktop: "Possession: March 2030",
      possessionMobile: "Possession: March 2030",
    },
    {
      id: 9,
      image: Interior9,
      title: "4 BHK – Ultra-Premium Home",
      areaDesktop: "1890 Sq. Ft. Carpet",
      areaMobile: "1890 Sq. Ft. Carpet",
      possessionDesktop: "Possession: March 2030",
      possessionMobile: " Possession: March 2030",
    },
  ];

  const showOnMobile = new Set([3, 6, 7, 8, 9]);
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-50">
      <Layout>
        <div className="text-center md:pt-12 md:pb-20 md:py-0 py-5">
          <h2 className="max-w-[1050px] mx-auto text-[25px] md:text-[43px] font-semibold text-[#58BF52] md:leading-relaxed leading-tight">
            Your Dream Home, Clearly Priced
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className={`${
                showOnMobile.has(property.id) ? "" : "hidden"
              } md:block`}
            >
              <PropertyCard
                image={property.image}
                title={property.title}
                areaDesktop={property.areaDesktop}
                areaMobile={property.areaMobile}
                possessionDesktop={property.possessionDesktop}
                possessionMobile={property.possessionMobile}
                setOpen={setOpen}
              />
            </div>
          ))}
        </div>
      </Layout>

      <ModalDialog open={open} setOpen={setOpen} />
    </div>
  );
}

export default Property;
