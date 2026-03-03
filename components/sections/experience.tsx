"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Plus,
  Minus,
  AlertTriangle,
  Cpu,
  Terminal,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/shared";
import { cn } from "@/lib/utils";
import { useAudio } from "@/context/audio";

export default function Experience() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { playSystemSound } = useAudio();

  return (
    <section
      id="experience"
      className="py-20 md:py-32 px-4 md:px-12 bg-base-main"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="02" title="EXPERIENCE" />

        <div className="flex flex-col gap-6 md:gap-8">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              index={idx}
              isOpen={selectedId === idx}
              onClick={() => {
                playSystemSound("SUCCESS");
                setSelectedId(selectedId === idx ? null : idx);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- THE COMPONENT ---
function ProjectCard({
  project,
  index,
  isOpen,
  onClick,
}: {
  project: (typeof PORTFOLIO_DATA.projects)[0];
  index: number;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={cn(
        "group relative w-full cursor-pointer border transition-all duration-500 overflow-hidden",
        isOpen
          ? "bg-base-card border-accent-main/30 shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)]"
          : "bg-transparent border-border-dim hover:border-border-bright hover:bg-white/5"
      )}
    >
      <motion.div
        layout
        className="p-5 md:p-10 flex flex-col lg:flex-row gap-6 md:gap-8 justify-between items-start"
      >
        <div className="space-y-4 max-w-3xl">
          {/* Metadata Row */}
          <div className="flex items-center gap-4">
            <span className="text-accent-main font-mono text-xs md:text-sm tracking-widest">
              0{index + 1} // {project.year}
            </span>
            <span
              className={cn(
                "text-[10px] uppercase tracking-widest px-2 py-1 border transition-colors",
                isOpen
                  ? "border-accent-main/50 text-accent-bright"
                  : "border-border-dim text-text-muted"
              )}
            >
              {project.role}
            </span>
          </div>

          <div>
            <motion.h3
              layout="position"
              className="text-2xl md:text-5xl font-bold text-white uppercase tracking-tighter"
            >
              {project.title}
            </motion.h3>
            <motion.p
              layout="position"
              className="mt-3 md:mt-4 text-sm md:text-lg text-text-sec font-light leading-relaxed"
            >
              {project.desc}
            </motion.p>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between w-full lg:w-auto lg:h-full gap-4 lg:gap-8 mt-2 lg:mt-0">
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="block lg:hidden text-left"
            >
              <div className="text-[10px] text-text-muted font-mono uppercase">
                Impact
              </div>
              <div className="text-sm font-bold text-white leading-tight">
                {project.metric}
              </div>
            </motion.div>
          )}
          <div className="flex-1 lg:flex-none" /> {/* Spacer */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="hidden lg:block text-right"
            >
              <div className="text-xs text-text-muted font-mono uppercase mb-1">
                Impact
              </div>
              <div className="text-lg font-bold text-white max-w-[150px] leading-tight">
                {project.metric}
              </div>
            </motion.div>
          )}
          <button className="relative p-3 border border-border-dim group-hover:border-accent-main/50 transition-colors bg-base-main">
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.4 }}
            >
              {isOpen ? (
                <Minus className="w-5 h-5 text-accent-bright" />
              ) : (
                <Plus className="w-5 h-5 text-white" />
              )}
            </motion.div>
          </button>
        </div>
      </motion.div>

      {/* 2. EXPANDED CONTENT (THE "DEEP DIVE") */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {/* OPTIMIZATION: Reduced padding px-5 py-8 on mobile */}
            <div className="border-t border-border-dim px-5 py-8 md:px-10 md:py-12 bg-black/20">
              {/* A. The Engineering Context */}
              {/* OPTIMIZATION: Reduced grid gap */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
                {/* Challenge */}
                <div className="relative p-5 md:p-6 border-l-2 border-status-error/40 bg-status-error-bg">
                  <div className="flex items-center gap-2 mb-3 text-status-error-light">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-xs font-mono uppercase tracking-widest">
                      System Bottleneck
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="relative p-5 md:p-6 border-l-2 border-accent-main/40 bg-accent-main/5">
                  <div className="flex items-center gap-2 mb-3 text-accent-bright">
                    <Cpu className="w-4 h-4" />
                    <span className="text-xs font-mono uppercase tracking-widest">
                      Architectural Fix
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* B. The Execution Logs */}
              <div className="mb-8 md:mb-12">
                <div className="flex items-center gap-2 mb-4 md:mb-6 opacity-70">
                  <Terminal className="w-4 h-4 text-text-muted" />
                  <span className="text-xs font-mono text-text-muted uppercase tracking-widest">
                    Deployment Logs
                  </span>
                </div>
                <div className="space-y-3 pl-2 md:pl-6 border-l border-border-dim">
                  {project.highlights?.map((log, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1.5 w-1 h-1 bg-accent-main shrink-0" />
                      <p className="text-text-sec text-sm md:text-base font-light">
                        {log}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* C. Tech Stack & Footer */}
              <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-t border-border-dim pt-6 md:pt-8">
                <div className="w-full md:w-auto">
                  <span className="block text-xs text-text-dim font-mono mb-3 uppercase">
                    Core Technologies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-base-tag border border-border-dim text-xs font-mono text-cyan-200/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {project.deployment && (
                  <button
                    onClick={() =>
                      window.open(
                        project.deployment,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="w-full md:w-auto group/btn flex items-center justify-center md:justify-start gap-3 text-white border-b border-transparent hover:border-accent-main pb-1 transition-all"
                  >
                    <span className="text-sm font-bold tracking-wider">
                      VIEW DEPLOYMENT
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
