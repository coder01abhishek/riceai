// src/components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaXTwitter, FaDiscord, FaTelegram } from "react-icons/fa6";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isTelegramOpenMobile, setIsTelegramOpenMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Protocol dePIN", href: "/protocol" },
    { name: "Features", href: "/features" },
    { name: "Company", href: "/company" },
    { name: "Whitepaper", href: "/whitepaper" },
  ];

  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center sm:px-6 px-4 h-16">
          <div className="h-10 w-10 flex items-center justify-center rounded-md border border-white/20">
            <Image src="/images/rice-icon.svg" alt="Logo" width={20} height={20} />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/40 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1300px] mx-auto flex justify-between items-center sm:px-6 px-4 pt-4 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 flex items-center justify-center rounded-md border border-white/20">
            <Image src="/images/rice-icon.svg" alt="Logo" width={20} height={20} />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-[13px] text-white">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`hover:text-gray-300 transition-colors ${
                index === navLinks.length - 1 ? "border-r border-white/20 pr-8" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Socials */}
          <div className="hidden md:flex items-center gap-4 text-white">
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <FaXTwitter className="w-6 h-6 hover:text-gray-300" />
            </Link>
            <Link href="https://discord.com" target="_blank" aria-label="Discord">
              <FaDiscord className="w-6 h-6 hover:text-gray-300 text-[#5865F2]" />
            </Link>

            {/* Telegram Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                <FaTelegram className="w-6 h-6 text-[#229ED9]" />
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute z-50 left-1/2 transform -translate-x-1/2 bg-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
                <div className="py-2 min-w-[120px]">
                  <div className="px-4 py-2 text-sm text-gray-300 border-b border-gray-700">
                    Telegram
                  </div>
                  <a href="https://t.me/Rice_AI" target="_blank">
                    <button className="w-full px-4 py-2 text-sm text-left hover:bg-gray-800 transition-colors cursor-pointer">
                      English
                    </button>
                  </a>
                  <a href="https://t.me/RiceAI_CN" target="_blank">
                    <button className="w-full px-4 py-2 text-sm text-left hover:bg-gray-800 transition-colors cursor-pointer">
                      Chinese
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Buy Rice */}
        <Link
          href="/buy"
          className="ml-4 text-white rounded-lg bg-blue-600 px-4 py-2 font-medium hover:bg-blue-700 transition-colors hidden md:flex items-center gap-1"
        >
          Buy Rice
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.201 10.1565C10.6946 10.1553 10.2851 9.74376 10.2864 9.2374L10.3003 3.6355L2.14816 11.7877C1.79018 12.1456 1.20978 12.1456 0.851798 11.7877C0.493818 11.4297 0.493818 10.8493 0.851798 10.4913L9.00396 2.33914L3.40279 2.35362C2.8964 2.35493 2.48484 1.94545 2.48359 1.43906C2.48233 0.93273 2.89176 0.521245 3.39808 0.519954L11.2205 0.500003C11.7286 0.498707 12.1408 0.91088 12.1395 1.41894L12.1201 9.24195C12.1188 9.74831 11.7073 10.1578 11.201 10.1565Z"
              fill="white"
            />
          </svg>
        </Link>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Nav - Slide in */}
      <div
        className={`fixed top-0 left-0 h-[1200vh] w-[100vw] bg-black/90 backdrop-blur-md border-r border-white/10 transform transition-transform duration-500 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button inside mobile menu */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col space-y-4 px-6 py-6 text-white text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Socials with Telegram dropdown for mobile */}
          <li className="flex flex-col gap-2 pt-4 border-t border-white/20">
            <div className="flex gap-4">
              <Link href="https://twitter.com" target="_blank">
                <FaXTwitter className="w-5 h-5" />
              </Link>
              <Link href="https://discord.com" target="_blank">
                <FaDiscord className="w-5 h-5 text-[#5865F2]" />
              </Link>
              <button
                onClick={() =>
                  setIsTelegramOpenMobile((prev) => !prev)
                }
                className="flex items-center gap-1"
              >
                <FaTelegram className="w-5 h-5 text-[#229ED9]" />
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isTelegramOpenMobile ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {isTelegramOpenMobile && (
              <div className="ml-1 mt-2 flex flex-col gap-2 text-sm">
                <a
                  href="https://t.me/Rice_AI"
                  target="_blank"
                  className="hover:text-gray-300"
                >
                  English
                </a>
                <a
                  href="https://t.me/RiceAI_CN"
                  target="_blank"
                  className="hover:text-gray-300"
                >
                  Chinese
                </a>
              </div>
            )}
          </li>

          <li>
            <Link
              href="/buy"
              className="mt-4 rounded-lg bg-blue-600 px-4 py-2 font-medium hover:bg-blue-700 transition-colors text-center flex items-center gap-1"
            >
              Buy Rice
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.201 10.1565C10.6946 10.1553 10.2851 9.74376 10.2864 9.2374L10.3003 3.6355L2.14816 11.7877C1.79018 12.1456 1.20978 12.1456 0.851798 11.7877C0.493818 11.4297 0.493818 10.8493 0.851798 10.4913L9.00396 2.33914L3.40279 2.35362C2.8964 2.35493 2.48484 1.94545 2.48359 1.43906C2.48233 0.93273 2.89176 0.521245 3.39808 0.519954L11.2205 0.500003C11.7286 0.498707 12.1408 0.91088 12.1395 1.41894L12.1201 9.24195C12.1188 9.74831 11.7073 10.1578 11.201 10.1565Z"
                  fill="white"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
