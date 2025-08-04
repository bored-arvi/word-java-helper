import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 
                       bg-transparent shadow-none z-50">
      {/* Left: Logo */}
      <div className="font-heading text-2xl font-light text-white">
        Javord
      </div>

      {/* Center: Navigation Links */}
      <nav className="flex gap-8 text-white font-heading text-lg">
        <button 
          onClick={() => handleScroll("about-me")}
          className="hover:text-gray-300 transition"
        >
          README
        </button>
        <button 
          onClick={() => handleScroll("features")}
          className="hover:text-gray-300 transition"
        >
          Features
        </button>
        <button 
          onClick={() => handleScroll("about-me")}
          className="hover:text-gray-300 transition"
        >
          About Me
        </button>
      </nav>

      {/* Right: Action Buttons */}
      <div className="flex gap-4">
        <a
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading px-5 py-2 rounded-full border border-white text-white 
                     bg-transparent hover:bg-white hover:text-black transition duration-300 flex items-center gap-2"
        >
          <FaGithub /> Star this Repo
        </a>
      </div>
    </header>
  );
}
