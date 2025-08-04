import React from "react";

export default function Hero() {
  return (
    <section className="relative flex justify-center items-center h-screen px-4">
      {/* Glass Card */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-10 md:p-16 max-w-6xl text-center animate-fadeInUp">
      <div className="absolute top-0 left-0 w-16 h-1 bg-white/30"></div>
    <div className="absolute top-0 left-0 w-1 h-16 bg-white/30"></div>

        <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-8xl tracking-tight leading-tight text-white mb-8 drop-shadow-lg">
          Javord
        </h1>
        <p className="font-body text-lg sm:text-xl text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto">
          Upload your question file and Java solutions to automatically generate
          a combined Word report with formatted code and execution screenshots.
        </p>
        <button className="font-heading bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-black transition transform hover:scale-110 hover:shadow-xl duration-300">
            Upload Now
        </button>

      </div>
      
    </section>
  );
}
