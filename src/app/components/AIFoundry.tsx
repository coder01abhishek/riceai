// components/AIFoundry.tsx
import Link from "next/link";

export default function AIFoundry() {
  return (
    <section
      className="relative h-[90vh] flex flex-wrap lg:flex-nowrap overflow-hidden bg-[#111111] rounded-2xl mt-10"
      id="ai-foundry"
    >
      {/* Content */}
      <div className="relative py-12 z-10 px-10 max-w-3xl">
        <div className="font-medium">
          <h2 className="text-2xl lg:text-6xl text-white mb-8 leading-tight">
            AI Foundry for Building Foundation Models for AGI Robots
          </h2>
          <p className="text-sm lg:text-xl text-gray-300 leading-relaxed max-w-xl">
            Powered by the decentralized data sharing protocol, our AI foundry
            disrupts the robotics industry with a decentralized marketplace to
            build foundation models for AGI for robots that are actuated in the
            physical world.
          </p>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute w-full bottom-0 pb-6 flex justify-between z-10">
          <Link href="#robot-brain">
            <button className="bg-white/20 p-3 rounded-lg cursor-pointer hover:scale-105 hover:bg-white/30 transition-all duration-300 animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7.83337 1.16671C7.83337 0.70647 7.46028 0.333374 7.00004 0.333374C6.5398 0.333374 6.16671 0.70647 6.16671 1.16671V10.8215L1.75596 6.41079C1.43053 6.08535 0.902889 6.08535 0.577452 6.41079C0.252015 6.73622 0.252015 7.26386 0.577452 7.5893L6.41079 13.4226C6.73622 13.7481 7.26386 13.7481 7.5893 13.4226L13.4226 7.5893C13.7481 7.26386 13.7481 6.73622 13.4226 6.41079C13.0972 6.08535 12.5696 6.08535 12.2441 6.41079L7.83337 10.8215V1.16671Z"
                  fill="white"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* Robot Image */}
      <div className="absolute lg:top-0 right-0 bottom-0">
        <img
          src="/images/ai-foundry-robot.png"
          alt="AI Foundry Robot"
          className="w-full h-full object-cover z-10"
        />
      </div>

      {/* Background SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="672"
        height="474"
        viewBox="0 0 672 474"
        fill="none"
        className="absolute top-0 right-0"
      >
        <g filter="url(#filter0_f_4392_22706)">
          <path
            d="M648.585 -98.1367C625.877 -92.8467 370.222 -106.619 329.505 -112L279 195C417.333 181.897 694 153.574 694 145.11C694 134.53 671.292 -103.427 648.585 -98.1367Z"
            fill="white"
            fillOpacity="0.28"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_4392_22706"
            x="0.200012"
            y="-390.8"
            width="972.6"
            height="864.6"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="139.4"
              result="effect1_foregroundBlur_4392_22706"
            />
          </filter>
        </defs>
      </svg>
    </section>
  );
}
