"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#232931] px-6 py-4 flex items-center justify-between">
      {/* Logo + Brand */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/ChatGPT.png"
          alt="Logo"
          width={40}
          height={40}
          className="rounded"
        />
        {<span className="text-2xl font-bold text-[#6C63FF]">NorthStar</span> }
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-white">
        <Link href="/" className="hover:text-[#00F0FF] transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-[#00F0FF] transition">
          About
        </Link>
        <Link href="/services" className="hover:text-[#00F0FF] transition">
          Services
        </Link>
        <Link href="/projects" className="hover:text-[#00F0FF] transition">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-[#00F0FF] transition">
          Contact
        </Link>
      </div>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-[#6C63FF] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {/* Simple Hamburger Icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" /> // X icon when open
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" /> // Hamburger icon when closed
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-4 absolute top-full left-0 w-full bg-[#232931] z-10">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-[#00F0FF] font-semibold"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-[#00F0FF] font-semibold"
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-[#00F0FF] font-semibold"
          >
            Services
          </Link>
          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-[#00F0FF] font-semibold"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-[#00F0FF] font-semibold"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
