"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./containers/Navbar";
import HeroSection from "./pages/HeroSection";
import { SkillsMarquee } from "./pages/Skills";
import Projects from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { FloatButton } from "antd";
import Image from "next/image";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
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
      <div>
        <Navbar />
        <HeroSection />
        <SkillsMarquee />
        <Projects />
        <Contact />
      </div>
      <FloatButton.BackTop />
    </>
  );
};

export default Page;
