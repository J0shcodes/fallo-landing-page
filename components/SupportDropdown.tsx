import Link from "next/link";
import { FC } from "react";

import QuestionCircle from "@/public/icons/QuestionCircle";
import GlobeIcon from "@/public/icons/GlobeIcon";
import OpenBookIcon from "@/public/icons/OpenBookIcon";
import { HeaderModalProps } from "./HeaderModal";

interface SupportProps {
  showSupportDropdown: boolean;
}

const SupportDropdown: FC<SupportProps> = ({ showSupportDropdown }) => {
  return (
    <div
      className={`text-black bg-white w-[37.1875rem] h-[20.125rem] rounded-2xl absolute top-[5.5rem] left-[0.0009rem] ${
        showSupportDropdown ? "" : "hidden"
      }`}
    >
      <div className="flex flex-col justify-center items-center h-full p-[3.75rem] relative overflow-hidden">
        <div className="w-[10rem] h-[10rem] border-[1.176875rem] border-solid border-primary rounded-full absolute top-[-3.625rem] left-[-4.25rem]"></div>
        <div className="flex justify-between w-[27.4375rem]">
          <div className="text-[3.25rem] font-bold flex flex-col justify-center items-center">
            Support
          </div>
          <div>
            <ul>
              <li className="pb-[2.9375rem]">
                <Link href="/" className="flex gap-5">
                  <div className="p-1.5 bg-[#cde1fb] rounded-tl-lg rounded-br-lg w-9">
                    <QuestionCircle />
                  </div>
                  <div className="text-lg flex flex-col justify-center items-center">
                    FAQ
                  </div>
                </Link>
              </li>
              <li className="pb-[2.9375rem]">
                <Link href="/" className="flex gap-5">
                  <div className="p-1.5 bg-[#cae6d6] rounded-tl-lg rounded-br-lg w-9">
                    <GlobeIcon />
                  </div>
                  <div className="text-lg flex flex-col justify-center items-center">
                    Blog
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/" className="flex gap-5">
                  <div className="p-1.5 bg-[#f9e4a4] rounded-tl-lg rounded-br-lg w-9">
                    <OpenBookIcon />
                  </div>
                  <div className="text-lg flex flex-col justify-center items-center">
                    Newsletter
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportDropdown;
