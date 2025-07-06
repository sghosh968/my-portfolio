import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded ${isActive
      ? "bg-blue-500 text-white dark:bg-blue-700"
      : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
    }`;

  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-white dark:bg-gray-800 shadow">
      <div className="flex space-x-4">
        <NavLink to="/" className={linkClasses}>Home</NavLink>
        <NavLink to="/about" className={linkClasses}>About</NavLink>
        <NavLink to="/projects" className={linkClasses}>Projects</NavLink>
        <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-gray-700 dark:text-gray-300"
      >
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
}
