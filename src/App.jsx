import React from "react";
import Background from "./components/background";
import Header from "./components/Header";
import Hero from "./components/MainSection";

export default function App() {
  return (
    <div className="relative min-h-screen text-white">
      <Background />
      <Header />
      <Hero />
    </div>
  );
}
