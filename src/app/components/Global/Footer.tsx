// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative bg-black text-white pt-8 overflow-hidden">
            {/* Logo */}
            <div className="flex items-center justify-center pointer-events-none mb-16">
                <Image
                    src="/images/robotics.svg"
                    alt="Robotics"
                    width={1648}
                    height={0} 
                    className="w-full max-w-[1648px] h-auto"
                />
            </div>

            <div className="max-w-[325px] lg:max-w-none mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
                {/* Desktop copyright */}
                <div className="hidden lg:block lg:mr-24">
                    <p
                        className="text-sm text-gray-400 font-light"
                        style={{ lineHeight: "16px", letterSpacing: "4px" }}
                    >
                        ©2025 RICE ROBOTICS. ALL RIGHTS RESERVED.
                    </p>
                </div>

                {/* Links + socials */}
                <div className="flex-1 flex flex-col lg:flex-row items-center justify-between lg:text-left gap-4">
                    {/* Social links */}
                    <div className="flex items-center gap-4 justify-center lg:justify-start">
                        {/* X (Twitter) */}
                        <Link
                            href="https://x.com/realRiceAI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-105"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M3.0438 3.75L9.99339 12.8508L3 20.25H4.57406L10.6969 13.7718L15.6438 20.25H21L13.6592 10.6374L20.1687 3.75H18.5947L12.956 9.71614L8.4 3.75H3.0438ZM5.35852 4.88572H7.81913L18.685 19.1146H16.2244L5.35852 4.88572Z"
                                    fill="white"
                                />
                            </svg>
                        </Link>

                        {/* Discord */}
                        <Link
                            href="https://discord.com/invite/5fb2VUV29Z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-105"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M1.5 8.7C1.5 6.17976 1.5 4.91965 1.99047 3.95704C2.4219 3.11031 3.11031 2.4219 3.95704 1.99047C4.91965 1.5 6.17976 1.5 8.7 1.5H15.3C17.8202 1.5 19.0804 1.5 20.043 1.99047C20.8897 2.4219 21.5781 3.11031 22.0095 3.95704C22.5 4.91965 22.5 6.17976 22.5 8.7V15.3C22.5 17.8202 22.5 19.0804 22.0095 20.043C21.5781 20.8897 20.8897 21.5781 20.043 22.0095C19.0804 22.5 17.8202 22.5 15.3 22.5H8.7C6.17976 22.5 4.91965 22.5 3.95704 22.0095C3.11031 21.5781 2.4219 20.8897 1.99047 20.043C1.5 19.0804 1.5 17.8202 1.5 15.3V8.7Z"
                                    fill="white"
                                />
                                <path
                                    d="M17.7271 7.00498C16.659 6.53549 15.5169 6.19427 14.323 6C14.1763 6.24907 14.005 6.58406 13.8869 6.85056C12.6177 6.67123 11.3601 6.67123 10.1143 6.85056C9.99621 6.58406 9.82097 6.24907 9.67307 6C8.4778 6.19427 7.33445 6.53674 6.26638 7.00747C4.11207 10.066 3.52807 13.0486 3.82007 15.9888C5.24892 16.9913 6.63365 17.6002 7.99502 17.9987C8.33115 17.5641 8.63093 17.1021 8.8892 16.6152C8.39734 16.4396 7.92624 16.2229 7.4811 15.9713C7.5992 15.8892 7.7147 15.8032 7.82631 15.7148C10.5413 16.9078 13.4911 16.9078 16.1737 15.7148C16.2865 15.8032 16.402 15.8892 16.5188 15.9713C16.0724 16.2241 15.6 16.4408 15.1081 16.6164C15.3664 17.1021 15.6649 17.5654 16.0023 18C17.365 17.6015 18.751 16.9925 20.1799 15.9888C20.5225 12.5803 19.5946 9.62516 17.7271 7.00498ZM9.25906 14.1806C8.44406 14.1806 7.7757 13.4657 7.7757 12.5953C7.7757 11.7248 8.42978 11.0087 9.25906 11.0087C10.0883 11.0087 10.7567 11.7235 10.7424 12.5953C10.7437 13.4657 10.0883 14.1806 9.25906 14.1806ZM14.7409 14.1806C13.9259 14.1806 13.2575 13.4657 13.2575 12.5953C13.2575 11.7248 13.9116 11.0087 14.7409 11.0087C15.5701 11.0087 16.2385 11.7235 16.2243 12.5953C16.2243 13.4657 15.5701 14.1806 14.7409 14.1806Z"
                                    fill="#5865F2"
                                />
                            </svg>
                        </Link>

                        {/* Telegram Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="10.5"
                                        fill="url(#paint0_linear_21232_1372)"
                                    />
                                    <path
                                        d="M17.2399 7.65659C17.3334 7.05249 16.7591 6.57567 16.2219 6.8115L5.52361 11.5086C5.13842 11.6778 5.1666 12.2612 5.5661 12.3884L7.77236 13.091C8.19344 13.2251 8.64939 13.1558 9.01709 12.9017L13.9912 9.4652C14.1412 9.36157 14.3047 9.57485 14.1766 9.70697L10.5961 13.3985C10.2488 13.7566 10.3177 14.3634 10.7355 14.6254L14.7442 17.1392C15.1938 17.4212 15.7723 17.1379 15.8564 16.5946L17.2399 7.65659Z"
                                        fill="white"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_21232_1372"
                                            x1="12"
                                            y1="1.5"
                                            x2="12"
                                            y2="22.5"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#37BBFE" />
                                            <stop offset="1" stopColor="#007DBB" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <svg
                                    width="12"
                                    height="8"
                                    viewBox="0 0 12 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="transition-transform group-hover:rotate-180"
                                >
                                    <path
                                        d="M1 1.5L6 6.5L11 1.5"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            {/* Dropdown */}
                            <div className="absolute z-50 left-1/2 transform -translate-x-1/2 bg-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bottom-full mb-2">
                                <div className="py-2 min-w-[120px]">
                                    <div className="px-4 py-2 text-sm text-gray-300 border-b border-gray-700">
                                        Telegram
                                    </div>
                                    <Link href="https://t.me/Rice_AI" target="_blank">
                                        <button className="w-full px-4 py-2 text-sm text-left hover:bg-gray-800 transition-colors cursor-pointer">
                                            English
                                        </button>
                                    </Link>
                                    <Link href="https://t.me/RiceAI_CN" target="_blank">
                                        <button className="w-full px-4 py-2 text-sm text-left hover:bg-gray-800 transition-colors cursor-pointer">
                                            Chinese
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Terms link */}
                    <Link
                        href="/terms"
                        className="text-sm text-gray-400 hover:text-white transition-colors font-light flex items-center gap-2"
                        style={{ lineHeight: "16px", letterSpacing: "4px" }}
                    >
                        TERMS
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                        >
                            <path
                                d="M0.833333 0C0.373096 0 1.24176e-08 0.373096 1.24176e-08 0.833333C1.24176e-08 1.29357 0.373096 1.66667 0.833333 1.66667H7.15482L0.244078 8.57741C-0.0813592 8.90285 -0.0813592 9.43049 0.244078 9.75592C0.569515 10.0814 1.09715 10.0814 1.42259 9.75592L8.33333 2.84518V9.16667C8.33333 9.6269 8.70643 10 9.16667 10C9.6269 10 10 9.6269 10 9.16667V0.833333C10 0.373096 9.6269 0 9.16667 0H0.833333Z"
                                fill="white"
                            />
                        </svg>
                    </Link>

                    {/* Email link - Keep as <a> since it's a mailto link */}
                    <a
                        href="mailto:hello@riceai.xyz"
                        className="text-sm text-gray-400 hover:text-white transition-colors font-light flex items-center gap-2"
                        style={{ lineHeight: "16px", letterSpacing: "4px" }}
                    >
                        hello@riceai.xyz
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#fff"
                            width="14px"
                            height="14px"
                            viewBox="0 0 1920 1920"
                        >
                            <path
                                d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z"
                                fillRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>

                {/* Mobile copyright */}
                <div className="block lg:hidden text-center lg:text-left">
                    <p
                        className="text-xs text-gray-400 font-light"
                        style={{ lineHeight: "16px", letterSpacing: "4px" }}
                    >
                        ©2025 RICE AI HOLDING LIMITED. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
}