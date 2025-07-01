"use client"
import React, { useState } from 'react';
import { ModeToggle } from '@/components/ui/ModeToggle';
import { FiMenu, FiX } from 'react-icons/fi';  // Hamburger and close icons
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center h-20 bg-white dark:bg-black dark:bg-opacity-10 justify-between px-4 md:px-8 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center hover:rotate-12 transition-all duration-300">
        <Link href="/">
        <Image src="/assets/icon.png" alt="Logo" width={100} height={100} />
        </Link>
      </div>

      {/* Centered Navigation Links with Background */}
      <div className="hidden md:flex items-center bg-black dark:bg-white  rounded-full p-1 space-x-6">
        <Link
          href="/blogs"
          className="px-4 py-1 text-white dark:text-black rounded-lg hover:scale-105 hover:font-bold transition duration-200"
        >
          Blog
        </Link>

        <a
          href="/projects"
          className="px-4 py-1 text-white dark:text-black rounded-lg hover:scale-105 hover:font-bold transition duration-200"
        >
          Projects
        </a>
        <a
          href="#skills"
          className="px-4 py-1 text-white dark:text-black rounded-lg hover:scale-105 hover:font-bold transition duration-200"
        >
          Skills
        </a>
        <a
          href="#contact"
          className="px-4 py-1 text-white dark:text-black rounded-lg hover:scale-105 hover:font-bold transition duration-200"
        >
          Contact
        </a>
      </div>

      {/* Mobile: Hamburger and Dark Mode Toggle */}
      <div className="flex md:hidden items-center space-x-4">
        <ModeToggle />
        <button onClick={toggleMenu} className="text-black dark:text-white">
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}{" "}
          {/* Toggle between menu and close */}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 left-0 w-full bg-white dark:bg-black z-40 transition-all duration-300 ease-in-out transform ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden flex flex-col items-center justify-center space-y-4 px-6 py-4`}
      >
        <a
          href="/blogs"
          className="w-full text-lg font-semibold text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition duration-200 text-center"
        >
          Blogs
        </a>
        <a
          href="#projects"
          className="w-full text-lg font-semibold text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition duration-200 text-center"
        >
          Projects
        </a>
        <a
          href="#skills"
          className="w-full text-lg font-semibold text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition duration-200 text-center"
        >
          Skills
        </a>
        <a
          href="#contact"
          className="w-full text-lg font-semibold text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition duration-200 text-center"
        >
          Contact
        </a>
      </div>

      {/* Desktop Mode Toggle */}
      <div className="hidden md:flex items-center">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;