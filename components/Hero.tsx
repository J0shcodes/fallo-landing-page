import Image from "next/image";

import Header from "./Header";

const Hero = () => {
  return (
    <div className="text-black hero flex flex-col justify-center items-center lg:h-[79.5rem] pb-4 pt-9 px-6">
      <div className="">
        <Header />
        <div className="flex flex-col justify-center items-center">
          <div className="mb-20 text-center lg:w-[919px] w-[339px]">
            <div className="lg:text-[5rem] text-[2.125rem] text-white font-bold">
              Take back control of your day with Fallo
            </div>
            <button className="bg-primary mt-6 lg:w-[13.0625rem] w-[10.125rem] py-4 rounded-tl-lg rounded-br-lg hover:bg-[#0a3a6a] lg:text-lg text-sm text-[#fafafa] font-medium">
              Get Started
            </button>
          </div>
        </div>
        {/* <div> */}
          <Image
            src="/images/hero.svg"
            alt=""
            width={1016}
            height={516}
            // sizes="(max-width: 760px) 80vw"
          />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;
