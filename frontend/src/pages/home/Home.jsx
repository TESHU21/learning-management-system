import React from "react";
import Hero from "./Hero";
import OurSolutions from "./OurSolutions";
import GetStartedSection from "./GetStartedSection";
import Seo from "@/components/Seo";
import LazyMount from "@/components/LazyMount";

const Home = () => {
  return (
    <div>
      <Seo
        title="Learning Management System | Home"
        description="Browse tracks and courses, enroll, and manage your learning journey."
        canonicalPath="/"
      />
      <Hero />
      <LazyMount minHeight={900}>
        <OurSolutions />
      </LazyMount>
      <LazyMount minHeight={900}>
        <GetStartedSection />
      </LazyMount>
    </div>
  );
};

export default Home;
