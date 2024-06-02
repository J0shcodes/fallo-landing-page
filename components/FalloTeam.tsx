"use client";

import { useState } from "react";

const texts = [
  "A productivity tool that finally gets you",
  "A GAME CHANGER",
  "Fallo is the team you never knew you needed.",
];

// const changeRing = () => {
//     return <div className="w-[30.125rem] h-[30.125rem] border-[3.523125rem] border-solid border-[#219653] rounded-full absolute top-[5.875rem] right-[-8rem]"></div>
// }

const FalloTeam = () => {
  const [text, setText] = useState(
    "Fallo is the team you never knew you needed."
  );
  const [animate, setAnimate] = useState(false);

  //   const triggerAnimation = () => {
  //     setAnimate(true);
  //     changeText();
  //   };

  //   const changeText = () => {
  //     for (let i = 0; i < texts.length; i++) {
  //       setInterval(() => {
  //         console.log(texts[i]);
  //       }, 3000);
  //     }
  //     // texts.forEach((text) => {
  //     //   setText(text);
  //     //   console.log(text)
  //     // });
  //   };

  return (
    <div
      className="lg:h-[41.8125rem] md:h-[28.75rem] h-[22.5rem] lg:pl-[6.875rem] pl-[2.625rem] lg:py-[5.875rem] py-[3.3125rem] relative overflow-hidden flex justify-between"
      onMouseEnter={() => setAnimate(true)}
      onMouseLeave={() => setAnimate(false)}
    >
      {animate ? (
        // <div className="relative bg-green-500 w-[61rem]">
        <>
          <div className="relative h-full flex flex-col justify-center items-center lg:w-[61rem] md:w-[31.3125rem] w-[15.875rem]">
            <div className="lg:text-[5.113125rem] md:text-[2.5rem] text-[2.0625rem] font-bold text-[#0b0b0b] lg:w-[62.625rem] md:w-[31.3125rem] w-[15.875rem] absolute opacity-0 animate-switch1">
              Fallo is the team you never knew you needed.
            </div>
            <div className="lg:text-[5.113125rem] md:text-[2.5rem] text-[2.0625rem] font-bold text-[#0b0b0b] lg:w-[62.625rem] md:w-[31.3125rem] w-[15.875rem] absolute opacity-0 animate-switch2">
              A Productivity tool that finally gets you.
            </div>
            <div className="lg:text-[5.113125rem] md:text-[2.5rem] text-[2.0625rem] font-bold text-[#0b0b0b] lg:w-[62.625rem] md:w-[31.3125rem] w-[15.875rem] absolute opacity-0 animate-switch3">
              A GAME CHANGER.
            </div>
          </div>

          <div className="relative lg:w-[30.125rem] md:w-[23.875rem] w-[15.5rem]">
            <div className="lg:w-[30.125rem] md:w-[23.875rem] w-[15.5rem] lg:h-[30.125rem] md:h-[23.875rem] h-[15.5rem] lg:border-[3.523125rem] md:border-[2.5rem] border-[1.8125rem] border-solid border-[#219653] rounded-full absolute right-[-8rem] opacity-0 animate-switch1"></div>
            <div className="lg:w-[30.125rem] md:w-[23.875rem] w-[15.5rem] lg:h-[30.125rem] md:h-[23.875rem] h-[15.5rem] lg:border-[3.523125rem] md:border-[2.5rem] border-[1.8125rem] border-solid border-[#2f80ed] rounded-full absolute right-[-8rem] opacity-0 animate-switch2"></div>
            <div className="lg:w-[30.125rem] md:w-[23.875rem] w-[15.5rem] lg:h-[30.125rem] md:h-[23.875rem] h-[15.5rem] lg:border-[3.523125rem] md:border-[2.5rem] border-[1.8125rem] border-solid border-[#f2c94c] rounded-full absolute right-[-8rem] opacity-0 animate-switch3"></div>
          </div>
        </>
      ) : (
        //  </div>
        <>
          <div className="lg:text-[5.113125rem] md:text-[2.5rem] text-[2.0625rem] font-bold text-[#0b0b0b] lg:w-[62.625rem] md:w-[31.3125rem] w-[15.875rem] flex self-center">
            Fallo is the team you never knew you needed.
          </div>
          <div className="relative lg:w-[30.125rem] md:w-[23.875rem] w-[15.5rem]">
            <div className="lg:w-[30.125rem] md:w-[23.875rem] w-[15.5rem] lg:h-[30.125rem] md:h-[23.875rem] h-[15.5rem] lg:border-[3.523125rem] md:border-[2.5rem] border-[1.8125rem] border-solid border-[#219653] rounded-full absolute right-[-8rem]"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default FalloTeam;
