import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="flex justify-between items-center p-4 bg-black text-white">
    <div className="text-2xl font-bold">DM</div>
    <div className="space-x-4">
      <Link to="/" className="hover:text-purple-400">Home</Link>
      <Link to="/projects" className="hover:text-purple-400">Projects</Link>
      <Link to="/contact" className="hover:text-purple-400">Contact</Link>
      <Link to="/resume" className="hover:text-purple-400">Resume</Link>
    </div>
  </nav>
);

export default Nav;