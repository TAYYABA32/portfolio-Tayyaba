"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SocialLink } from "@/components/ui/shared";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { useAudio } from "@/context/audio";

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  const { playSystemSound } = useAudio();

  return (
    <section className="relative min-h-dvh flex flex-col justify-center px-4 md:px-12 overflow-hidden bg-base-main">
      <ThemeSwitcher />

      <h2 className="sr-only">
        Rupraj Singh is a Full Stack Software Engineer specializing in React,
        Next.js, Node.js, WebSocket systems, and modern frontend architecture.
      </h2>

      <p className="sr-only">
        Rupraj Singh is a Full Stack Software Engineer from India with over two
        years of experience building scalable web and mobile applications. His
        work focuses on frontend architecture, UI and UX quality, and real-time
        systems using React, Next.js, Node.js, and WebSockets.
      </p>

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-20%] md:top-[-20%] md:right-[-10%] w-75 h-75 md:w-200 md:h-200 bg-radial-gradient from-accent-main/40 via-accent-sec/20 to-transparent blur-3xl pointer-events-none"
      />

      <div className="hidden md:block absolute top-6 left-6 w-4 h-4 border-l border-t border-border-bright" />
      <div className="hidden md:block absolute top-6 right-6 w-4 h-4 border-r border-t border-border-bright" />
      <div className="hidden md:block absolute bottom-6 left-6 w-4 h-4 border-l border-b border-border-bright" />
      <div className="hidden md:block absolute bottom-6 right-6 w-4 h-4 border-r border-b border-border-bright" />

      <div className="hidden md:block absolute top-24 right-6 md:right-12 text-right font-mono text-[10px] md:text-xs text-white/30 select-none space-y-1">
        <p className="flex justify-end gap-2 items-center">
          <span className="w-1.5 h-1.5 bg-status-success rounded-full animate-pulse" />
          SYS: ONLINE
        </p>
        <p>LOC: {personal.location.toUpperCase()}</p>
        <p>ID: {personal.name.toUpperCase()}_V2.6</p>
      </div>

      <div className="z-10 max-w-7xl w-full mx-auto relative pt-12 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* REAL H1 */}
          <div className="overflow-hidden py-1 md:py-2">
            <h1 className="text-[15vw] md:text-[13vw] leading-[0.85] md:leading-[0.8] font-black tracking-tighter text-white uppercase mix-blend-exclusion">
              {personal.name}
            </h1>
          </div>

          {/* SAME DESIGN — semantic fix only */}
          <div className="overflow-visible">
            <motion.span
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="block text-[15vw] md:text-[13vw] leading-[0.85] md:leading-[0.8] pb-4 md:pb-8 -mt-1 md:-mt-2 font-black tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(110deg,#555_45%,#fff_50%,#555_55%)] bg-[length:250%_100%] drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            >
              {personal.surname}
            </motion.span>
          </div>
        </motion.div>

        <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start md:items-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="md:col-span-6 md:pr-12 relative"
          >
            <div className="absolute -left-6 top-0 bottom-0 w-pc bg-gradient-to-b from-accent-main to-transparent opacity-50 hidden md:block" />

            <div className="flex items-center gap-3 mb-4 md:mb-6 text-accent-bright font-mono text-[10px] md:text-xs tracking-widest uppercase">
              <Cpu className="w-4 h-4" />
              <span>Full Stack Architecture</span>
            </div>

            <p className="text-lg md:text-2xl text-text-sec font-light leading-relaxed max-w-md md:max-w-none">
              {personal.shortDesc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="md:col-span-6 flex flex-col items-start md:items-end gap-6 md:gap-8 w-full"
          >
            <a
              href="/Tayyaba-resume.pdf"
              onClick={() => playSystemSound("SUCCESS")}
              download={`Resume_${personal.name}_${personal.surname}.pdf`}
              className="w-fit md:w-auto group relative inline-flex items-center justify-center md:justify-start gap-4 px-8 py-4 md:py-5 bg-base-hover border border-border-dim overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-cyan-900/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-b from-transparent via-accent-main to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-linear" />

              <div className="relative flex items-center gap-3">
                <div className="p-2 bg-white/5 border border-border-dim group-hover:border-accent-main/50 group-hover:text-accent-bright transition-colors">
                  <Download className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest group-hover:text-accent-main transition-colors">
                    System_File
                  </span>
                  <span className="text-white font-bold tracking-wider">
                    DOWNLOAD CV
                  </span>
                </div>
              </div>
            </a>

            <div className="flex gap-4 w-full md:w-auto overflow-x-auto md:overflow-visible pb-2 md:pb-0">
              <SocialLink  href={personal.github} icon={<Github />} label="GH" />
              <SocialLink
                href={personal.linkedin}
                icon={<Linkedin />}
                label="LI"
              />
              <SocialLink
                href={`mailto:${personal.email}`}
                icon={<Mail />}
                label="EM"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-border-dim">
        <div className="absolute left-0 bottom-0 w-16 md:w-24 h-[1px] bg-accent-main" />
      </div>
    </section>
  );
}
