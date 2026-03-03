"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, MapPin, CalendarClock } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/shared";
import { cn } from "@/lib/utils";

export default function Trajectory() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="trajectory"
      className="py-20 md:py-32 px-4 md:px-12 bg-base-main"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="04" title="Trajectory" />

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          <div className="absolute left-[19px] top-2 bottom-0 w-[1px] bg-white/5 md:left-1/2 md:-ml-[0.5px]" />

          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] top-2 w-[1px] bg-gradient-to-b from-accent-main via-accent-sec to-transparent md:left-1/2 md:-ml-[0.5px] z-0"
          />

          <div className="space-y-12 md:space-y-16">
            {PORTFOLIO_DATA.experience.map((job, idx) => (
              <TimelineItem key={idx} job={job} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  job,
  index,
}: {
  job: (typeof PORTFOLIO_DATA.experience)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;
  const isPresent = job.date.toLowerCase().includes("present");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "relative flex flex-col md:flex-row gap-8 md:gap-0 group",
        isEven ? "md:flex-row-reverse" : ""
      )}
    >
      <div className="absolute left-0 md:left-1/2 md:-ml-5 w-10 h-10 flex items-center justify-center z-10">
        <div
          className={cn(
            "w-3 h-3 border border-accent-main bg-base-card rotate-45 transition-all duration-500 group-hover:scale-150 group-hover:bg-accent-main shadow-[0_0_10px_rgba(6,182,212,0.5)]",
            isPresent
              ? "bg-accent-main shadow-[0_0_20px_rgba(6,182,212,0.8)]"
              : ""
          )}
        />
      </div>

      {/* 2. THE CONTENT CARD */}
      <div
        className={cn(
          "ml-12 md:ml-0 md:w-1/2 flex",
          isEven
            ? "md:pr-16 md:justify-end md:text-right"
            : "md:pl-16 md:justify-start"
        )}
      >
        <div className="relative p-5 md:p-6 border border-border-faint bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-300 w-full max-w-md group-hover:border-accent-main/30">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

          <div
            className={cn(
              "absolute top-0 w-8 h-8 border-t border-accent-main/50 transition-all duration-300",
              isEven ? "right-0 border-r" : "left-0 border-l"
            )}
          />

          <div
            className={cn(
              "flex items-center gap-3 mb-3 md:mb-4 text-xs font-mono text-text-muted",
              isEven ? "md:flex-row-reverse" : ""
            )}
          >
            <span
              className={cn(
                "px-2 py-0.5 rounded-none border border-border-dim text-[10px] md:text-xs",
                isPresent
                  ? "text-green-400 border-green-500/30 bg-green-500/10"
                  : "text-gray-500"
              )}
            >
              {isPresent ? "ACTIVE_THREAD" : "ARCHIVED"}
            </span>
            <span className="flex items-center gap-1 text-[10px] md:text-xs">
              <CalendarClock className="w-3 h-3" /> {job.date}
            </span>
          </div>

          <h3 className="text-lg md:text-2xl font-bold text-white uppercase tracking-tight mb-1 group-hover:text-accent-bright transition-colors leading-tight">
            {job.role}
          </h3>
          <div
            className={cn(
              "flex items-center gap-2 text-text-sec mb-4 md:mb-6",
              isEven ? "md:flex-row-reverse" : ""
            )}
          >
            <Briefcase className="w-3 h-3 md:w-4 md:h-4 text-accent-sec" />
            <span className="font-medium text-sm md:text-base">
              {job.company}
            </span>
          </div>

          <div
            className={cn(
              "pt-3 md:pt-4 border-t border-border-faint flex items-center gap-2 text-[10px] md:text-xs text-text-dim font-mono uppercase tracking-widest",
              isEven ? "md:flex-row-reverse" : ""
            )}
          >
            <MapPin className="w-3 h-3" />
            {job.location}
          </div>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
}
