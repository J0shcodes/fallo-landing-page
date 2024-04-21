import Image from "next/image";

import Header from "./Header";

const Hero = () => {
  return (
    <div className="text-black hero flex flex-col justify-center items-center h-[79.5rem]">
      <Header />
      <div className="mb-20 text-center">
        <div className="text-[5rem] text-white font-bold max-w-[57.4375rem]">
          Take back control of your day with Fallo
        </div>
        <button className="bg-primary mt-6 w-[13.0625rem] py-4 rounded-tl-lg rounded-br-lg hover:bg-[#0a3a6a] text-lg text-[#fafafa] font-medium">
          Get Started
        </button>
      </div>
      <Image src="/images/hero.svg" alt="" width={1016} height={516} />
    </div>
  );
};

export default Hero;
