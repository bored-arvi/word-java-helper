import React from "react";

export default function Header() {
  const handleScroll = () => {
    const section = document.getElementById("learn-more");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 
                       bg-transparent shadow-none animate-fadeDown z-50">
      {/* Logo */}
      <div className="font-heading text-2xl font-light text-white">
        Javord
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        {/* GitHub Star Button */}
        <a
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading px-5 py-2 rounded-full border border-white text-white 
                     bg-transparent hover:bg-white hover:text-black transition duration-300"
        >
          Star this Repo
        </a>
        {/* Scroll Button */}
        <button
          onClick={handleScroll}
          className="font-heading px-5 py-2 rounded-full border border-white text-white 
                     bg-transparent hover:bg-white hover:text-black transition duration-300"
        >
          Learn More
        </button>
      </div>
    </header>
  );
}
