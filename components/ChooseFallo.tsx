"use client";

import { useState } from "react";

const ChooseFallo = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex flex-col justify-center items-center relative lg:h-[109.4375rem] md:h-[71.875rem] h-[62.5rem] w-full px-6 z-40"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`bg-[#0a3a6a] pt-[3.6875rem] pb-12 transition-all duration-1000 ease-out delay-300 ${
          hovered
            ? "scale-x-110 w-[91%]"
            : "lg:max-w-[71.5rem] md:max-w-[37.5rem] max-w-[23.875rem] lg:rounded-[2.5rem] md:rounded-3xl rounded-2xl"
        } absolute z-50`}
      >
        <div className="text-center text-white">
          <h2 className="lg:text-[3.4375rem] md:text-5xl text-[2.125rem] font-bold">
            Why Choose Fallo?
          </h2>
          {hovered ? (
            ""
          ) : (
            <p className="lg:text-lg mt-3 text-[#fafafa] text-center">
              Experience the ultimate productivity boost with Fallo,
            </p>
          )}
        </div>
        <div
          className={`bg-[#b7dafe] max-w-[69.25rem] ${
            hovered
              ? "lg:rounded-2xl md:rounded-xl rounded-md"
              : "lg:rounded-tr-2xl lg:rounded-br-2xl md:rounded-tr-xl md:rounded-br-xl rounded-tr-md rounded-br-md"
          }  lg:p-[2.875rem] md:p-7 p-4 lg:mt-[4.125rem] md:mt-[2.875rem] mt-[1.875rem] lg:mr-[4.0625rem] md:mr-[3.4375rem] mr-10 relative overflow-hidden`}
        >
          <div
            className={`lg:w-[20.1875rem] md:w-[223px] w-[6.4375rem] lg:h-[20.1875rem] md:h-[223px] h-[6.4375rem] lg:border-[2.36125rem] md:border-[27px] border-[0.75rem] border-solid border-[#0a3a6a] rounded-full ${
              hovered ? "opacity-30" : "opacity-10"
            } absolute lg:top-[-9.75rem] md:top-[-4.5rem] top-[-2.125rem] lg:right-[-8.625rem] md:right-[-6.5rem] right-[-2rem]`}
          ></div>
          <h3 className="lg:text-[2.5rem] md:text-2xl font-semibold">
            Improved Productivity
          </h3>
          <div className="lg:text-lg md:text-base text-sm text-[#0b0b0b] lg:mt-[2.5rem] md:mt-7 mt-3">
            Fallo consolidates all your productivity needs into a single,
            intuitive platform. No more juggling multiple apps and tools - Fallo
            has you covered from start to finish
          </div>
        </div>
        {/* <div className="relative overflow-hidden"> */}
        <div
          className={`bg-[#1789fc] lg:rounded-tl-2xl lg:rounded-bl-2xl md:rounded-tl-xl md:rounded-bl-xl rounded-tl-md rounded-bl-md lg:p-[2.875rem] md:p-7 p-4 lg:mt-[4.125rem] md:mt-[2.875rem] mt-[1.875rem] lg:ml-[4.0625rem] md:ml-[3.4375rem] ml-10 relative overflow-hidden ${
            hovered ? "lg:h-[16.375rem] h-[12rem]" : ""
          }`}
        >
          <div
            className={`lg:w-[20.1875rem] md:w-[223px] w-[6.4375rem] lg:h-[20.1875rem] md:h-[223px] h-[6.4375rem] lg:border-[2.36125rem] md:border-[27px] border-[0.75rem] border-solid border-[#b7dafe] rounded-full ${
              hovered ? "opacity-30" : "opacity-10"
            } absolute lg:top-[-6.75rem] md:top-[-5rem] top-[-1.5rem] lg:left-[-8.625rem] md:left-[-6.25rem] left-[-2.5rem]`}
          ></div>
          <div className={`${hovered ? "absolute" : ""}`}>
            <h3 className="lg:text-[2.5rem] md:text-2xl font-semibold">
              Collaborative Features
            </h3>
            <div className="lg:text-lg md:text-base text-sm text-[#0b0b0b] lg:mt-[2.5rem] md:mt-7 mt-3">
              Easily share tasks, goals, and progress with your team or loved
              ones. Fallo&apos;s collaborative features encourages
              accountability, alignment, and a sense of shared purpose.
            </div>
          </div>
          {/* <h3 className="text-[2.5rem] font-semibold">
            Collaborative Features
          </h3>
          <div className="text-lg text-[#0b0b0b] mt-[2.5rem]">
            Easily share tasks, goals, and progress with your team or loved
            ones. Fallo&apos;s collaborative features encourages accountability,
            alignment, and a sense of shared purpose.
          </div> */}
        </div>
        {/* </div> */}
        <div
          className={`bg-[#64b0fd] max-w-[69.25rem] ${
            hovered
              ? "lg:rounded-2xl md:rounded-xl rounded-md"
              : "lg:rounded-tr-2xl lg:rounded-br-2xl md:rounded-tr-xl md:rounded-br-xl rounded-tr-md rounded-br-md"
          }  lg:p-[2.875rem] md:p-7 p-4 lg:mt-[4.125rem] md:mt-[2.875rem] mt-[1.875rem] lg:mr-[4.0625rem] md:mr-[3.4375rem] mr-10 relative overflow-hidden`}
        >
          <div
            className={`lg:w-[20.1875rem] md:w-[223px] w-[6.4375rem] lg:h-[20.1875rem] md:h-[223px] h-[6.4375rem] lg:border-[2.36125rem] md:border-[27px] border-[0.75rem] border-solid border-[#b7dafe] rounded-full ${
              hovered ? "opacity-30" : "opacity-10"
            } absolute lg:top-[-6.75rem] md:top-[-4.5rem] top-[-2.125rem] lg:right-[-8.625rem] md:right-[-6.5rem] right-[-2rem]`}
          ></div>
          <h3 className="lg:text-[2.5rem] md:text-2xl font-semibold">
            Data Driven Insights
          </h3>
          <div className="lg:text-lg md:text-base text-sm text-[#0b0b0b] lg:mt-[2.5rem] md:mt-7 mt-3">
            Gain valuable data-driven insights to better understand your time
            management, task completion, and goal achievement patterns.
            Fallo&apos;s analytics empower you to work smarter, not harder.
          </div>
        </div>
      </div>
      <div
        className={`${
          hovered ? "scale-x-105 w-[90%]" : "lg:w-[68.35rem] md:w-[34.35rem] w-[21.6875rem]"
        }  lg:h-[73rem] md:h-[61rem] h-[50rem] bg-[#1789fc] lg:rounded-[2.5rem] md:rounded-3xl rounded-2xl absolute z-40 `}
      ></div>
      <div
        className={`${
          hovered ? "scale-x-105 w-[80%]" : "lg:w-[64.35rem] md:w-[30.35rem] w-[18.6875rem]"
        } lg:h-[78.25rem] md:h-[64.125rem] h-[52rem] bg-[#b7dafe] lg:rounded-[2.5rem] md:rounded-3xl rounded-2xl absolute z-30`}
      ></div>
      <div></div>
    </div>
  );
};

export default ChooseFallo;

// shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]
