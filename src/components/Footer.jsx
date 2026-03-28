"use client";
import React, { useState } from "react";
import Logo from "../../public/assets/mainlogo.svg";
import QrOne from "../../public/assets/qr1.png";
import QrTwo from "../../public/assets/qr2.png";
import Image from "next/image";
import Layout from "./Layout";
import ModalDialog from "./RealEstateDialog";

const Footer = () => {
  const [open, setOpen] = useState(false);
  return (
    <footer className="bg-gray-50 py-8 px-4 md:px-8 lg:px-16">
      <Layout>
        {/* Header Section */}
        <div className="flex justify-center items-center md:mb-0 mb-4">
          <Image
            src={Logo}
            alt="Hiranandani Fortune City"
            className="h-[58px] w-[226px]"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-start items-center mb-4">
          <div>
            <h2 className="md:text-[35px] text-[20px] font-medium text-[#000000] md:mb-4 md:text-start text-center">
              About Hiranandani Group
            </h2>
          </div>
          <div>
            <button
              onClick={() => setOpen(true)}
              className="btn-primary md:block hidden md:w-[233px] md:h-[50px] md:rounded-[15px] md:text-[20px] text-white rounded-md transition-colors duration-200"
            >
              Download Brochure
            </button>
          </div>
        </div>
        <div>
          <p className="md:text-[#0A0909] text-[#6E6E6E] md:text-start text-center text-[14px] md:text-[18px] md:leading-loose leading-relaxed">
            {`Founded in 1978, the Hiranandani Group is a bonafide champion when
              it comes to transforming vast barren plots into sprawling township
              estates! One of the leading developers in India, the firm excels
              at developing posh residential apartments and commercial parks
              that coexist with lush natural surroundings. With a mission to
              leave behind mere living spaces, it has instead built modern
              communities in the quaint locales of Powai and Thane.`}
          </p>
        </div>

        {/* About Section */}

        {/* RERA Information Section */}
        <div className="pt-6">
          <h3 className="hidden md:block text-[18px] md:text-[24px] font-medium text-[#000000] md:mb-6">
            RERA Information
          </h3>

          {/* Desktop View - Side by Side */}
          <div className="flex md:justify-start justify-between md:items-start text-center mb-6 md:gap-8 gap-4">
            <div className="flex flex-col md:items-start items-center md:justify-start justify-center">
              <Image
                src={QrOne}
                alt="QR Code 1"
                className="md:w-24 w-16 md:h-24 h-16 md:mb-3 mb-1"
              />
              <div className="text-[#000000]">
                <p className="md:text-[12px] text-[10px] font-medium md:text-start text-center">
                  Hiranandani Fortune City Acacia
                </p>
                <p className="md:text-[12px] text-[10px] font-semibold text-[#000000] md:text-start text-center">
                  MahaRERA - P52000050168
                </p>
              </div>
            </div>

            <div className="flex flex-col md:items-start items-center md:justify-start justify-center">
              <Image
                src={QrTwo}
                alt="QR Code 2"
                className="md:w-24 w-16 md:h-24 h-16 md:mb-3 mb-1"
              />
              <div className="text-[#000000]">
                <p className="md:text-[12px] text-[10px] font-medium md:text-start text-center">
                  Hiranandani Fortune City Iris
                </p>
                <p className="md:text-[12px] text-[10px] font-semibold text-[#000000] md:text-start text-center">
                  MahaRERA - P52000050184
                </p>
              </div>
            </div>
          </div>

          {/* RERA Disclaimer */}
          <div className="sm:text-[14px] text-[10px] md:text-[#0A0909] text-[#6E6E6E] md:text-start text-center md:pt-5 pt-2">
            <p>
              According to the RERA Act 2016 of the Government of India, all
              projects of the Hiranandani Group including the Hiranandani
              Fortune City, are listed on the Maharashtra Government's RERA
              website under registered projects.
            </p>
          </div>
        </div>
      </Layout>
      <ModalDialog open={open} setOpen={setOpen} />
    </footer>
  );
};

export default Footer;
