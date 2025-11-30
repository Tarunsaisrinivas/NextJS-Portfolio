"use client";
import React from "react";
import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import SequentialHyperText from "../containers/SequentialTyping";
import Globe from "@/components/ui/globe";
import ShimmerButton from "@/components/ui/shimmer-button"; // Import the ShimmerButton

const HeroSection = () => {
  return (
    <div className="flex flex-col  md:flex-row md:min-h-fit min-h-screen bg-transparent text-center cursor-custom-black md:text-left p-8">
      {/* <Globe /> */}

      <div data-aos="fade-up" className="md:w-1/2 mt-8 md:mt-0 h-auto">
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white">
          I am Tarun Sai Srinivas
        </h1>

        <SequentialHyperText />

        <p className="mt-2 text-md text-gray-600 dark:text-gray-400 max-w-md">
          I am passionate about building impactful applications that enhance
          user experience and solve real-world challenges. My expertise spans
          various technologies, allowing me to contribute effectively to any
          project.
        </p>

        <div className="mt-6 flex flex-col md:flex-row md:space-x-4">
          <div className="flex flex-row md:flex-row md:space-x-4 mt-4">
            <a href="https://github.com/Tarunsaisrinivas">
              <ShimmerButton className="shadow-2xl flex items-center mb-2 -ml-5 md:mb-0">
                <FaGithub className="dark:text-white mr-2" />{" "}
                {/* GitHub Icon */}
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white">
                  GitHub
                </span>
              </ShimmerButton>
            </a>
            <a href="https://www.linkedin.com/in/tarun-sai-srinivas">
              <ShimmerButton className="shadow-2xl flex items-center mb-2 md:mb-0">
                <FaLinkedin className="dark:text-white mr-2" />{" "}
                {/* LinkedIn Icon */}
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white">
                  LinkedIn
                </span>
              </ShimmerButton>
            </a>
            <a
              href="https://drive.google.com/file/d/1532FpcMVzGyweaMVRX7KxBSVc0FgrTAw/view?usp=sharing"
              target="_blank"
            >
              <ShimmerButton className="shadow-2xl flex items-center">
                <FaFileAlt className="dark:text-white mr-2" />
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white">
                  Resume
                </span>
              </ShimmerButton>
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full  flex md:h-auto  justify-center md:justify-end">
        <Globe />
      </div>
    </div>
  );
};

export default HeroSection;
