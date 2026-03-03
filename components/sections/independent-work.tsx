"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Lock, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/shared";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { useAudio } from "@/context/audio";

export default function IndependentWork() {
  return (
    <section id="work" className="py-20 md:py-32 px-4 md:px-12 border-b border-border-faint bg-base-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader number="03" title="Work" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.independentWork.items.map((item, idx) => (
            <AliveRegistryCard key={item.name} item={item} index={idx} />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-[length:100%_2px,3px_100%]" />
    </section>
  );
}

function AliveRegistryCard({ item, index }: { item: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const { playSystemSound } = useAudio();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Subtle, natural tilt
  const rotateX = useTransform(mouseY, [-200, 200], [4, -4]);
  const rotateY = useTransform(mouseX, [-200, 200], [-4, 4]);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  // Spotlight position
  const spotlightX = useTransform(mouseX, (v) => v + 150);
  const spotlightY = useTransform(mouseY, (v) => v + 240);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }



  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
      className="group relative h-[480px]"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformStyle: "preserve-3d",
          borderColor: isHovered ? 'var(--sys-accent-main)' : 'var(--sys-border-dim)',
          backgroundColor: isHovered ? 'var(--sys-base-hover)' : 'var(--sys-base-card)',
          boxShadow: isHovered ? '0 0 30px -10px var(--sys-accent-glow)' : 'none',
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full w-full border overflow-hidden flex flex-col justify-between"
      >
        {/* Background Image with zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {item.image && (
            <motion.div
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full"
            >
              <Image 
                src={item.image} 
                alt={item.name} 
                fill 
                className="object-cover grayscale brightness-[0.2] group-hover:grayscale-0 group-hover:brightness-[0.4] transition-all duration-700"
              />
            </motion.div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-base-main via-base-main/85 to-transparent" />
        </div>

        {/* Dynamic Spotlight using theme accent glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(400px circle at ${spotlightX}px ${spotlightY}px, var(--sys-accent-glow), transparent 70%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-20 p-8">
          {/* Header with animated status */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-1.5 h-1.5 rounded-none"
                style={{
                  backgroundColor: item.status === "Live" 
                    ? (isHovered ? 'var(--sys-accent-bright)' : 'var(--sys-accent-main)')
                    : 'var(--sys-border-dim)'
                }}
                animate={item.status === "Live" ? {
                  boxShadow: isHovered 
                    ? [
                        "0 0 12px var(--sys-accent-bright)", 
                        "0 0 20px var(--sys-accent-bright)", 
                        "0 0 12px var(--sys-accent-bright)"
                      ]
                    : [
                        "0 0 8px var(--sys-accent-main)", 
                        "0 0 16px var(--sys-accent-main)", 
                        "0 0 8px var(--sys-accent-main)"
                      ],
                  scale: [1, 1.2, 1]
                } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span 
                className="text-[10px] font-mono uppercase tracking-[0.2em]"
                style={{
                  color: isHovered ? 'var(--sys-accent-bright)' : 'var(--sys-text-muted)'
                }}
                animate={isHovered ? { letterSpacing: "0.25em" } : { letterSpacing: "0.2em" }}
                transition={{ duration: 0.3 }}
              >
                {item.category}
              </motion.span>
            </div>
            <motion.span 
              className="text-[9px] font-mono"
              style={{
                color: 'var(--sys-text-dim)',
                opacity: isHovered ? 0.3 : 0.1
              }}
              transition={{ duration: 0.3 }}
            >
              v.0{index + 1}
            </motion.span>
          </div>

          {/* Title with dynamic color */}
          <motion.h3 
            className="text-4xl font-black uppercase tracking-tighter mb-4 leading-none"
            style={{
              color: isHovered ? 'var(--sys-accent-bright)' : 'var(--sys-text-main)'
            }}
          >
            {item.name}
          </motion.h3>

          {/* Tech tags with stagger and dynamic colors */}
          <div className="flex flex-wrap gap-2 mb-6">
            {item.tech?.slice(0, 3).map((t: string, i: number) => (
              <motion.span 
                key={t} 
                className="text-[8px] font-bold uppercase py-1 px-2 border cursor-default"
                style={{
                  color: isHovered ? 'var(--sys-accent-bright)' : 'var(--sys-accent-main)',
                  borderColor: isHovered ? 'var(--sys-accent-main)' : 'var(--sys-border-dim)',
                  backgroundColor: isHovered ? 'var(--sys-base-hover)' : 'var(--sys-base-rack)',
                }}
                initial={{ opacity: 0, x: -10 }}
                animate={isHovered ? { 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: i * 0.05, duration: 0.3 }
                } : { 
                  opacity: 1, 
                  x: 0 
                }}
                whileHover={{ 
                  y: -2, 
                  scale: 1.05,
                  backgroundColor: 'var(--sys-base-active)'
                }}
                transition={{ duration: 0.2 }}
              >
                {t}
              </motion.span>
            ))}
          </div>

          {/* Description with smooth fade */}
          <motion.p 
            className="text-sm font-light leading-relaxed line-clamp-4"
            style={{
              color: isHovered ? 'var(--sys-text-sec)' : 'var(--sys-text-muted)'
            }}
          >
            {item.description}
          </motion.p>
        </div>

        {/* Footer */}
        <div className="relative z-20 p-8 pt-0">
          <div className="flex justify-between items-end">
            {/* Metric with dynamic color and scale */}
            <motion.div 
              className="space-y-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span 
                className="block text-[8px] font-mono uppercase tracking-widest"
                style={{
                  color: isHovered ? 'var(--sys-accent-main)' : 'var(--sys-text-dim)'
                }}
              >
                Efficiency_Metric
              </motion.span>
              <motion.span 
                className="text-xl font-black tracking-tight uppercase"
                style={{
                  color: isHovered ? 'var(--sys-accent-bright)' : 'var(--sys-accent-main)'
                }}
                animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {item.metric}
              </motion.span>
            </motion.div>

            {/* Button with dynamic border and micro interactions */}
            <motion.a
              href={item.link}
              onClick={()=>playSystemSound("SUCCESS")}
              target="_blank"
              whileHover={item.link ? { scale: 1.1 } : {}}
              whileTap={item.link ? { scale: 0.95 } : {}}
              className="w-14 h-14 flex items-center justify-center border relative overflow-hidden group/btn"
              style={{
                borderColor: item.link 
                  ? (isHovered ? 'var(--sys-accent-main)' : 'var(--sys-border-bright)')
                  : 'var(--sys-border-faint)',
                backgroundColor: isHovered && item.link ? 'var(--sys-base-hover)' : 'transparent',
                opacity: item.link ? 1 : 0.1,
                pointerEvents: item.link ? 'auto' : 'none',
                cursor: item.link ? 'pointer' : 'default'
              }}
            >
              {item.link ? (
                <>
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ArrowUpRight 
                      className="w-6 h-6"
                      style={{
                        color: isHovered ? 'var(--sys-accent-bright)' : 'var(--sys-accent-main)'
                      }}
                    />
                  </motion.div>
                </>
              ) : (
                <Lock 
                  className="w-5 h-5"
                  style={{ color: 'var(--sys-text-dim)' }}
                />
              )}
            </motion.a>
          </div>
        </div>

        {/* Background CPU icon with theme color */}
        <motion.div 
          className="absolute right-[-10%] bottom-[-10%] opacity-0 pointer-events-none"
          style={{
            color: 'var(--sys-accent-main)'
          }}
          animate={isHovered ? { rotate: -6, opacity: 0.03 } : { rotate: -12, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Cpu className="w-64 h-64" />
        </motion.div>

        {/* Dynamic top border glow */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-0"
          style={{
            background: `linear-gradient(90deg, transparent, var(--sys-accent-main), transparent)`,
            boxShadow: `0 0 10px var(--sys-accent-glow)`
          }}
          initial={{ scaleX: 0 }}
          animate={isHovered ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </motion.div>
  );
}