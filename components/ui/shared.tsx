"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useAudio } from "@/context/audio";

// --- 1. SECTION HEADER ---
export const SectionHeader = ({
  number,
  title,
}: {
  number: string;
  title: string;
}) => (
  <div className="flex items-baseline gap-4 mb-16 border-b border-border-dim pb-4">
    <span className="text-accent-main font-mono text-sm tracking-widest">
      {number}
    </span>
    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">
      {title}
    </h2>
  </div>
);

// --- 2. SOCIAL LINK BUTTON ---
export const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => {
  const { playSystemSound } = useAudio();

  return (
    <a
      onClick={() => playSystemSound("SUCCESS")}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col items-center gap-2 text-text-muted hover:text-accent-bright transition-colors duration-300"
    >
      <div className="p-3 border border-border-dim group-hover:border-accent-main/50 bg-white/5 transition-all duration-300">
        {icon}
      </div>
      <span className="text-[10px] font-mono tracking-widest">{label}</span>
    </a>
  );
};

// --- 3. SCROLL PROGRESS BAR ---
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-accent-main origin-left z-50 mix-blend-difference"
      style={{ scaleX }}
    />
  );
};

// --- 4. CURSOR GLOW ---
export const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--color-accent-glow), transparent 80%)`,
      }}
    />
  );
};
