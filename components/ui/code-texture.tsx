"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SNIPPETS = [
  "const socket = new WebSocket(ENV.WS_URL);",
  "interface SystemNode { id: string; active: boolean; }",
  "await stream.pipeTo(resumableUpload.sink);",
  "export const dynamic = 'force-dynamic';",
  "ctx.emit('PROTOCOL_INIT', { version: '2.6' });",
  "docker swarm init --advertise-addr 127.0.0.1",
  "payload.chunk_size > 204800 ? 'COMPRESS' : 'RAW'",
];

export const CodeTexture = () => {
  return (
    // INCREASED OPACITY to 0.1 for visibility
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-10 select-none">
      {/* Moving Data Stream */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -20, x: Math.random() * 100 + "%", opacity: 0 }}
          animate={{ 
            y: ["0vh", "100vh"],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: Math.random() * 15 + 15, // Slightly faster for more life
            repeat: Infinity,
            ease: "linear",
            delay: i * 2
          }}
          // USE NEON CYAN for the text
          className="absolute font-mono text-[10px] whitespace-nowrap text-[#00f0ff] mix-blend-screen"
        >
          {SNIPPETS[i % SNIPPETS.length]}
        </motion.div>
      ))}

      {/* Static Grid Lines with subtle glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff08_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff08_1px,transparent_1px)] bg-[size:60px_60px]" />
    </div>
  );
};