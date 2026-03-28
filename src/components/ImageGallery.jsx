import Image from "next/image";
import React from "react";
import MetroGoldOne from "../../public/assets/visual (1).webp";
import MetroGoldTwo from "../../public/assets/visual (2).webp";
import MetroGoldThree from "../../public/assets/visual (3).webp";
import MetroGoldFour from "../../public/assets/visual (4).webp";
import MetroGoldFive from "../../public/assets/visual (5).webp";
import MetroGoldSix from "../../public/assets/visual (6).webp";
import MetroGoldSeven from "../../public/assets/visual (7).webp";
import MetroGoldEight from "../../public/assets/visual (8).webp";
import MetroGoldNine from "../../public/assets/visual (9).webp";
import MetroGoldTen from "../../public/assets/visual (10).webp";
import MetroGoldEleven from "../../public/assets/visual (11).webp";
import MetroGoldTwelve from "../../public/assets/visual (12).webp";
import Layout from "./Layout";

const ImageGallery = () => {
  const projects = [
    { id: 1, image: MetroGoldOne },
    { id: 2, image: MetroGoldTwo },
    { id: 3, image: MetroGoldThree },
    { id: 4, image: MetroGoldFour },
    { id: 5, image: MetroGoldFive },
    { id: 6, image: MetroGoldSix },
    { id: 7, image: MetroGoldSeven },
    { id: 8, image: MetroGoldEight },
    { id: 9, image: MetroGoldNine },
    { id: 10, image: MetroGoldTen },
    { id: 11, image: MetroGoldEleven },
    { id: 12, image: MetroGoldTwelve },
  ];

  // Mobile par jo dikhne chahiye
  const showOnMobile = new Set([4, 5, 6, 8, 9, 11]);

  return (
    <section className="bg-gray-50">
      <Layout>
        {/* Heading */}
        <div className="text-center md:pt-12 md:pb-16 md:py-0 py-5">
          <h2 className="max-w-[1050px] mx-auto text-[25px] md:text-[43px] font-semibold text-[#58BF52] md:leading-relaxed leading-tight">
            Experience The Arena Visually
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-8">
          {projects.map((p) => (
            <figure
              key={p.id}
              className={`${
                showOnMobile.has(p.id) ? "" : "hidden"
              } md:flex flex-col items-center`}
            >
              <div className="rounded-[23px] overflow-hidden shadow-md">
                <Image
                  src={p.image}
                  alt="gallery"
                  className="object-fill w-full h-full"
                  placeholder="blur"
                />
              </div>
            </figure>
          ))}
        </div>
      </Layout>
    </section>
  );
};

export default ImageGallery;
