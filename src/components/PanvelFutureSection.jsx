import Image from "next/image";
import React from "react";
import RectangleOne from "../../public/assets/Rectangle 15.webp";
import RectangleTwo from "../../public/assets/Rectangle 17.webp";
import RectangleEight from "../../public/assets/Rectangle 19.webp";
import MetroGoldOne from "../../public/assets/metrogold.webp";
// import MetroGold from "../../public/assets/metrogold.png";
// import MetroGoldTwo from "../../public/assets/mumbaipune.png";
import RectangleThree from "../../public/assets/Rectangle 21.webp";
import MetroGoldFour from "../../public/assets/navimumbaiairport.webp";
import MetroGoldFive from "../../public/assets/panvelkarjat.webp";
import MetroGoldSix from "../../public/assets/viralalibaug.webp";
import Layout from "./Layout";

const PanvelFutureSection = () => {
  const projects = [
    {
      id: 1,
      image: RectangleOne,
      title: "Atal Setu Mumbai Trans \nHarbour Link",
    },
    {
      id: 2,
      image: RectangleTwo,
      title: "Navi Mumbai \nInternational Airport",
    },
    { id: 3, image: MetroGoldOne, title: "Metro Gold \nLine 8" },
    {
      id: 4,
      image: MetroGoldFour,
      title: "Navi Mumbai Airport Influence\nNotified Area (NAINA)",
    },
    {
      id: 5,
      image: RectangleThree,
      title: "Mumbai Pune Link \nProject",
    },
    {
      id: 6,
      image: MetroGoldFive,
      title: "Panvel Karjat Local \nTrain Corridor",
    },
    {
      id: 7,
      image: MetroGoldSix,
      title: "Virar Alibaug \nMulti-Modal Corridor",
    },
    {
      id: 8,
      image: RectangleEight,
      title: "Sion-Panvel Highway \nWidening Project",
    },
  ];

  return (
    <section className="bg-gray-50">
      {/* Heading */}
      <Layout>
        <div className="text-center md:pt-12 md:pb-16 md:py-0 py-5">
          <h2 className="max-w-[1050px] mx-auto text-[25px] md:text-[43px] font-semibold text-[#58BF52] md:leading-relaxed leading-tight md:px-0 px-2">
            Panvel&nbsp;&mdash;&nbsp;The Future Is Here
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 md:gap-12 gap-8">
          {projects.map((p) => (
            <figure key={p?.id} className="flex flex-col items-center">
              {/* Image block */}
              <div className="rounded-[23px] overflow-hidden shadow-md">
                <Image
                  src={p?.image}
                  alt={p?.title}
                  className="object-fill w-full h-full"
                  placeholder="blur"
                />
              </div>

              {/* Caption */}
              <figcaption className="mt-4 text-center text-[18px] font-semibold leading-loose text-gray-800 whitespace-pre-line">
                {p.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </Layout>
    </section>
  );
};

export default PanvelFutureSection;
