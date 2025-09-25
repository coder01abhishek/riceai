// components/DePINProtocol.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function DePINProtocol() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "First step to solving the data scarcity bottleneck is building a DePIN protocol for robotics data sharing.",
      image: "/images/minibot-grey.png",
      model: "rice ai model base"
    },
    {
      title: "The Floki Minibot M1 gives you access to exclusive benefits and fosters a true sense of belonging.",
      image: "/images/floki-m1.png",
      model: "floki"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative bg-[#161616] px-4 lg:px-6 py-4 rounded-2xl mt-10" id="depin-protocol" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px" }}>
      <div className="lg:h-[80vh] mx-auto relative overflow-hidden">
        <div className="grid grid-cols-12 gap-4 h-full">
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-xl text-balance lg:text-4xl font-medium text-white mb-6">
              DePIN Protocol and Reward System for Robotics Data Sharing
              <span className="text-blue-400"> .</span>
            </h2>
          </div>

          <div className="col-span-12 md:col-span-1"></div>

          {/* Middle Column */}
          <div className="col-span-12 md:col-span-3 flex flex-col gap-4 h-full">
            <div className=" border border-white/20 rounded-2xl p-4 h-full flex flex-col">
              <div className="w-full rounded-xl overflow-hidden p-10">
                <video 
                  src="/videos/rice-ai-coin.mp4" 
                  className="w-full h-full object-cover rounded-2xl scale-150"
                  autoPlay 
                  loop 
                  playsInline
                  muted
                />
              </div>
              <p className="text-gray-300 mt-auto">
                Any robot in the world can easily integrate into the network and will be rewarded with <span className="text-white">RICE tokens</span>.
              </p>
            </div>
            
            <div className=" border border-white/20 rounded-2xl p-4">
              <p className="text-2xl">🧠</p>
              <p className="text-gray-300 mt-4">
                Powered by multimodal AI for language, vision, and navigation, it&apos;s a smart assistant that learns, adapts, and evolves to your needs.
              </p>
            </div>
          </div>

          {/* Right Column - Slider */}
          <div className="col-span-12 md:col-span-4 relative rounded-3xl border border-gray-700/30 backdrop-blur-sm overflow-hidden w-full h-full">
            <div className="relative h-full min-h-[500px] overflow-hidden">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 transform translate-x-0 z-10"
                      : "opacity-0 transform translate-x-full z-0"
                  }`}
                >
                  <h4 className="text-lg text-white p-6 lg:p-8">{slide.title}</h4>
                  <div className="absolute bottom-0 md:-bottom-40 lg:-bottom-20 right-0 -z-10">
                    <Image
                      src={slide.image}
                      alt="Mini robot"
                      className="mt-auto object-cover rounded-3xl"
                      width={500} // Adjust width & height as needed
                      height={500}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 px-6 lg:p-8 rounded-b-3xl mb-6 lg:mb-0">
                    <div className="flex justify-between">
                      <div className="text-gray-300 text-lg w-full lg:w-7/12">
                        <p className="text-gray-300 text-xs font-medium uppercase" style={{ lineHeight: "16px", letterSpacing: "4px" }}>
                          MODELS
                        </p>
                        <p className="text-white text-xs uppercase" style={{ lineHeight: "16px", letterSpacing: "4px" }}>
                          {slide.model}
                        </p>
                      </div>
                      <div className="hidden lg:flex space-x-2 h-fit self-end">
                        <button 
                          onClick={prevSlide}
                          className="rounded-xl p-3 transition-colors duration-300 bg-gray-700 cursor-pointer hover:bg-gray-600"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className="rotate-180">
                            <path 
                              fillRule="evenodd" 
                              clipRule="evenodd" 
                              d="M13.6984 6.1558C13.2438 6.61263 13.2457 7.35148 13.7025 7.80605L18.7565 12.835L6.41667 12.835C5.77234 12.835 5.25 13.3573 5.25 14.0016C5.25 14.646 5.77234 15.1683 6.41667 15.1683L18.7565 15.1683L13.7026 20.1961C13.2457 20.6506 13.2439 21.3895 13.6985 21.8464C14.153 22.3032 14.8918 22.305 15.3486 21.8505L22.4064 14.8286C22.8648 14.3726 22.8648 13.6307 22.4065 13.1746L15.3486 6.15171C14.8918 5.69714 14.153 5.69897 13.6984 6.1558Z" 
                              fill="white" 
                              fillOpacity="0.72" 
                            />
                          </svg>
                        </button>
                        <button 
                          onClick={nextSlide}
                          className="rounded-xl p-3 transition-colors duration-300 bg-gray-700 cursor-pointer hover:bg-gray-600"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path 
                              fillRule="evenodd" 
                              clipRule="evenodd" 
                              d="M13.6984 6.1558C13.2438 6.61263 13.2457 7.35148 13.7025 7.80605L18.7565 12.835L6.41667 12.835C5.77234 12.835 5.25 13.3573 5.25 14.0016C5.25 14.646 5.77234 15.1683 6.41667 15.1683L18.7565 15.1683L13.7026 20.1961C13.2457 20.6506 13.2439 21.3895 13.6985 21.8464C14.153 22.3032 14.8918 22.305 15.3486 21.8505L22.4064 14.8286C22.8648 14.3726 22.8648 13.6307 22.4065 13.1746L15.3486 6.15171C14.8918 5.69714 14.153 5.69897 13.6984 6.1558Z" 
                              fill="white" 
                              fillOpacity="0.72" 
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute w-full bottom-0 pb-6 flex justify-between">
        <Link href="#minibot">
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
