"use client";

import { useState } from "react";
import Image from "next/image";
import { X, PhoneCall } from "lucide-react";
import Logo from "../../public/assets/mainlogo.svg";
import Residential from "../../public/assets/customerOne.png";
import Rupee from "../../public/assets/residential.png";
import Customer from "../../public/assets/rupee.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";

export default function RegisterForm({ onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url =
      "https://script.google.com/macros/s/AKfycbwZHaNg4XvWczLuVFWZ7rOKz9RuEYzjxG6s5IkQ--NNvt9klgpgjm3C81L16teeV52KJQ/exec";
    
    const body = new URLSearchParams({
      Name: form.name,
      Email: form.email,
      Mobile: form.phone,
    }).toString();

    try {
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      toast.success("Submitted! We'll call you soon 👍");
      setForm({ name: "", phone: "", email: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full overflow-hidden rounded-xl bg-white shadow-lg md:grid md:grid-cols-[278px_1fr]">
      <div className="hidden flex-col md:gap-10 bg-[#EDFFEC] p-6 md:flex">
        <Image
          src={Logo}
          alt="Hiranandani Fortune City Panvel"
          width={100}
          height={100}
          className="w-[133px] h-[76px]"
        />

        <div>
          <h2 className="text-[30px] font-semibold text-[#464545]">
            We Promise
          </h2>

          <ul className="mt-8 space-y-10 font-medium text-gray-700">
            <li className="flex items-center gap-5">
              <Image
                src={Residential}
                alt="Instant Call Back"
                className="w-[53px]"
              />
              <span className="text-lg">
                Instant Call
                <br />
                Back
              </span>
            </li>
            <li className="flex items-center gap-5 ">
              <Image src={Rupee} alt="Free Site Visit" className="w-[53px]" />
              <span className="text-lg">Free Site Visit</span>
            </li>
            <li className="flex items-center gap-5">
              <Image
                src={Customer}
                alt="Unmatched Prices"
                className="w-[53px]"
              />
              <span className="text-lg">
                Unmatched
                <br />
                Prices
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative flex flex-col md:gap-20 gap-2 p-6">
        <button
          onClick={() => onClose(false)}
          className="absolute right-1 top-1 rounded-full btn-primary p-1.5 text-white"
        >
          <X className="md:h-5 md:w-5 w-3 h-3" />
        </button>

        <div className="md:hidden flex justify-center items-center">
          <Image src={Logo} alt="" className="w-[107px] h-[32px]" />
        </div>
        <h2 className="text-center md:text-[22px] text-[14px] font-semibold text-[#429b3d] md:text-left md:text-xl md:mt-8 ">
          Register Here And Avail The Best Offer
        </h2>

        <div className="md:hidden">
          <div className="mb-4 flex items-center justify-center">
            <span className="h-px flex-1 bg-[#429b3d]" />
            <span className="mx-3 font-semibold text-gray-800">We Promise</span>
            <span className="h-px flex-1 bg-[#429b3d]" />
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4 text-center text-[11px] font-medium">
            <div className="flex flex-col items-center rounded-md bg-green-50 p-1">
              <Image
                src={Residential}
                alt="Instant Call Back"
                className="h-5 w-5"
              />
              <span className="leading-[12px] mt-1 text-xs">
                Instant Call
                <br />
                Back
              </span>
            </div>
            <div className="flex flex-col items-center rounded-md bg-green-50 p-1">
              <Image src={Rupee} alt="Free Site Visit" className="h-5 w-5" />
              <span className="leading-[12px] mt-1 text-xs">
                Free Site
                <br />
                Visit
              </span>
            </div>
            <div className="flex flex-col items-center rounded-md bg-green-50 p-1">
              <Image
                src={Customer}
                alt="Unmatched Prices"
                className="h-5 w-5"
              />
              <span className="leading-[12px] mt-1 text-xs">
                Unmatched
                <br />
                Price
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col md:gap-10 gap-3">
          <input
            type="text"
            placeholder="Enter your Name"
            className="md:h-12 h-10 bg-[#f4f4f4] px-4 text-sm outline-none placeholder-gray-500 rounded-lg"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <div className="flex md:h-12 h-10 mobile-number">
            <PhoneInput
              country={"in"}
              value={form.phone}
              onChange={(phone) => setForm({ ...form, phone })}
              inputStyle={{
                width: "100%",
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#f4f4f4",
                paddingLeft: "70px",
              }}
              buttonStyle={{
                border: "none",
              }}
              containerStyle={{ width: "100%" }}
              containerClass="phone-wrapper"
              dropdownClass="phone-dropdown"
              countryCodeEditable={false}
              placeholder="Enter your Mobile Number"
              disableDropdown={false}
            />
          </div>

          <input
            type="email"
            placeholder="Enter your Email Address (optional)"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="md:h-12 h-10 bg-[#f4f4f4] px-4 text-sm outline-none placeholder-gray-500 rounded-lg"
          />

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="mt-2 md:h-[49px] h-[33px] md:text-[18px] text-[14px] leading-loose rounded-[14px] btn-primary font-normal md:w-[199px] w-[155px] text-white"
              disabled={loading}
            >
              {loading ? "Sending..." : `I am Interested`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}