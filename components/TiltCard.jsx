"use strict";
"use client";

import { useState } from "react";

export default function TiltCard({ children, className = "" }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate rotation: 10 degrees max
    const rX = -(mouseY / (height / 2)) * 10;
    const rY = (mouseX / (width / 2)) * 10;

    setRotate({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`,
        transition: "transform 0.1s ease-out, box-shadow 0.1s ease-out",
        transformStyle: "preserve-3d"
      }}
    >
      <div className="tilt-card-content" style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
      <style jsx>{`
        .tilt-card {
          position: relative;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          backdrop-filter: blur(var(--blur-amount));
          -webkit-backdrop-filter: blur(var(--blur-amount));
          border-radius: var(--border-radius-lg);
          box-shadow: 0 10px 30px var(--shadow-color);
          overflow: hidden;
          cursor: pointer;
        }

        .tilt-card:hover {
          border-color: rgba(99, 102, 241, 0.4);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
        }

        .tilt-card-content {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
