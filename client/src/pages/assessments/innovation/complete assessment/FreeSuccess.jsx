import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export function FreeSuccess() {
  return (
    <div className="bg-Greyscale200 mx-auto">
      <section className="bg-Greyscale200">
        <div className="w-[min(90rem,100%)] md:w-[min(45rem,100%)] lg:w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 py-16 grid lg:grid-cols-2 lg:justify-between">
          <div className="grid gap-12 text-center lg:text-left">
            <div className="grid gap-6 lg:w-3/5">
              <p className="text-[44px] md:text-[56px] lg:text-[74px] font-bold lg:font-medium leading-tight">
                Congratulations on completing
              </p>
              <p className="text-[24px] md:text-[30px] lg:text-[44px] font-bold">
                the Mindset & Culture SHAPER assessment
              </p>
            </div>
            <p className="text-[18px]">
              Organizations that encourage the right mindset and foster
              world-class cultures have the advantage
            </p>
          </div>
          <div className="mt-10 lg:mt-0 relative grid lg:ml-auto lg:w-2/3">
            <div className="grid w-[min(26rem,100%)] mx-auto relative">
              <div className="[clip-path:polygon(50%_0%,0%_100%,100%_100%)] w-full h-[150px] bg-Greyscale400 -mb-4"></div>
              <div className="w-[90%] mx-auto h-[270px] md:h-[340px] bg-Greyscale absolute z-[1] -translate-x-[50%] left-1/2 p-5 top-5">
                <div className="h-[131%] w-[100%] mx-auto bg-Greyscale rounded-full relative grid place-items-center border border-Blue500">
                  <div className="h-[95%] w-[95%] -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 bg-Blue500 rounded-full absolute text-center">
                    <p className="mt-10 text-[30px] md:text-[40px] font-bold text-Greyscale">
                      Your Score
                      <br />
                      <span className="text-[80px] md:text-[90px]">?</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[270px] md:h-[310px] bg-Greyscale500 rounded-t-[20px] relative grid grid-cols-2 pt-3 overflow-hidden">
                <div className="[clip-path:polygon(100%_50%,0_0,0_100%)] w-full h-full bg-Greyscale300 justify-self-start self-center z-[2]"></div>
                <div className="[clip-path:polygon(0%_50%,100%_0,100%_100%)] w-full h-full bg-Greyscale300 justify-self-start self-center z-[2]"></div>
                <div className="[clip-path:polygon(50%_0%,0%_100%,100%_100%)] w-full md:w-[105%] md:justify-self-center h-[48.9%] bg-Greyscale400 z-[2] absolute bottom-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-Greyscale800">
        <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 grid gap-12 text-Greyscale">
          <p className="text-[30px] md:text-[44px] font-bold lg:font-medium leading-tight text-center">
            Know others who could benefit from this assessment?
          </p>
          <div className="grid gap-8 justify-center bg-Greyscale700 rounded-t-[40px] pt-8 pb-10">
            <p className="text-center text-[18px]">Spread the word</p>
            <div className="flex gap-7 items-center text-2xl md:text-3xl">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaTwitter />
              <TfiEmail />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
