"use client";
import React from "react";
import Navbar from "./containers/Navbar";
import HeroSection from "./pages/HeroSection";
import { SkillsMarquee } from "./pages/Skills";
import Projects from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { FloatButton } from 'antd';
import dynamic from 'next/dynamic';
const SplashCursor = dynamic(() => import("../components/ui/SplashCursor"), { ssr: false });
const page = () => {
  return (
    <>
    <div>
    <SplashCursor />
      <Navbar />
      <HeroSection />
      <SkillsMarquee />
      <Projects />
      {/* <Globe /> */}
      <Contact  />
    </div>
    <FloatButton.BackTop />
    </>
  );
};

export default page;
