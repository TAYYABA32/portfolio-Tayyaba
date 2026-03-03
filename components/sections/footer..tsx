"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Check } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { useAudio } from "@/context/audio";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const { playSystemSound } = useAudio();

  const handleCopy = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    playSystemSound("HEAVY");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative bg-base-deep border-t border-border-dim overflow-hidden">
      <div className="pt-16 pb-8 md:pt-24 md:pb-12 px-4 md:px-12 border-b border-border-dim">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-accent-main font-mono text-xs md:text-sm mb-4 md:mb-6 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-main"></span>
            </span>
            System Status: Available for Hire
          </div>

          <h2 className="text-[12vw] leading-[0.8] font-black text-white tracking-tighter mix-blend-difference select-none">
            LET'S <span className="text-gray-800">BUILD</span>
            <br />
            THE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-main to-accent-sec">
              FUTURE
            </span>
          </h2>
        </div>
      </div>

      <div className="px-4 md:px-12 py-10 md:py-14 border-b border-border-dim bg-base-main">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-xs md:text-sm font-mono text-accent-main uppercase tracking-widest mb-3">
                Contact Intent
              </h3>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Open to frontend-heavy full stack roles, serious product work,
                and remote opportunities. Prefer projects with real users, real
                constraints, and long-term impact.
              </p>
            </div>

            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="group inline-flex items-center gap-4 px-6 py-4 border border-border-dim bg-base-card hover:bg-base-hover transition-colors"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted group-hover:text-accent-main transition-colors">
                Start Conversation
              </span>
              <ArrowUpRight className="w-5 h-5 text-text-dim group-hover:text-accent-main transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-border-dim">
        <div
          onClick={handleCopy}
          className="group relative h-48 md:h-64 border-b md:border-b-0 md:border-r border-border-dim bg-base-main hover:bg-base-rack transition-colors cursor-pointer p-6 md:p-8 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <div className="p-3 border border-border-dim bg-white/5 group-hover:bg-accent-main/10 group-hover:border-accent-main/50 transition-colors">
              <Mail className="w-5 h-5 md:w-6 md:h-6 text-text-sec group-hover:text-accent-bright" />
            </div>
            <div className="text-[10px] md:text-xs font-mono text-text-dim group-hover:text-accent-main uppercase tracking-widest">
              {copied ? "COPIED!" : "COPY ADDRESS"}
            </div>
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-mono text-text-muted mb-2">
              Drop a line
            </h3>
            <p className="text-lg md:text-2xl text-white font-bold break-all">
              {PORTFOLIO_DATA.personal.email}
            </p>
          </div>
          {copied && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-accent-main/90 backdrop-blur-sm z-10"
            >
              <div className="flex flex-col items-center gap-2 text-black font-bold">
                <Check className="w-10 h-10 md:w-12 md:h-12" />
                <span>ADDRESS COPIED</span>
              </div>
            </motion.div>
          )}
        </div>

        <a
          href={PORTFOLIO_DATA.personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={()=>playSystemSound("SUCCESS")}
          className="group h-48 md:h-64 border-b md:border-b-0 md:border-r border-border-dim bg-base-main hover:bg-blue-900/5 transition-colors p-6 md:p-8 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <div className="p-3 border border-border-dim bg-white/5 group-hover:bg-blue-500/10 group-hover:border-blue-500/50 transition-colors">
              <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-text-sec group-hover:text-blue-400" />
            </div>
            <ArrowUpRight className="w-5 h-5 text-text-dim group-hover:text-blue-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-mono text-text-muted mb-2">
              Connect
            </h3>
            <p className="text-xl md:text-2xl text-white font-bold">LinkedIn</p>
          </div>
        </a>

        <a
          href={PORTFOLIO_DATA.personal.github}
          target="_blank"
          onClick={() => playSystemSound("SUCCESS")}
          rel="noopener noreferrer"
          className="group h-48 md:h-64 bg-base-main hover:bg-white/5 transition-colors p-6 md:p-8 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <div className="p-3 border border-border-dim bg-white/5 group-hover:bg-white/10 group-hover:border-white/50 transition-colors">
              <Github className="w-5 h-5 md:w-6 md:h-6 text-text-sec group-hover:text-white" />
            </div>
            <ArrowUpRight className="w-5 h-5 text-text-dim group-hover:text-white transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-mono text-text-muted mb-2">
              Check Code
            </h3>
            <p className="text-xl md:text-2xl text-white font-bold">GitHub</p>
          </div>
        </a>
      </div>

      <div className="py-6 px-4 md:py-8 md:px-12 bg-black flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] md:text-xs font-mono text-text-dim uppercase tracking-wider">
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span>
            © {currentYear} {PORTFOLIO_DATA.personal.name}{" "}
            {PORTFOLIO_DATA.personal.surname}
          </span>
          <span className="hidden md:block text-gray-800">|</span>
          <span>LOC: {PORTFOLIO_DATA.personal.location}</span>
        </div>

        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-status-success rounded-none animate-pulse" />
            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>
          <span className="hidden md:block text-gray-800">|</span>
          <span
            onClick={() => {
              playSystemSound("HEAVY");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="hover:text-accent-main cursor-pointer transition-colors"
          >
            SCROLL TO TOP [↑]
          </span>
        </div>
      </div>

      {/* Decorative Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none mix-blend-overlay"></div>
    </footer>
  );
}
