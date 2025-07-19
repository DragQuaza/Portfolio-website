"use client";
import XIcon from "../assets/X.png";
import GitHubIcon from "../assets/github.png";

import LinkedInIcon from "../assets/linkedin.png";
import GmailIcon from "../assets/gmail.svg";

const Bottom= () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center my-12 md:my-12 py-24 relative">
      <div className="z-1 text-center">
        
        <h2 className="text-3xl font-bold text-white mb-4">Reach Out Across the Cosmos</h2>
        <p className="text-gray-400 mb-6 max-w-md">
          Whether it's tech stuff, design things, or just a friendly chat, feel free to drop a message!
        </p>
        <div className="socials flex flex-row gap-4 items-center justify-center">
          <a href="https://github.com/DragQuaza" target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} className="w-10 h-10 hover:opacity-80 cursor-pointer" alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/debanjan-maity/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} className="w-10 h-10 hover:opacity-80 cursor-pointer" alt="LinkedIn Icon" />
          </a>
          <a href="https://x.com/debanjanmaity" target="_blank" rel="noopener noreferrer">
            <img src={XIcon} className="w-10 h-10 hover:opacity-80 cursor-pointer" alt="X Icon" />
          </a>
          <a href="mailto:maitydebanjan2024@gmail.com">
            <img src={GmailIcon} className="w-10 h-10 hover:opacity-80 cursor-pointer" alt="Gmail Icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bottom;
