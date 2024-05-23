"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import ArrowDown from "@/public/icons/ArrowDown";
import SupportDropdown from "./SupportDropdown";
import HeaderModal from "./HeaderModal";

const Header = () => {
  const [showSupportDropdown, setShowSupportDropdown] = useState(false);

  const toggleSupportDropdown = () => {
    setShowSupportDropdown(!showSupportDropdown)
  }

  return (
    <div className="text-white bg-[#fafafa] flex justify-between lg:rounded-tl-3xl lg:rounded-br-3xl rounded-tl-lg rounded-br-lg w-full px-[1.375rem] py-[1.125rem] mb-[7.5625rem]">
      <Image src="/images/logo.svg" alt="small logo" width={100} height={25} />
      <div className="flex flex-col justify-center items-center w-[19.625rem] relative">
        <ul className="text-lg text-[#0b0b0b] flex justify-between w-full">
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
      <div className="w-[22.3125rem]">
        <Link
          href="/"
          className="text-lg text-[#06070d] font-medium hover:bg-[#9f9fa1] py-4 px-9 mr-1.5 rounded-tl-lg rounded-br-lg"
        >
          Sign In
        </Link>
        <button className="bg-primary py-4 rounded-tl-lg rounded-br-lg hover:bg-[#0a3a6a] text-lg text-[#fafafa] font-medium w-[13.0625rem] ml-1.5">
          Create an account
        </button>
      </div>
      <label className="flex flex-col gap-2 before:w-[60px] before:content-[''] after:w-[60px] after:content-[''] bg-[#0b0b0b] rounded-full">
        <input className="before:content-[''] before:w-[60px] after:content-[''] after:w-[60px] bg-[#0b0b0b]" type="checkbox"/>
      </label>
      {/* <HeaderModal/> */}
    </div>
  );
};

export default Header;
