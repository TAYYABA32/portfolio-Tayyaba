import { Manifest } from "@/types/menifest";

export const MANIFEST: Manifest = {
  identity: {
    name: "Rupraj Singh",
    title: "Full Stack Software Engineer",
    location: "Muzaffarpur, Bihar, IN",
    contact: {
      email: "ruprajsingh1@gmail.com",
      github: "github.com/rkofficial786",
      portfolio: "portfolio-rks.vercel.app"
    }
  },
  stats: [
    { label: "UPTIME", value: "99.9%" },
    { label: "OPTIMIZATION", value: "60%" },
    { label: "ACTIVE_USERS", value: "50k+" }
  ],
  experience: [
    {
      company: "Yukthi Systems Pvt. Ltd.",
      role: "Frontend Developer",
      period: "08/2025 - Present",
      highlights: [
        "Enhanced UX by 35% via complex UI components",
        "Optimized frontend load times by 25%",
        "Implemented 200GB+ file sharing systems"
      ]
    },
    {
      company: "AtticBits Solutions Pvt. Ltd.",
      role: "Software Engineer",
      period: "09/2023 - 08/2025",
      highlights: [
        "Built WebSocket resume parser, cutting processing time by 40%",
        "Reduced system downtime by 60% via monitoring dashboards",
        "Developed cross-platform asset tracking solutions"
      ]
    }
  ],
  stack: {
    frontend: ["React.js", "Next.js", "React Native", "TypeScript", "tRPC", "Remix"],
    backend: ["Node.js", "Express.js", "WebSocket", "Socket.io", "GraphQL"],
    infrastructure: ["Docker", "MongoDB", "PostgreSQL", "Firebase"]
  }
};