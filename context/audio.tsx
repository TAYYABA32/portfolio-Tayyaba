"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';

type SoundType = 'CHIRP' | 'HEAVY' | 'SUCCESS';

interface AudioContextType {
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  playSystemSound: (type?: SoundType) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [soundEnabled, setSoundEnabled] = useState(false);

  const playSystemSound = useCallback((type: SoundType = 'CHIRP') => {
    if (!soundEnabled || typeof window === 'undefined') return;
    
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Sharp Industrial Waveforms
    osc.type = 'square'; 

    switch(type) {
      case 'HEAVY':
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        break;
      case 'SUCCESS':
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.setValueAtTime(1200, ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        break;
      default: // Default Chirp
        osc.frequency.setValueAtTime(850, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1250, ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
    }

    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  }, [soundEnabled]);

  return (
    <AudioContext.Provider value={{ soundEnabled, setSoundEnabled, playSystemSound }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio must be used within an AudioProvider");
  return context;
};