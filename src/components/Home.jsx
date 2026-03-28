import React from "react";
import HeroSection from "../components/HeroSection";
import Header from "./Header";
import WhyChoose from "./WhyChoose";
import Property from "./Property";
import HiranandaniFortuneCity from "./HiranandaniFortuneCity";
import FloorPlansSection from "./FloorPlansSection";
import LocationMap from "./LocationMap";
import ImageGallery from "./ImageGallery";
import PanvelFutureSection from "./PanvelFutureSection";
import Video from "./Video";
import MobileFooter from "./MobileFooter";
import Footer from "./Footer";

const Home = () => {
  const heroData = {
    title: "Live the Hiranandani Powai Lifestyle Now in Panvel.",
    subtitle: "Luxurious 2,3 & 4 BHK Starts From ₹ 1.16 Cr",
    location: "Panvel Navi Mumbai",
  };

  return (
    <div className="pb-12">
      <Header />
      <section id="home">
        <HeroSection
          backgroundImage={heroData.backgroundImage}
          title={heroData.title}
          subtitle={heroData.subtitle}
          price={heroData.price}
          location={heroData.location}
        />
      </section>
      <Video />
      <section id="overview">
        <WhyChoose />
      </section>
      <section id="configuration">
        <Property />
      </section>
      <HiranandaniFortuneCity />
      <section id="amenities">
        <PanvelFutureSection />
      </section>
      <FloorPlansSection />
      <section id="gallery">
        <ImageGallery />
      </section>
      <section id="contact">
        <LocationMap />
        <MobileFooter />
        <Footer />
      </section>
    </div>
  );
};

export default Home;
