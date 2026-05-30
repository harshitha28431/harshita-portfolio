"use strict";
"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-btn"
      aria-label="Toggle Theme"
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderRadius: "50%",
        width: "44px",
        height: "44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "var(--text-primary)",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 12px var(--shadow-color)"
      }}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      <style jsx>{`
        .theme-btn:hover {
          transform: scale(1.08) rotate(15deg);
          border-color: var(--primary-color);
          box-shadow: 0 4px 15px var(--primary-glow);
        }
      `}</style>
    </button>
  );
}
