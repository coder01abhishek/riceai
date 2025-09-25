"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MinibotSection() {
  const [showVideo, setShowVideo] = useState(false);

  // Disable background scroll when video is open
  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [showVideo]);

  return (
    <section
      className="relative h-[70vh] lg:min-h-[90vh] rounded-2xl bg-white/10 overflow-hidden flex items-center justify-center mt-10"
      id="minibot"
    >
      {/* Background Image */}
      <div className="absolute bottom-0 lg:-bottom-20 flex items-center justify-center">
        <Image
          src="/images/minibot-m1.png"
          alt="Rice Minibot M1"
          className="object-cover max-w-full h-auto"
          width={1000}
          height={585}
        />
      </div>

      {/* Content */}
      <div className="absolute z-10 text-center px-6 max-w-6xl mx-auto top-10">
        <div className="mb-6 lg:mb-8 hero-subtitle-box-shadow w-fit mx-auto">
          <p
            className="text-gray-400 text-xs font-medium uppercase"
            style={{
              lineHeight: "16px",
              letterSpacing: "4px",
              fontFeatureSettings: "'ss11' on, 'liga' off, 'calt' off",
            }}
          >
            Strong. Fast. Simple.
          </p>
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white leading-tight">
          Rice Minibot <span className="text-white/60">M1 to</span>
          <br />
          Accelerate <span className="text-white/60">Adoption</span>
        </h2>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute w-full bottom-0 p-6 flex justify-between">
        <Link href="#agi-challenges">
          <button className="bg-white/20 p-3 rounded-lg cursor-pointer hover:scale-105 hover:bg-white/30 transition-all duration-300 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7.83337 1.16671C7.83337 0.70647 7.46028 0.333374 7.00004 0.333374C6.5398 0.333374 6.16671 0.70647 6.16671 1.16671V10.8215L1.75596 6.41079C1.43053 6.08535 0.902889 6.08535 0.577452 6.41079C0.252015 6.73622 0.252015 7.26386 0.577452 7.5893L6.41079 13.4226C6.73622 13.7481 7.26386 13.7481 7.5893 13.4226L13.4226 7.5893C13.7481 7.26386 13.7481 6.73622 13.4226 6.41079C13.0972 6.08535 12.5696 6.08535 12.2441 6.41079L7.83337 10.8215V1.16671Z"
                fill="white"
              />
            </svg>
          </button>
        </Link>

        <button
          onClick={() => setShowVideo(true)}
          className="bg-gray-300 text-sm font-semibold text-black px-3 rounded-lg py-2 flex items-center gap-2 cursor-pointer hover:scale-105 hover:bg-gray-400 transition-all duration-300"
        >
          Teaser Trailer
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.67179 1.33527C3.68175 1.34192 3.69175 1.34858 3.70177 1.35526L12.4924 7.21567C12.7467 7.38521 12.9826 7.5424 13.1637 7.68847C13.3527 7.84092 13.5756 8.05231 13.7038 8.36157C13.8733 8.77032 13.8733 9.22971 13.7038 9.63847C13.5756 9.94772 13.3527 10.1591 13.1637 10.3116C12.9826 10.4576 12.7468 10.6148 12.4924 10.7843L3.67182 16.6647C3.36091 16.872 3.08135 17.0584 2.84413 17.187C2.60674 17.3157 2.2809 17.4627 1.90059 17.44C1.41412 17.4109 0.964746 17.1704 0.670738 16.7818C0.440886 16.4779 0.38246 16.1253 0.357824 15.8564C0.333206 15.5877 0.333228 15.2517 0.333254 14.878L0.333255 3.15804C0.333255 3.14599 0.333254 3.13398 0.333254 3.122C0.333228 2.74834 0.333206 2.41234 0.357824 2.14366C0.38246 1.87478 0.440886 1.52211 0.670738 1.21827C0.964746 0.829623 1.41412 0.589123 1.90059 0.560078C2.2809 0.53737 2.60674 0.684379 2.84413 0.813028C3.08134 0.941584 3.3609 1.12798 3.67179 1.33527Z"
              fill="#171717"
            />
          </svg>
        </button>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center h-full overflow-hidden">
          <div className="relative w-full max-w-7xl">
            <button
              className="absolute top-5 right-5 text-white text-xl font-bold z-50 cursor-pointer"
              onClick={() => setShowVideo(false)}
            >
              ✕
            </button>
            <video
              src="/videos/floki-intro.mp4"
              controls
              autoPlay
              className="w-full rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
