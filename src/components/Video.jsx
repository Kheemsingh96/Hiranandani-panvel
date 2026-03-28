"use client";
import { useRef, useState } from "react";
import Image from "next/image";
const Promo = "../../public/video/Promo.mp4";

export default function Video() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // play / pause toggle
  const handleToggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <section className="bg-white md:hidden block">
      {/* Heading */}
      <h1 className="text-center pt-6 pb-4 font-semibold leading-snug text-[#58BF52]">
        <span className="block text-[22px] md:text-[34px]">
          Experience the Lifestyle
        </span>
      </h1>

      {/* Video wrapper */}
      <div className="relative w-full overflow-hidden">
        {/* HTML5 video */}
        <video
          ref={videoRef}
          src="/video/Promo.mp4"
          //   poster={Poster.src}
          className="w-full h-[600px] object-cover"
          playsInline
          controls={false}
          onEnded={() => setPlaying(false)}
        />

        {/* Play button overlay (hide while playing) */}
        {!playing && (
          <button
            onClick={handleToggle}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play video"
          >
            <span className="bg-[#58BF52] rounded-full p-4 md:p-5 shadow-lg">
              {/* play icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 md:w-8 md:h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 4.5v11l8-5.5-8-5.5z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
