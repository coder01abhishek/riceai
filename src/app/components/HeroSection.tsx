"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays correctly
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  const logos = [
    { src: "/images/solayer-logo.svg", alt: "Solayer", text: null },
    { src: "/images/dwf-logo.png", alt: "DWF", text: null },
    { src: "/images/bnb-logo.svg", alt: "BNB Chain", text: "BNB Chain" },
    { src: "/images/floki-logo.svg", alt: "Floki", text: null },
    { src: "/images/tokenfi-logo.svg", alt: "Tokenfi", text: null },
    { src: "/images/nvidia-logo.svg", alt: "NVIDIA", text: null },
    { text: "MVB", isText: true },
  ];

  // Duplicate logos for seamless scrolling
  const scrollingLogos = [...logos, ...logos];

  return (
    <section className="relative rounded-2xl h-[90vh] bg-black text-white flex flex-col justify-center items-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        id="hero-video-bg"
        src="/videos/hero-video-bg.mp4"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black scale-[400%] sm:scale-200 md:scale-125 lg:scale-100 min-w-full min-h-full object-contain"
        playsInline
        autoPlay
        muted
        loop
      />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-6xl w-full">
        {/* Subtitle */}
        <div className="mb-6 lg:mb-8 hero-subtitle-box-shadow w-fit mx-auto">
          <p 
            className="text-gray-400 text-xs font-medium uppercase" 
            style={{ 
              lineHeight: "16px", 
              letterSpacing: "4px", 
              fontFeatureSettings: '"ss11", "liga" 0, "calt" 0' 
            }}
          >
            Strong. Fast. Simple.
          </p>
        </div>

        {/* Main Heading */}
        <div className="flex justify-center mb-10 lg:mb-12">
          <h1 className="text-3xl md:text-7xl font-medium leading-tight text-center">
            The Next Wave of<br />
            Physical AI is RICE
          </h1>
        </div>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
          <div className="scrolling-logos">
            <div className="logos-track animate-scroll">
              {scrollingLogos.map((logo, index) => (
                <div key={index} className="logo-item flex items-center justify-center min-w-max px-4">
                  {logo.isText ? (
                    <p className="zen-dots text-2xl text-gray-300">{logo.text}</p>
                  ) : (
                    <>
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className="h-8 w-auto max-w-[100px] object-contain"
                      />
                      {logo.text && (
                        <span className="text-gray-400 ml-2 text-sm">{logo.text}</span>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute w-full bottom-10 pb-6 md:px-10 flex justify-between">
        <div></div> {/* Empty div for spacing */}
        <Link href="#depin-protocol">
          <button className="bg-white/20 p-3 rounded-lg cursor-pointer hover:scale-105 hover:bg-white/30 transition-all duration-300 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path 
                d="M7.83337 1.16671C7.83337 0.70647 7.46028 0.333374 7.00004 0.333374C6.5398 0.333374 6.16671 0.70647 6.16671 1.16671V10.8215L1.75596 6.41079C1.43053 6.08535 0.902889 6.08535 0.577452 6.41079C0.252015 6.73622 0.252015 7.26386 0.577452 7.5893L6.41079 13.4226C6.73622 13.7481 7.26386 13.7481 7.5893 13.4226L13.4226 7.5893C13.7481 7.26386 13.7481 6.73622 13.4226 6.41079C13.0972 6.08535 12.5696 6.08535 12.2441 6.41079L7.83337 10.8215V1.16671Z" 
                fill="white"
              />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}