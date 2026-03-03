"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Download,
  Mail,
  Activity,
  X,
  Cpu,
  Check,
  Volume2,
  VolumeX,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { useAudio } from "@/context/audio";

export const CommandHUD = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [sysTime, setSysTime] = useState("");
  const [ping, setPing] = useState(24);

  // Use the global audio context
  const { soundEnabled, setSoundEnabled, playSystemSound } = useAudio();

  useEffect(() => {
    const timer = setInterval(() => {
      setSysTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
      setPing(Math.floor(Math.random() * (32 - 18) + 18));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAction = (action: () => void) => {
    playSystemSound("CHIRP");
    action();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    playSystemSound("SUCCESS"); // Trigger success sound
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSystemSound("SUCCESS");
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    // Play a confirmation sound if turning ON
    if (newState) {
      // Need a slight delay or manual trigger context to ensure it plays
      setTimeout(() => playSystemSound("SUCCESS"), 150);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-6 font-mono">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-80 bg-[#050505] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden relative"
          >
            {/* SUCCESS OVERLAY */}
            <AnimatePresence>
              {isCopied && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 bg-[#39ff14]/10 backdrop-blur-md flex flex-col items-center justify-center border border-[#39ff14]/50"
                >
                  <motion.div
                    initial={{ scale: 0.5, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="p-3 bg-[#39ff14] text-black mb-4 shadow-[0_0_20px_#39ff14]"
                  >
                    <Check className="w-8 h-8" />
                  </motion.div>
                  <p className="text-[#39ff14] font-bold text-xs tracking-[0.2em] uppercase">
                    Transfer_Complete
                  </p>
                  <p className="text-[10px] text-[#39ff14]/50 mt-1 uppercase">
                    Email buffered to clipboard
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* HUD HEADER */}
            <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex justify-between items-center text-[10px] text-white/40 uppercase tracking-widest">
              <button
                onClick={toggleSound}
                className={`flex items-center gap-2 transition-colors ${
                  soundEnabled ? "text-cyan-400" : "hover:text-white/60"
                }`}
              >
                {soundEnabled ? (
                  <Volume2 className="w-3 h-3" />
                ) : (
                  <VolumeX className="w-3 h-3" />
                )}
                AUDIO_{soundEnabled ? "ON" : "OFF"}
              </button>
              <span className="flex items-center gap-2">
                <Cpu className="w-3 h-3 text-cyan-500 animate-pulse" />
                {sysTime}
              </span>
            </div>

            {/* LIVE STATS */}
            <div className="p-4 grid grid-cols-2 gap-4 border-b border-white/10 bg-black/20">
              <div className="space-y-1">
                <p className="text-[9px] text-white/30 uppercase">Uptime</p>
                <p className="text-xs text-[#39ff14] font-bold tracking-tighter">
                  99.982%
                </p>
              </div>
              <div className="space-y-1 text-right">
                <p className="text-[9px] text-white/30 uppercase">
                  Latency_Ping
                </p>
                <p className="text-xs text-cyan-400 font-bold tracking-tighter">
                  {ping}ms
                </p>
              </div>
            </div>

            {/* COMMANDS */}
            <div className="p-2 space-y-1">
              <button
                onClick={() =>
                  handleAction(() => window.open("/resume.pdf", "_blank"))
                }
                className="w-full text-left p-3 hover:bg-white/5 transition-colors group relative"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] text-white font-bold tracking-tight">
                    DL_RESUME.pdf
                  </span>
                  <Download className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-[9px] text-white/30 uppercase leading-none italic">
                  Retrieving latest system_spec...
                </p>
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-cyan-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
              </button>

              <button
                onClick={handleCopyEmail}
                className="w-full text-left p-3 hover:bg-white/5 transition-colors group relative"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] text-white font-bold tracking-tight">
                    INIT_EMAIL_STREAM
                  </span>
                  <Mail className="w-4 h-4 text-[#bc13fe] group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-[9px] text-white/30 uppercase leading-none italic">
                  Establishing secure contact link...
                </p>
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#bc13fe] scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
              </button>
            </div>

            {/* FOOTER */}
            <div className="p-4 bg-black/40 text-[9px] text-cyan-500/50 space-y-1 border-t border-white/5">
              <p className="">{">"} KERNEL: ACTIVE_V2.6</p>
              <p className="">
                {">"} NODE: {PORTFOLIO_DATA.personal.location.toUpperCase()}
              </p>
              <div className="h-1 w-full bg-white/5 mt-2 overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="h-full w-1/3 bg-cyan-500"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TRIGGER BUTTON */}
      <div className="flex items-center gap-4 group">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-white/40 uppercase tracking-[0.2em] pointer-events-none">
          {isOpen ? "TERM_EXIT" : "INIT_CONTROL"}
        </span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(!isOpen);
            playSystemSound("CHIRP");
          }}
          className={`relative p-5 border transition-all duration-500 ${
            isOpen
              ? "bg-white border-white text-black"
              : "bg-[#030303] border-cyan-500 text-cyan-500 shadow-[0_0_30px_rgba(0,240,255,0.3)]"
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Activity className="w-6 h-6 animate-pulse" />
          )}
          {!isOpen && (
            <>
              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-cyan-300" />
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-cyan-300" />
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};
