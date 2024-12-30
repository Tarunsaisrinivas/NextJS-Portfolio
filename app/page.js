"use client";
import React from "react";
import Navbar from "./containers/Navbar";
import HeroSection from "./pages/HeroSection";
import { SkillsMarquee } from "./pages/Skills";
import Projects from "./pages/Projects";
import { Contact } from "./pages/Contact";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SkillsMarquee />
      <Projects />
      {/* <Globe /> */}
      <Contact  />
    </div>
  );
};

export default page;
