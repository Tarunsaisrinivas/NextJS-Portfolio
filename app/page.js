"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./containers/Navbar";
import HeroSection from "./pages/HeroSection";
import { SkillsMarquee } from "./pages/Skills";
import Projects from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { FloatButton } from "antd";
import Image from "next/image";
import HeatMap from "./pages/HeatMap";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading for 1 second
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image src="/assets/icon.png" alt="loading" width={300} height={300} />
      </div>
    );
  }

  return (
    <>
    <h1 className="sr-only">
        Tarun Sai Srinivas – Full Stack Developer
      </h1>
       <p className="sr-only">
        Portfolio of Tarun Sai Srinivas, a Full Stack Developer specializing in
        React, Next.js, and React Native.
      </p>
      <div>
        <Navbar />
        <HeroSection />
        <SkillsMarquee />
        <Projects />
        <HeatMap />
        <Contact />
      </div>
      <FloatButton.BackTop />
    </>
  );
};

export default Page;
