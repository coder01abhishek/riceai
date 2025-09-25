// src/components/AgiChallenges.tsx
import React from "react";
import Image from "next/image";

const challenges = [
  {
    title: "Time & Cost",
    desc: "The time and costs associated with dataset collection are too high.",
    chart: true,
    header: "Service",
    subHeader: "Main Account",
    flag: "/united-states.png",
  },
  {
    title: "Multiple Models",
    desc: "There are too many models, requiring excessive development time to integrate them.",
    chart: true,
  },
  {
    title: "High Technical Requirements",
    desc: "Testing and debugging require a highly skilled developer team.",
    chart: true,
  },
  {
    title: "Inconsistent Structures",
    desc: "Data and model structures are inconsistent, making datasets and models difficult to use on the same devices.",
    chart: true,
  },
  {
    title: "Insufficient Hardware",
    desc: "There are insufficient local devices with high computing power to run models effectively.",
    chart: true,
  },
  {
    title: "Waste of Effort",
    desc: "Models are retrained for the same purposes and using the same algorithms by different companies, leading to wasted efforts.",
    chart: true,
  },
];

export default function AgiChallenges() {
  return (
    <section className="py-16 rounded-2xl px-6 lg:px-10 mt-10 bg-[#171717]" id="agi-challenges">
      <div>
        <div className="mb-16">
          <h2 className="text-2xl lg:text-6xl font-medium text-white mb-6">
            What's stopping AGI for<br /> robotics from advancing?
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Card 1 */}
          <div className="col-span-12 md:col-span-3 bg-[#262626] rounded-3xl p-6 flex flex-col h-full">
            <div className="flex justify-center mb-6">
              <div className="bg-[#171717] p-4 rounded-2xl w-full">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-[#171717] rounded-full w-8 h-8 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                      <g clipPath="url(#clip0)">
                        <ellipse cx="16" cy="31.2" rx="12.8" ry="9.6" fill="white" fillOpacity="0.72" />
                        <circle opacity="0.9" cx="16" cy="12.8" r="6.4" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0"><rect width="32" height="32" rx="16" fill="white" /></clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white mb-1">Service</p>
                    <p className="text-xs text-gray-400">Main Account</p>
                  </div>
                  <Image
                    src="/images/united-states.png"
                    alt="US Flag"
                    width={20}
                    height={20}
                    className="ml-auto"
                  />
                </div>
                <div className="w-full h-[1px] bg-[#333] mb-2"></div>
                <div className="h-32 bg-[#171717] rounded-md flex items-center justify-center">
                  {/* Placeholder for chart */}
                  <canvas className="w-full h-full"></canvas>
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <h3 className="text-lg text-white mb-2 font-medium">Time &amp; Cost</h3>
              <p className="text-gray-400 text-sm">{challenges[0].desc}</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-span-12 md:col-span-4 bg-[#262626] rounded-3xl p-6 flex flex-col h-full">
            <div className="flex justify-center mb-6">
              <div className="bg-[#171717] p-4 rounded-2xl w-full h-32">
                <canvas className="w-full h-full"></canvas>
              </div>
            </div>
            <div className="mt-auto">
              <h3 className="text-lg text-white mb-2 font-medium">Multiple Models</h3>
              <p className="text-gray-400 text-sm">{challenges[1].desc}</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-span-12 md:col-span-5 bg-[#262626] rounded-3xl p-6 flex flex-col h-full">
            <div className="flex justify-center mb-6">
              <div className="bg-[#171717] p-4 rounded-2xl w-full h-32">
                <canvas className="w-full h-full"></canvas>
              </div>
            </div>
            <div className="mt-auto">
              <h3 className="text-lg text-white mb-2 font-medium">High Technical Requirements</h3>
              <p className="text-gray-400 text-sm">{challenges[2].desc}</p>
            </div>
          </div>

          {/* Remaining cards: repeat similarly with appropriate col-span */}
          {/* Card 4 */}
          <div className="col-span-12 md:col-span-5 bg-[#262626] rounded-3xl p-6 flex flex-col h-full">
            <div className="flex justify-center mb-6">
              <div className="bg-[#171717] p-4 rounded-2xl w-full h-32">
                <canvas className="w-full h-full"></canvas>
              </div>
            </div>
            <div className="mt-auto">
              <h3 className="text-lg text-white mb-2 font-medium">Inconsistent Structures</h3>
              <p className="text-gray-400 text-sm">{challenges[3].desc}</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-span-12 md:col-span-4 bg-[#262626] rounded-3xl p-6 flex flex-col h-full">
            <div className="flex justify-center mb-6">
              <div className="bg-[#171717] p-4 rounded-2xl w-full h-32">
                <canvas className="w-full h-full"></canvas>
              </div>
            </div>
            <div className="mt-auto">
              <h3 className="text-lg text-white mb-2 font-medium">Insufficient Hardware</h3>
              <p className="text-gray-400 text-sm">{challenges[4].desc}</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-span-12 md:col-span-3 bg-[#262626] rounded-3xl p-6 flex flex-col h-full">
            <div className="flex justify-center mb-6">
              <div className="bg-[#171717] p-4 rounded-2xl w-full h-32">
                <canvas className="w-full h-full"></canvas>
              </div>
            </div>
            <div className="mt-auto">
              <h3 className="text-lg text-white mb-2 font-medium">Waste of Effort</h3>
              <p className="text-gray-400 text-sm">{challenges[5].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
