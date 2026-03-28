import Image from "next/image";
import React from "react";
import Whatsapp from "../../public/assets/whatsapp.png";
import { PhoneCall } from "lucide-react";

function MobileFooter() {
  const message =
    "I am interested to know more about Hiranandani Fortune City, Panvel";
  const whatsappURL = `https://wa.me/7718003445?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div className="fixed bottom-0 w-full md:hidden block">
      <div
        className="flex items-center 
                    h-[48px] md:h-[60px]            /* mobile + md */
                    text-base md:text-[20px]        /* font size */
                    text-white bg-[#429b3d]"
      >
        {/* CALL NOW */}
        <a
          href="tel:+7718003445"
          className="flex flex-1 items-center justify-center
                   gap-2 md:gap-3
                    transition-colors"
        >
          <PhoneCall className="w-4 h-4 md:w-5 md:h-5" />
          <span className="font-medium tracking-wide uppercase">Call Now</span>
        </a>

        {/* Divider */}
        <span className="w-px md:h-8 h-6 bg-white/50" />

        {/* WhatsApp */}
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center
                   gap-2 md:gap-3
                    transition-colors"
        >
          <Image
            src={Whatsapp}
            alt="whatsapp"
            className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
          />
          <span className="font-medium tracking-wide uppercase">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

export default MobileFooter;
