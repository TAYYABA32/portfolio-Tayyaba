"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/shared";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";
import { useAudio } from "@/context/audio";

export default function Expertise() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const { playSystemSound } = useAudio();
  return (
    <section
      id="expertise"
      className="py-20 md:py-32 px-4 md:px-12 border-b border-border-faint bg-base-card relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader number="01" title="Expertise" />

        {/* THE SERVER RACK CONTAINER */}
        <div className="border border-border-dim bg-base-rack">
          <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-border-dim bg-white/5 text-[10px] font-mono text-text-muted uppercase tracking-widest">
            <div className="flex gap-4">
              <span>ROOT_ACCESS: GRANTED</span>
              <span className="hidden md:inline">MEM_USAGE: 42%</span>
            </div>
            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-status-success animate-pulse" />
              <span>SYSTEM_OPTIMAL</span>
            </div>
          </div>

          <div className="flex flex-col">
            {PORTFOLIO_DATA.skills.map((skill, idx) => (
              <SkillBlade
                key={idx}
                skill={skill}
                index={idx}
                isActive={activeIndex === idx}
                onActivate={() => {
                  if (activeIndex != idx) {
                    playSystemSound("HEAVY");
                  }
                  setActiveIndex(idx);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBlade({
  skill,
  index,
  isActive,
  onActivate,
}: {
  skill: (typeof PORTFOLIO_DATA)["skills"][0];
  index: number;
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <motion.div
      layout
      onClick={onActivate}
      className={cn(
        "group relative border-b border-border-faint cursor-pointer overflow-hidden transition-colors duration-500",
        isActive ? "bg-base-active" : "bg-base-card hover:bg-base-hover"
      )}
    >
      <motion.div
        layout
        className={cn(
          "absolute left-0 top-0 bottom-0 w-1 transition-colors duration-300",
          isActive ? "bg-accent-main" : "bg-transparent group-hover:bg-white/20"
        )}
      />

      <div className="px-4 py-5 md:px-10 md:py-8 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          <span className="font-mono text-xs text-text-dim">0{index + 1}</span>

          <div
            className={cn(
              "p-2 rounded-md bg-white/5 border border-border-dim transition-colors duration-300",
              isActive
                ? "text-accent-bright border-accent-main/30 bg-accent-main/10"
                : "text-text-sec"
            )}
          >
            <skill.icon className="w-5 h-5" />
          </div>

          <h3
            className={cn(
              "text-lg md:text-3xl font-bold uppercase tracking-tight transition-colors duration-300",
              isActive
                ? "text-white"
                : "text-text-muted group-hover:text-gray-300"
            )}
          >
            {skill.category}
          </h3>
        </div>

        <div className="hidden md:flex items-center gap-4 opacity-50">
          <div className="flex items-end gap-1 h-8">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ height: "20%" }}
                animate={{ height: isActive ? ["20%", "80%", "40%"] : "20%" }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                className={cn(
                  "w-1 bg-gray-700",
                  isActive ? "bg-accent-main" : ""
                )}
              />
            ))}
          </div>
          <div className="text-[10px] font-mono text-text-dim text-right">
            <div className="mb-1">LATENCY</div>
            <div className={isActive ? "text-status-success" : ""}>
              {isActive ? "2ms" : "IDLE"}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-4 pb-6 md:px-10 md:pb-10 md:pl-24">
              <div className="hidden md:block absolute left-[33px] md:left-[53px] top-20 bottom-10 w-[1px] bg-white/10" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 md:gap-y-4">
                {skill.items.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="relative flex items-center justify-between p-3 md:p-4 border border-border-faint bg-white/[0.02] hover:bg-white/[0.05] transition-colors group/item"
                  >
                    <div className="flex items-center gap-3">
                      <Terminal className="w-3 h-3 text-text-dim group-hover/item:text-accent-main transition-colors" />
                      <span className="font-mono text-sm text-gray-300">
                        {item}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-text-dim group-hover/item:text-accent-main/50 transition-colors">
                      0x{(index * 4096 + i * 256).toString(16).toUpperCase()}
                    </span>

                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-border-dim group-hover/item:border-accent-main/50 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
