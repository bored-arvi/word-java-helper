import React from "react";
import Header from "./components/Header";
import Hero from "./components/MainSection";
import Technologies from "./components/technologies";
import Features from "./components/features";
import About from "./components/About";
import Background from "./components/background"; // your Vanta background

export default function App() {
  return (
    <div className="relative min-h-screen text-white font-body">
      {/* Animated Background */}
      <Background />

      {/* Fixed Transparent Header */}
      <Header />

      {/* Hero Section (left aligned) */}
      <Hero />

      {/* Technologies Carousel */}
      <Technologies />


      {/* Glass Features Cards */}
      <Features />
      
      {/* About Me Section */}
      <About />
    </div>
  );
}
