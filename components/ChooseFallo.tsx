"use client";

import { useState } from "react";

const ChooseFallo = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center relative h-[109.4375rem] w-full">
      <div
        className={`bg-[#0a3a6a] pt-[3.6875rem] pb-12 transition-all duration-1000 ease-out delay-300 ${
          hovered ? "w-full" : "max-w-[71.5rem] rounded-[2.5rem]"
        } absolute z-50`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="text-center text-white">
          <h2 className="text-[3.4375rem] font-bold">Why Choose Fallo?</h2>
          {hovered ? (
            ""
          ) : (
            <p className="text-lg">
              Experience the ultimate productivity boost with Fallo,
            </p>
          )}
        </div>
        <div
          className={`bg-[#b7dafe] ${
            hovered ? "rounded-2xl" : "rounded-tr-2xl rounded-br-2xl"
          }  p-[2.875rem] mt-[4.125rem] mr-[4.0625rem] relative overflow-hidden`}
        >
          <div
            className={`w-[20.1875rem] h-[20.1875rem] border-[2.36125rem] border-solid border-[#0a3a6a] rounded-full ${
              hovered ? "opacity-30" : "opacity-10"
            } absolute top-[-6.75rem] right-[-8.625rem]`}
          ></div>
          <h3 className="text-[2.5rem] font-semibold">Improved Productivity</h3>
          <div className="text-lg text-[#0b0b0b] mt-[2.5rem]">
            Fallo consolidates all your productivity needs into a single,
            intuitive platform. No more juggling multiple apps and tools - Fallo
            has you covered from start to finish
          </div>
        </div>
        {/* <div className="relative overflow-hidden"> */}
        <div
          className={`bg-[#1789fc] rounded-tl-2xl rounded-bl-2xl p-[2.875rem] mt-[4.125rem] ml-[4.0625rem] relative overflow-hidden ${
            hovered ? "h-[16.375rem]" : ""
          }`}
        >
          <div
            className={`w-[20.1875rem] h-[20.1875rem] border-[2.36125rem] border-solid border-[#b7dafe] rounded-full ${
              hovered ? "opacity-30" : "opacity-10"
            } absolute top-[-6.75rem] left-[-8.625rem]`}
          ></div>
          <div className={`${hovered ? "absolute" : ""}`}>
            <h3 className="text-[2.5rem] font-semibold">
              Collaborative Features
            </h3>
            <div className="text-lg text-[#0b0b0b] mt-[2.5rem]">
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
          className={`bg-[#64b0fd] ${
            hovered ? "rounded-2xl" : "rounded-tr-2xl rounded-br-2xl"
          } p-[2.875rem] mt-[4.125rem] mr-[4.0625rem] relative overflow-hidden`}
        >
          <div
            className={`w-[20.1875rem] h-[20.1875rem] border-[2.36125rem] border-solid border-[#b7dafe] rounded-full ${
              hovered ? "opacity-30" : "opacity-10"
            } absolute top-[-6.75rem] right-[-8.625rem]`}
          ></div>
          <h3 className="text-[2.5rem] font-semibold">Data Driven Insights</h3>
          <div className="text-lg text-[#0b0b0b] mt-[2.5rem]">
            Gain valuable data-driven insights to better understand your time
            management, task completion, and goal achievement patterns.
            Fallo&apos;s analytics empower you to work smarter, not harder.
          </div>
        </div>
      </div>
      <div
        className={`${
          hovered ? "w-[95%]" : "w-[68.35rem]"
        }  h-[75rem] bg-[#1789fc] rounded-[2.5rem] absolute z-40`}
      ></div>
      <div
        className={`${
          hovered ? "w-[85%]" : "w-[64.35rem]"
        } h-[78.25rem] bg-[#b7dafe] rounded-[2.5rem] absolute z-30`}
      ></div>
      <div></div>
    </div>
  );
};

export default ChooseFallo;

// shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]
