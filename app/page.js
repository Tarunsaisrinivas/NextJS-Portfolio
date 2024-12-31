"use client";
import React from "react";
import Navbar from "./containers/Navbar";
import HeroSection from "./pages/HeroSection";
import { SkillsMarquee } from "./pages/Skills";
import Projects from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { FloatButton } from 'antd';
const page = () => {
  return (
    <>
    <div>
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
