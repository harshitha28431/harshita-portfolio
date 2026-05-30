"use strict";
"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, Code2 } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Foundations", href: "#foundations" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <Code2 size={28} className="logo-icon" />
          <span className="logo-text">Harshitha<span className="text-accent">.B</span></span>
        </a>

        {/* Desktop Links */}
        <div className="nav-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Nav Button */}
        <div className="mobile-actions">
          <ThemeToggle />
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="mobile-drawer">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          background: transparent;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar.scrolled {
          padding: 1rem 0;
          background: var(--header-bg);
          backdrop-filter: blur(var(--blur-amount));
          -webkit-backdrop-filter: blur(var(--blur-amount));
          border-bottom: 1px solid var(--card-border);
          box-shadow: 0 4px 30px var(--shadow-color);
        }

        .nav-container {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 800;
          font-size: 1.4rem;
          font-family: 'Outfit', sans-serif;
        }

        .logo-icon {
          color: var(--primary-color);
          animation: logo-glow 4s infinite alternate;
        }

        .text-accent {
          color: var(--secondary-color);
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.95rem;
          position: relative;
          padding: 0.25rem 0;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: var(--primary-color);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
          transition: width 0.3s ease;
          border-radius: var(--border-radius-lg);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-actions {
          display: none;
          align-items: center;
          gap: 1rem;
        }

        .mobile-toggle {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--card-border);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          box-shadow: 0 10px 20px var(--shadow-color);
          animation: slideDown 0.3s ease-out forwards;
        }

        .mobile-link {
          text-decoration: none;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 1.1rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .mobile-link:hover {
          color: var(--primary-color);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes logo-glow {
          0% { filter: drop-shadow(0 0 2px var(--primary-glow)); }
          100% { filter: drop-shadow(0 0 8px var(--primary-color)); }
        }

        @media (max-width: 900px) {
          .nav-menu {
            display: none;
          }
          .mobile-actions {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}
