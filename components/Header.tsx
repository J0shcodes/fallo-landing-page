"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import ArrowDown from "@/public/icons/ArrowDown";
import SupportDropdown from "./SupportDropdown";
import HeaderModal from "./HeaderModal";

const Header = () => {
  const [showSupportDropdown, setShowSupportDropdown] = useState(false);
  const [showHeaderModal, setShowHeaderModal] = useState(false);

  const toggleSupportDropdown = () => {
    setShowSupportDropdown(!showSupportDropdown);
  };

  console.log(showHeaderModal)

  return (
    <div className="lg:relative md:relative fixed text-white bg-[#fafafa] flex justify-between lg:rounded-tl-3xl lg:rounded-br-3xl rounded-tl-lg rounded-br-lg lg:w-full md:w-full w-[91.5%] px-[1.375rem] py-[1.125rem] mb-[7.5625rem] z-50 shadow-md">
      <Image src="/images/logo.svg" alt="small logo" width={100} height={25} />
      <div className="lg:flex md:flex flex-col justify-center items-center lg:w-[19.625rem] md:w-[17.5rem] relative hidden">
        <ul className="lg:text-lg text-[#0b0b0b] flex justify-between w-full">
          <li>
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link href="/support" className="hover:text-primary">
              Pricing
            </Link>
          </li>
          <li className="w-[7.4375rem]">
            <button
              className="flex justify-between w-full hover:text-primary"
              onClick={toggleSupportDropdown}
            >
              <p>Support</p>
              <ArrowDown />
            </button>
          </li>
        </ul>
        <SupportDropdown showSupportDropdown={showSupportDropdown} />
      </div>
      <div className="lg:w-[22.3125rem] lg:block md:block hidden">
        <Link
          href="/"
          className="lg:text-lg text-[#06070d] font-medium hover:bg-[#9f9fa1] py-4 px-9 mr-1.5 rounded-tl-lg rounded-br-lg"
        >
          Sign In
        </Link>
        <button className="bg-primary py-4 rounded-tl-lg rounded-br-lg hover:bg-[#0a3a6a] lg:text-lg text-base text-[#fafafa] font-medium lg:w-[13.0625rem] md:w-[9rem] ml-1.5">
          Create an account
        </button>
      </div>
      <div
        className="lg:hidden md:hidden cursor-pointer"
        onClick={() => setShowHeaderModal(!showHeaderModal)}
      >
        <span className={`w-[1.5625rem] h-[0.1875rem] bg-[#0b0b0b] my-[0.3125rem] mx-auto block transition-all duration-300 ease-in-out ${showHeaderModal ? "translate-y-2 rotate-45" : ""}`}></span>
        <span className={`w-[1.5625rem] h-[0.1875rem] bg-[#0b0b0b] my-[0.3125rem] mx-auto block transition-all duration-300 ease-in-out ${showHeaderModal ? "opacity-0" : ""}`}></span>
        <span className={`w-[1.5625rem] h-[0.1875rem] bg-[#0b0b0b] my-[0.3125rem] mx-auto block transition-all duration-300 ease-in-out ${showHeaderModal ? "-translate-y-2 -rotate-45" : ""}`}></span>
      </div>
      {showHeaderModal ? <HeaderModal showHeaderModal={showHeaderModal} setShowHeaderModal={setShowHeaderModal} /> : null}
    </div>
  );
};

export default Header;
