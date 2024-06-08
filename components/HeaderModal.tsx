"use client";

import { useState, FC, Dispatch, SetStateAction } from "react";
import Link from "next/link";

import ArrowDown from "@/public/icons/ArrowDown";
import SupportDropdown from "./SupportDropdown";

export interface HeaderModalProps {
  showHeaderModal: boolean;
  setShowHeaderModal: Dispatch<SetStateAction<boolean>>;
}

const HeaderModal: FC<HeaderModalProps> = ({
  showHeaderModal,
  setShowHeaderModal,
}) => {
  const [showSupportDropdown, setShowSupportDropdown] = useState(false);

  const toggleSupportDropdown = () => {
    setShowSupportDropdown(!showSupportDropdown);
  };

  return (
    <div
      className={`bg-white py-[1.875rem] fixed left-0 lg:hidden md:hidden w-full top-[6.4rem] animate-reveal`}
    >
      <div className="flex flex-col justify-center items-center w-full relative">
        <ul className="text-lg text-[#0b0b0b]">
          <li
            className="mb-6 text-center"
            onClick={() => setShowHeaderModal(!showHeaderModal)}
          >
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
          </li>
          <li
            className="mb-6 text-center"
            onClick={() => setShowHeaderModal(!showHeaderModal)}
          >
            <Link href="/support" className="hover:text-primary">
              Pricing
            </Link>
          </li>
          <li className="w-[6.4375rem] mb-6 text-center">
            <button
              className="flex justify-between w-full hover:text-primary"
              onClick={toggleSupportDropdown}
            >
              <p>Support</p>
              <ArrowDown />
            </button>
          </li>
          <li
            className="mb-6"
            onClick={() => setShowHeaderModal(!showHeaderModal)}
          >
            <Link
              href="/"
              className="text-lg text-[#06070d] font-medium hover:bg-[#9f9fa1] py-4 px-9 mr-1.5 rounded-tl-lg rounded-br-lg"
            >
              Sign In
            </Link>
          </li>
        </ul>
        {/* <div className="bg-blue-500 text-center mt-4"> */}
          <button className="bg-primary py-4 rounded-tl-lg rounded-br-lg hover:bg-[#0a3a6a] text-lg text-[#fafafa] font-medium w-[13.0625rem] ml-1.5">
            Create an account
          </button>
        {/* </div> */}
        <SupportDropdown showSupportDropdown={showSupportDropdown} />
      </div>
      {/* <div className="w-[22.3125rem] bg-blue-500 text-center mt-4 w-full">
        <button className="bg-primary py-4 rounded-tl-lg rounded-br-lg hover:bg-[#0a3a6a] text-lg text-[#fafafa] font-medium w-[13.0625rem] ml-1.5">
          Create an account
        </button>
      </div> */}
    </div>
  );
};

export default HeaderModal;
