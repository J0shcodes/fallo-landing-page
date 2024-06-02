import Image from "next/image";

import Underline from "@/public/icons/Underline";

const Testimonials = () => {
  return (
    <div className="lg:h-[110.75rem] lg:pt-[5.625rem] pt-[1.4375rem] pb-[3.6875rem] relative overflow-hidden bg-red-500">
      <div className="flex flex-col justify-center items-center">
        <h2 className="lg:text-[3.4375rem] text-[2.125rem] font-bold text-center lg:block hidden">
          What People are saying
        </h2>
        <div className="lg:block hidden">
          <Underline />
        </div>
      </div>
      <div className="lg:mt-[7.125rem] grid grid-cols-6 lg:gap-y-[2.875rem] gap-y-[8.375rem] md:gap-x-10 lg:px-[7rem] px-[2.375rem] bg-green-500">
        <div className="bg-orange-500 lg:col-start-1 lg:col-end-3 md:col-span-3 col-span-6">
          <div className="bg-[#0a3a6a] max-w-full flex flex-col justify-center items-center rounded-3xl px-4 pt-[2.125rem] pb-4 relative overflow-hidden">
            <div className="text-[#fafafa] mb-6 text-xl relative z-50">
              <div className="">
                Fallo has changed the game for me. I no longer dread my to-do
                list - in fact, I look forward to it
              </div>
              <p className="text-end mt-4">-Fred</p>
            </div>
            <Image
              src="/images/testimonial-1.png"
              alt=""
              width={352}
              height={208}
            />
            <div className="w-[5.375rem] h-[5.375rem] rounded-full border-[0.625rem] border-solid border-[#b7dafe] absolute top-[-2em] right-[-2rem] opacity-40"></div>
          </div>
        </div>

        <div className="lg:col-span-2 lg:col-end-7 md:col-span-3 col-span-6 bg-orange-500">
          <div className="bg-[#0a3a6a] max-w-full h-full flex flex-col justify-center items-center rounded-3xl px-4 pt-[2.125rem] pb-4 relative overflow-hidden">
            <div className="text-[#fafafa] mb-6 text-xl relative z-50">
              <div>
                Fallo&apos;s analytics have given me the insights I need to work
                smarter, not harder.
              </div>
              <p className="text-end mt-4">-Tolu</p>
            </div>
            <Image
              src="/images/testimonial-5.png"
              alt=""
              width={352}
              height={208}
            />
            <div className="w-[5.375rem] h-[5.375rem] rounded-full border-[0.625rem] border-solid border-[#b7dafe] absolute top-[-2em] right-[-2rem] opacity-40"></div>
          </div>
        </div>

        <div className="bg-orange-500 col-start-2 col-span-4 lg:block hidden">
          <div className="bg-[#0a3a6a] flex gap-6 col-start-3 col-span-4 py-4 pl-[1.375rem] rounded-3xl">
            <Image
              src="/images/testimonial-4.png"
              alt=""
              width={352}
              height={352}
              className="bg-red-700"
            />
            <div className="text-2xl text-[#fafafa] bg-blue-500">
              {/* <div className="bg-orange-500"> */}
              <div className="bg-red-700">
                Juggling a full-time job, side hustles, and a busy personal life
                used to leave me feeling constantly overwhelmed. But since
                downloading Fallo, I&apos;ve been able to take back control of
                my schedule and achieve a level of productivity I didn&apos;t
                even know was possible
              </div>
              <p>-Joe</p>
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="lg:col-start-1 lg:col-end-3 md:col-span-3 col-span-6 bg-orange-500">
          <div className="bg-[#0a3a6a] col-start-1 col-end-3 max-w-full h-full flex flex-col justify-center items-center rounded-3xl px-4 pt-[2.125rem] pb-4 relative overflow-hidden">
            <Image
              src="/images/testimonial-3.png"
              alt=""
              width={352}
              height={208}
            />
            <div className="text-[#fafafa] mt-6 text-xl relative">
              <div>
                Fallo is the tool I didn&apos;t know I needed - but now I
                can&apos;t imagine working without it.
              </div>
              <p className="text-end mt-4">-Mara</p>
            </div>
            <div className="w-[5.375rem] h-[5.375rem] rounded-full border-[0.625rem] border-solid border-[#b7dafe] absolute bottom-[-2em] left-[-2rem] opacity-40"></div>
          </div>
        </div>

        <div className="lg:col-span-2 lg:col-end-7 md:col-span-3 col-span-6 bg-orange-500">
          <div className="bg-[#0a3a6a] col-end-8 col-span-2 max-w-full flex flex-col justify-center items-center rounded-3xl px-4 pt-[2.125rem] pb-4 relative overflow-hidden">
            <Image
              src="/images/testimonial-2.png"
              alt=""
              width={352}
              height={208}
            />
            <div className="text-[#fafafa] mt-6 text-xl relative">
              <div>
                As a detail-oriented person, I love how customizable Fallo is.
                It&apos;s transformed the way I work.
              </div>
              <p className="text-end mt-4">-Ngozi</p>
            </div>
            <div className="w-[5.375rem] h-[5.375rem] rounded-full border-[0.625rem] border-solid border-[#b7dafe] absolute bottom-[-2em] left-[-2rem] opacity-40"></div>
          </div>
        </div>
      </div>
      {/* <div className="relative flex flex-col justify-center items-center bg-purple-500 h-[700px]"> */}
      <div className="lg:w-[10rem] w-[4.4375rem] lg:h-[10rem] h-[4.4375rem] rounded-full border-8 lg:border-[1.323125rem] border-solid border-[#f2c94c] absolute lg:top-[30.375rem] top-[29rem] left-[45%]"></div>
      <div className="lg:w-[10rem] w-[4.4375rem] lg:h-[10rem] h-[4.4375rem] rounded-full border-8 lg:border-[1.323125rem] border-solid border-[#219653] absolute lg:left-[-6.25rem] left-[45%] lg:top-2/4 top-[63.3rem] lg:block md:hidden"></div>
      <div className="lg:w-[10rem] w-[4.4375rem] lg:h-[10rem] h-[4.4375rem] rounded-full border-8 lg:border-[1.323125rem] border-solid border-[#2f80ed] absolute lg:right-[-6.25rem] top-2/4 lg:block hidden"></div>
      <div className="lg:w-[10rem] w-[4.4375rem] lg:h-[10rem] h-[4.4375rem] rounded-full border-8 lg:border-[1.323125rem] border-solid border-[#eb5757] absolute lg:top-[88.4375rem] top-[97.2rem] left-[45%] lg:block md:hidden"></div>
      {/* </div> */}
    </div>
  );
};

export default Testimonials;
