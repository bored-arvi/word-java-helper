import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function About() {
  return (
    <section id="about-me" className="w-full flex justify-center items-center py-20 px-4">
      {/* Glass Card */}
      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl max-w-3xl w-full p-10 text-white">
        
        {/* Corner Accents */}
        {/* Top Left */}
        <div className="absolute top-0 left-0 w-16 h-1 bg-white/30"></div>
        <div className="absolute top-0 left-0 w-1 h-16 bg-white/30"></div>
        
        {/* Top Right */}
        <div className="absolute top-0 right-0 w-16 h-1 bg-white/30"></div>
        <div className="absolute top-0 right-0 w-1 h-16 bg-white/30"></div>
        
        {/* Bottom Left */}
        <div className="absolute bottom-0 left-0 w-16 h-1 bg-white/30"></div>
        <div className="absolute bottom-0 left-0 w-1 h-16 bg-white/30"></div>
        
        {/* Bottom Right */}
        <div className="absolute bottom-0 right-0 w-16 h-1 bg-white/30"></div>
        <div className="absolute bottom-0 right-0 w-1 h-16 bg-white/30"></div>

        <h2 className="font-heading text-4xl mb-6">About Me</h2>
        <p className="font-body text-lg text-gray-200 leading-relaxed mb-8">
          Hi, I’m [Your Name], the creator of Javord. I’m passionate about building 
          automation tools, web applications, and exploring creative ways to 
          streamline workflows.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 text-2xl">
          <a 
            href="https://github.com/your-username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/your-username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://twitter.com/your-username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}
