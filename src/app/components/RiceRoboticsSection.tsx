'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';

interface RobotModel {
    id: string;
    title: string;
    description: string;
    image: string;
    type: string;
    mainImage: string;
    mainDescription: string;
}

const RiceRoboticsSection = () => {
    const [activeModel, setActiveModel] = useState(0);

    const robotModels: RobotModel[] = [
        {
            id: 'chat',
            title: 'Chat',
            description: 'Powered by multimodal AI for language, vision, and navigation, it\'s a smart assistant that learns, adapts, and evolves to your needs.',
            image: '/images/robot-chat_main.png',
            type: 'Chat',
            mainImage: '/images/robot-chat_main.png',
            mainDescription: 'RICE has come alive understanding your questions, responding naturally, and guiding you to your destination.'
        },
        {
            id: 'delivery',
            title: 'Delivery',
            description: 'Meet RICE, your delivery specialist swift, secure, and powered by smart navigation.',
            image: '/images/robot-delivery_main.png',
            type: 'Delivery ROBOT',
            mainImage: '/images/robot-delivery_main.png',
            mainDescription: 'Meet RICE, your delivery specialist swift, secure, and powered by smart navigation.'
        },
        {
            id: 'disinfection',
            title: 'Disinfection robot',
            description: 'Meet RICE, your disinfection specialist carrying disinfectant and sterilising every space for your peace of mind.',
            image: '/images/robot-disinfection.png',
            type: 'DISINFECTION ROBOT',
            mainImage: '/images/robot-disinfection.png',
            mainDescription: 'Meet RICE, your disinfection specialist carrying disinfectant and sterilising every space for your peace of mind.'
        }
    ];

    const nextModel = useCallback(() => {
        setActiveModel((prev) => (prev + 1) % robotModels.length);
    }, [robotModels.length]);

    const prevModel = useCallback(() => {
        setActiveModel((prev) => (prev - 1 + robotModels.length) % robotModels.length);
    }, [robotModels.length]);

    return (
        <section
            className="bg-[#171717] px-6 py-6 rounded-2xl mt-10"
            id="rice-robotics"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 4px 0px' }}
        >
            <div className="lg:h-[80vh] mx-auto relative overflow-hidden">
                <div className="grid grid-cols-12 gap-4 h-full">
                    {/* Left Content */}
                    <div className="text-center lg:text-left col-span-12 lg:col-span-5 flex flex-col h-full">
                        <div className="flex-grow">
                            <p
                                className="text-[#ffffffb8] text-xs font-medium uppercase mb-4"
                                style={{ lineHeight: '16px', letterSpacing: '4px' }}
                            >
                                the innovators behind rice ai
                            </p>
                            <h2 className="text-2xl text-balance lg:text-5xl font-medium text-white mb-6">
                                Rice Robotics
                            </h2>
                        </div>
                        <a
                            href="https://www.ricerobotics.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-century-gothic px-4 py-2 inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 font-light self-center lg:self-start"
                        >
                            <span>COMPANY</span>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.201 10.1565C10.6946 10.1553 10.2851 9.74376 10.2864 9.2374L10.3003 3.6355L2.14816 11.7877C1.79018 12.1456 1.20978 12.1456 0.851798 11.7877C0.493818 11.4297 0.493818 10.8493 0.851798 10.4913L9.00396 2.33914L3.40279 2.35362C2.8964 2.35493 2.48484 1.94545 2.48359 1.43906C2.48233 0.93273 2.89176 0.521245 3.39808 0.519954L11.2205 0.500003C11.7286 0.498707 12.1408 0.91088 12.1395 1.41894L12.1201 9.24195C12.1188 9.74831 11.7073 10.1578 11.201 10.1565Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                    </div>

                    {/* Spacer for medium screens */}
                    <div className="col-span-12 md:col-span-1 hidden md:block lg:hidden"></div>

                    {/* Mobile Slider */}
                    <div className="block lg:hidden col-span-12 md:col-span-4 relative rounded-3xl border border-gray-700/30 backdrop-blur-sm overflow-hidden w-full h-full min-h-[400px]">
                        <div className="relative h-full overflow-hidden">
                            {robotModels.map((model, index) => (
                                <div
                                    key={model.id}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === activeModel
                                            ? 'opacity-100 transform translate-x-0 z-10'
                                            : index < activeModel
                                                ? 'opacity-0 transform -translate-x-full z-0'
                                                : 'opacity-0 transform translate-x-full z-0'
                                        }`}
                                >
                                    <h4 className="text-lg text-white p-6 lg:p-8">{model.mainDescription}</h4>
                                    <div className="absolute bottom-0 md:-bottom-40 lg:-bottom-20 right-0 -z-10">
                                        <Image
                                            src={model.mainImage}
                                            alt={model.title}
                                            width={400}
                                            height={300}
                                            loading='lazy'
                                            className="mt-auto object-cover rounded-3xl opacity-50 max-w-full"
                                            
                                        />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 px-6 lg:p-8 rounded-b-3xl mb-6 lg:mb-0">
                                        <div className="flex justify-between items-end">
                                            <div className="text-gray-300 text-lg w-full lg:w-7/12">
                                                <p
                                                    className="text-gray-300 text-xs font-medium uppercase"
                                                    style={{ lineHeight: '16px', letterSpacing: '4px' }}
                                                >
                                                    MODELS
                                                </p>
                                                <p
                                                    className="text-white text-xs uppercase"
                                                    style={{ lineHeight: '16px', letterSpacing: '4px' }}
                                                >
                                                    {model.type}
                                                </p>
                                            </div>
                                            <div className="flex space-x-2 h-fit self-end">
                                                <button
                                                    onClick={prevModel}
                                                    className="rounded-xl p-3 transition-colors duration-300 bg-[#212121] hover:scale-105 cursor-pointer"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className="rotate-180">
                                                        <g filter="url(#filter0_dd_61811_73)">
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M13.6984 6.1558C13.2438 6.61263 13.2457 7.35148 13.7025 7.80605L18.7565 12.835L6.41667 12.835C5.77234 12.835 5.25 13.3573 5.25 14.0016C5.25 14.646 5.77234 15.1683 6.41667 15.1683L18.7565 15.1683L13.7026 20.1961C13.2457 20.6506 13.2439 21.3895 13.6985 21.8464C14.153 22.3032 14.8918 22.305 15.3486 21.8505L22.4064 14.8286C22.8648 14.3726 22.8648 13.6307 22.4065 13.1746L15.3486 6.15171C14.8918 5.69714 14.153 5.69897 13.6984 6.1558Z"
                                                                fill="white"
                                                                fillOpacity="0.72"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <filter id="filter0_dd_61811_73" x="-1.5" y="0" width="31" height="32.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                <feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_61811_73" />
                                                                <feOffset dy="3" />
                                                                <feGaussianBlur stdDeviation="1.5" />
                                                                <feComposite in2="hardAlpha" operator="out" />
                                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_61811_73" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                <feMorphology radius="0.5" operator="erode" in="SourceAlpha" result="effect2_dropShadow_61811_73" />
                                                                <feOffset dy="1" />
                                                                <feGaussianBlur stdDeviation="0.5" />
                                                                <feComposite in2="hardAlpha" operator="out" />
                                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                                                <feBlend mode="normal" in2="effect1_dropShadow_61811_73" result="effect2_dropShadow_61811_73" />
                                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_61811_73" result="shape" />
                                                            </filter>
                                                        </defs>
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={nextModel}
                                                    className="rounded-xl p-3 transition-colors duration-300 bg-[#212121] hover:scale-105 cursor-pointer"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                        <g filter="url(#filter0_dd_61811_73)">
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M13.6984 6.1558C13.2438 6.61263 13.2457 7.35148 13.7025 7.80605L18.7565 12.835L6.41667 12.835C5.77234 12.835 5.25 13.3573 5.25 14.0016C5.25 14.646 5.77234 15.1683 6.41667 15.1683L18.7565 15.1683L13.7026 20.1961C13.2457 20.6506 13.2439 21.3895 13.6985 21.8464C14.153 22.3032 14.8918 22.305 15.3486 21.8505L22.4064 14.8286C22.8648 14.3726 22.8648 13.6307 22.4065 13.1746L15.3486 6.15171C14.8918 5.69714 14.153 5.69897 13.6984 6.1558Z"
                                                                fill="white"
                                                                fillOpacity="0.72"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <filter id="filter0_dd_61811_73" x="-1.5" y="0" width="31" height="32.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                <feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_61811_73" />
                                                                <feOffset dy="3" />
                                                                <feGaussianBlur stdDeviation="1.5" />
                                                                <feComposite in2="hardAlpha" operator="out" />
                                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_61811_73" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                <feMorphology radius="0.5" operator="erode" in="SourceAlpha" result="effect2_dropShadow_61811_73" />
                                                                <feOffset dy="1" />
                                                                <feGaussianBlur stdDeviation="0.5" />
                                                                <feComposite in2="hardAlpha" operator="out" />
                                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                                                <feBlend mode="normal" in2="effect1_dropShadow_61811_73" result="effect2_dropShadow_61811_73" />
                                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_61811_73" result="shape" />
                                                            </filter>
                                                        </defs>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Robot Models Grid */}
                    <div className="col-span-12 md:col-span-7 lg:col-span-3 flex flex-col gap-4 h-full">
                        {robotModels.map((model, index) => (
                            <div
                                key={model.id}
                                onClick={() => setActiveModel(index)}
                                className={` border border-gray-700/30 rounded-2xl p-4 flex flex-col h-full cursor-pointer transition-all duration-300 '
                                    }`}
                            >
                                <div className="bg-[#262626] w-14 h-14 flex items-center justify-center rounded-lg">
                                    <Image
                                        src={model.image}
                                        alt={model.title}
                                        width={56}
                                        height={56}
                                        loading='lazy'
                                        className="opacity-50 max-w-full max-h-full object-contain"
                                    />
                                </div>
                                <p className="text-lg font-semibold mb-1 mt-4 text-white">{model.title}</p>
                                <p className="text-[#ffffffb8] text-sm flex-grow">{model.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Slider */}
                    <div className="hidden lg:block col-span-12 md:col-span-4 relative rounded-3xl border border-gray-700/30  overflow-hidden w-full h-full min-h-[500px]">
                        <div className="relative h-full overflow-hidden">
                            {robotModels.map((model, index) => (
                                <div
                                    key={model.id}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out  ${index === activeModel
                                            ? 'opacity-100 transform translate-x-0 z-10'
                                            : index < activeModel
                                                ? 'opacity-0 transform -translate-x-full z-0'
                                                : 'opacity-0 transform translate-x-full z-0'
                                        }`}
                                >
                                    <h4 className="text-lg text-white p-6 lg:p-8">{model.mainDescription}</h4>
                                    <div className="absolute bottom-0 md:-bottom-40 lg:-bottom-20 right-0 -z-10">
                                        <Image
                                            src={model.mainImage}
                                            alt={model.title}
                                            width={500}
                                            height={400}
                                            loading='lazy'
                                            className="mt-auto object-cover rounded-3xl opacity-50 max-w-full"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 px-6 lg:p-8 rounded-b-3xl mb-6 lg:mb-0">
                                        <div className="flex justify-between items-end">
                                            <div className="text-gray-300 text-lg w-full lg:w-7/12">
                                                <p
                                                    className="text-gray-300 text-xs font-medium uppercase"
                                                    style={{ lineHeight: '16px', letterSpacing: '4px' }}
                                                >
                                                    MODELS
                                                </p>
                                                <p
                                                    className="text-white text-xs uppercase"
                                                    style={{ lineHeight: '16px', letterSpacing: '4px' }}
                                                >
                                                    {model.type}
                                                </p>
                                            </div>
                                            <div className="flex space-x-2 h-fit self-end">
                                                <button
                                                    onClick={prevModel}
                                                    className="rounded-xl p-3 transition-colors duration-300 bg-[#212121] hover:scale-110 cursor-pointer"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className="rotate-180">
                                                        <g filter="url(#filter0_dd_61811_73)">
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M13.6984 6.1558C13.2438 6.61263 13.2457 7.35148 13.7025 7.80605L18.7565 12.835L6.41667 12.835C5.77234 12.835 5.25 13.3573 5.25 14.0016C5.25 14.646 5.77234 15.1683 6.41667 15.1683L18.7565 15.1683L13.7026 20.1961C13.2457 20.6506 13.2439 21.3895 13.6985 21.8464C14.153 22.3032 14.8918 22.305 15.3486 21.8505L22.4064 14.8286C22.8648 14.3726 22.8648 13.6307 22.4065 13.1746L15.3486 6.15171C14.8918 5.69714 14.153 5.69897 13.6984 6.1558Z"
                                                                fill="white"
                                                                fillOpacity="0.72"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <filter id="filter0_dd_61811_73" x="-1.5" y="0" width="31" height="32.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                <feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_61811_73" />
                                                                <feOffset dy="3" />
                                                                <feGaussianBlur stdDeviation="1.5" />
                                                                <feComposite in2="hardAlpha" operator="out" />
                                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_61811_73" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                <feMorphology radius="0.5" operator="erode" in="SourceAlpha" result="effect2_dropShadow_61811_73" />
                                                                <feOffset dy="1" />
                                                                <feGaussianBlur stdDeviation="0.5" />
                                                                <feComposite in2="hardAlpha" operator="out" />
                                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                                                <feBlend mode="normal" in2="effect1_dropShadow_61811_73" result="effect2_dropShadow_61811_73" />
                                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_61811_73" result="shape" />
                                                            </filter>
                                                        </defs>
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={nextModel}
                                                    className="rounded-xl p-3 transition-colors duration-300 bg-[#212121] hover:scale-105 cursor-pointer"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                        <g filter="url(#filter0_dd_61811_73)">
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M13.6984 6.1558C13.2438 6.61263 13.2457 7.35148 13.7025 7.80605L18.7565 12.835L6.41667 12.835C5.77234 12.835 5.25 13.3573 5.25 14.0016C5.25 14.646 5.77234 15.1683 6.41667 15.1683L18.7565 15.1683L13.7026 20.1961C13.2457 20.6506 13.2439 21.3895 13.6985 21.8464C14.153 22.3032 14.8918 22.305 15.3486 21.8505L22.4064 14.8286C22.8648 14.3726 22.8648 13.6307 22.4065 13.1746L15.3486 6.15171C14.8918 5.69714 14.153 5.69897 13.6984 6.1558Z"
                                                                fill="white"
                                                                fillOpacity="0.72"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <filter id="filter0_dd_61811_73" x="-1.5" y="0" width="31" height="32.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                <feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_61811_73" />
                                                                <feOffset dy="3" />
                                                                <feGaussianBlur stdDeviation="1.5" />
                                                                <feComposite in2="hardAlpha" operator="out" />
                                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_61811_73" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                <feMorphology radius="0.5" operator="erode" in="SourceAlpha" result="effect2_dropShadow_61811_73" />
                                                                <feOffset dy="1" />
                                                                <feGaussianBlur stdDeviation="0.5" />
                                                                <feComposite in2="hardAlpha" operator="out" />
                                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                                                <feBlend mode="normal" in2="effect1_dropShadow_61811_73" result="effect2_dropShadow_61811_73" />
                                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_61811_73" result="shape" />
                                                            </filter>
                                                        </defs>
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
        </section>
    );
};

export default RiceRoboticsSection;