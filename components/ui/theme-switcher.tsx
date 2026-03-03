"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Check } from "lucide-react";
import { SYSTEM_PALETTES } from "@/data/palettes";

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState<string>("cyan_ops");

  useEffect(() => {
    const saved = localStorage.getItem("system_theme_id");
    if (saved) applyTheme(saved);
  }, []);

  const applyTheme = (themeId: string) => {
    const theme = SYSTEM_PALETTES.find((p) => p.id === themeId);
    if (!theme) return;

    setActiveTheme(themeId);
    localStorage.setItem("system_theme_id", themeId);

    const root = document.documentElement;
    Object.entries(theme.cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-10 h-10 bg-base-main border border-border-dim hover:border-accent-main/50 transition-colors"
      >
        <Settings className={`w-4 h-4 text-text-muted group-hover:text-accent-main transition-transform duration-700 ${isOpen ? "rotate-180" : ""}`} />
        <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-accent-main opacity-50" />
        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-accent-main opacity-50" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-12 right-0 w-48 bg-base-card border border-border-dim shadow-2xl backdrop-blur-xl"
          >
            <div className="px-4 py-2 border-b border-border-faint text-[10px] font-mono uppercase text-text-dim tracking-widest bg-base-main/50">
              Select Configuration
            </div>
            <div className="flex flex-col p-1">
              {SYSTEM_PALETTES.map((palette) => (
                <button
                  key={palette.id}
                  onClick={() => {
                    applyTheme(palette.id);
                    setIsOpen(false);
                  }}
                  className="relative flex items-center gap-3 px-3 py-2 text-left hover:bg-white/5 transition-colors group"
                >
                  <div 
                    className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]"
                    style={{ backgroundColor: palette.cssVars["--sys-accent-main"] }} 
                  />
                  <span className={`text-xs font-mono uppercase tracking-wider ${activeTheme === palette.id ? "text-white" : "text-text-muted group-hover:text-text-main"}`}>
                    {palette.label}
                  </span>
                  {activeTheme === palette.id && (
                    <motion.div layoutId="active-dot" className="absolute right-3 text-accent-main">
                      <Check className="w-3 h-3" />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}