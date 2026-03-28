"use client";

import { PhoneCall, Warehouse } from "lucide-react";
import {
  Dialog as HeadlessDialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import RegisterForm from "./RegisterForm";
import Whatsapp from "../../public/assets/whatsapp.png";
import Image from "next/image";

export default function ModalDialog({ open, setOpen }) {
  const close = () => setOpen(false);
  const message =
    "I am interested to know more about Hiranandani Fortune City, Panvel";
  const whatsappURL = `https://wa.me/7718003445?text=${encodeURIComponent(
    message
  )}`;
  return (
    <HeadlessDialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity
                   data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out
                   data-leave:duration-200 data-leave:ease-in"
      />

      {/* Centered panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
        {/* md:h-[570px] h-[443px] */}
        <DialogPanel
          transition
          className="w-full max-w-[834px] h-fit transform rounded-lg bg-white
                     text-left shadow-xl transition-all
                     data-closed:translate-y-4 data-closed:opacity-0
                     data-enter:duration-300 data-enter:ease-out
                     data-leave:duration-200 data-leave:ease-in
                     sm:data-closed:translate-y-0 sm:data-closed:scale-95 z-1 md:mt-10"
        >
          {/* Content */}
          <RegisterForm onClose={setOpen} />

          {/* Footer */}
          <div
            className="flex items-center 
                    h-[48px] md:h-[60px]            /* mobile + md */
                    text-base md:text-[20px]        /* font size */
                    text-white bg-[#429b3d]  rounded-b-lg"
          >
            {/* CALL NOW */}
            <a
              href="tel:+7718003445"
              className="flex flex-1 items-center justify-center
                   gap-2 md:gap-3
                    transition-colors"
            >
              <PhoneCall className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-medium tracking-wide uppercase">
                Call Now
              </span>
            </a>

            {/* Divider */}
            <span className="w-px md:h-8 h-6 bg-white/50" />

            {/* WhatsApp */}
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 md:gap-3 transition-colors"
            >
              <Image
                src={Whatsapp}
                alt="whatsapp"
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
              />
              <span className="font-medium tracking-wide uppercase">
                WhatsApp
              </span>
            </a>
          </div>
        </DialogPanel>
      </div>
    </HeadlessDialog>
  );
}
