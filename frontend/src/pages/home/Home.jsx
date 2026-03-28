import React from "react";
import Hero from "./Hero";
import OurSolutions from "./OurSolutions";
import GetStartedSection from "./GetStartedSection";
import Seo from "@/components/Seo";

const Home = () => {
  return (
    <div>
      <Seo
        title="Learning Management System | Home"
        description="Browse tracks and courses, enroll, and manage your learning journey."
        canonicalPath="/"
      />
      <Hero />
      <OurSolutions />
      <GetStartedSection />
    </div>
  );
};

export default Home;
