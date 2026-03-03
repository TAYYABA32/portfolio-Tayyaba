"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGS = [
  "> INITIALIZING_RU_OS_V2.6...",
  "> LOADING_CORE_SYSTEMS...",
  "> DEPENDENCIES: REACT_19, NEXT.JS_16",
  "> NETWORK: MUZAFFARPUR_NODE_ACTIVE",
  "> ENCRYPTION_KEYS: VERIFIED",
  "> STATUS: READY_FOR_STREAM"
];

export const KernelPreloader = () => {
  const [currentLog, setCurrentLog] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (currentLog < LOGS.length) {
      const timer = setTimeout(() => setCurrentLog(prev => prev + 1), 200);
      return () => clearTimeout(timer);
    } else {
      const exitTimer = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(exitTimer);
    }
  }, [currentLog]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: "circIn" }}
          className="fixed inset-0 z-[999] bg-[#02040a] flex flex-col items-start justify-center p-12 font-mono"
        >
          <div className="max-w-xl space-y-2">
            {LOGS.slice(0, currentLog + 1).map((log, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`${
                  log.includes("READY") ? "text-cyan-400 font-bold" : "text-white/40"
                } text-xs md:text-sm tracking-tighter`}
              >
                {log}
              </motion.p>
            ))}
            {currentLog < LOGS.length && (
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="w-2 h-4 bg-cyan-500 inline-block align-middle ml-1"
              />
            )}
          </div>
          
          {/* Progress Bar */}
          <div className="absolute bottom-12 left-12 right-12 h-[1px] bg-white/5 overflow-hidden">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-cyan-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};