import {
  Github,
  Linkedin,
  Mail,
  Server,
  Layers,
  Globe,
  Code2,
} from "lucide-react";

export const PORTFOLIO_DATA = {
  personal: {
    name: "Tayyaba",
    surname: "",
    title: "Frontend Developer",
    location: "Pakistan",
    email: "tayyabahuma12@gmail.com",
    github: "https://github.com/tayyaba32",
    linkedin: "https://www.linkedin.com/in/tayyaba-m-03aa4025a/",
    shortDesc:
      "Frontend Developer with a passion for crafting responsive and user-friendly web applications. Skilled in modern JavaScript frameworks and a strong focus on UI/UX design.",
  },

  skills: [
    {
      category: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "JavaScript",
      ],
      icon: Code2,
      color: "text-cyan-400",
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js"],
      icon: Server,
      color: "text-purple-400",
    },
    
    
  ],

  projects: [
    {
      title: "Portfolio Website",
      role: "Frontend Developer",
      year: "2026",
      company: "Personal Project",
      desc: "A personal portfolio website to showcase my skills, projects, and experience.",
      tech: ["React", "Next.js", "Tailwind CSS"],
      problem:
        "Needed a platform to present my work and skills to potential employers and collaborators.",
      metric: "100% Responsive Design",
      solution:
        "Designed and developed a modern, responsive portfolio website with a clean and intuitive UI.",
      highlights: [
        "Implemented dynamic project sections with reusable components.",
        "Optimized for performance and SEO.",
        "Deployed on Vercel for seamless hosting.",
      ],
      deployment: "https://tayyaba32.github.io/",
    },
    {
      title: "E-Commerce Platform",
      role: "Frontend Developer",
      year: "2025",
      company: "Freelance",
      desc: "An e-commerce platform with a focus on user-friendly design and smooth checkout flows.",
      tech: ["React", "Redux Toolkit", "Firebase"],
      problem:
        "Clients required a scalable and visually appealing platform to manage online sales.",
      metric: "Increased Conversion Rates",
      solution:
        "Built a responsive and feature-rich e-commerce platform with real-time data synchronization.",
      highlights: [
        "Integrated payment gateways and real-time inventory updates.",
        "Designed intuitive product discovery and checkout flows.",
        "Ensured cross-browser compatibility and mobile responsiveness.",
      ],
    },
  ],

  
  independentWork: {
    title: "Independent Work",
    subtitle:
      "Projects and systems built independently, showcasing creativity and technical expertise.",
    items: [
      // ── 1. Droit UI ────────────────────────────────────────
      {
        name: "Droit UI",
        category: "Component Library",
        role: "Frontend Developer",
        description:
          "A comprehensive UI component library built with React and TypeScript, cutting code redundancy by ~40% across future applications. Ships 15+ reusable, strictly-typed components (Modals, Buttons, Forms) with full prop validation.",
        tech: ["React", "TypeScript", "CSS"],
        status: "Live",
        metric: "15+ Components • ~40% Less Redundancy",
        link: "https://droit-ui.netlify.app",
        githubLink: "https://github.com/TAYYABA32", // update to specific repo
        image: "/projects/drouit.png",
        type: "personal",
      },
  
      // ── 2. YouTube Clone ───────────────────────────────────
      {
        name: "YouTube Clone",
        category: "Web Development",
        role: "Frontend Developer",
        description:
          "A fully functional video-sharing platform replica with search, video playback, and channel subscription features — 100% client-side rendered. Features dynamic state management for real-time UI updates (comments, likes) with zero page reloads.",
        tech: ["React", "API Integration"],
        status: "Live",
        metric: "100% Client-Side Rendering",
        link: "https://social-youtube-clone.netlify.app",
        githubLink: "https://github.com/TAYYABA32/youtube-clone", // update if different
        image: "/projects/youtube.png",
        type: "personal",
      },
  
      // ── 3. Real Estate Platform ────────────────────────────
      {
        name: "Real Estate Platform",
        category: "Web Development",
        role: "Frontend Developer",
        description:
          "A property listing platform with advanced filtering, handling 500+ listings without performance degradation through optimized rendering. Features high-fidelity animations built with Framer Motion.",
        tech: ["React", "Framer Motion"],
        status: "Live",
        metric: "500+ Listings • Optimized Rendering",
        link: "https://real-eastate321.netlify.app",
        githubLink: "https://github.com/TAYYABA32/real-estate", // update if different
        image: "/projects/real-state.png",
        type: "personal",
      },
  
      // ── 4. Social Book ─────────────────────────────────────
      {
        name: "Social Book",
        category: "Web Development",
        role: "Frontend Developer",
        description:
          "A social networking interface with post sharing, likes, and comments. Includes a Dark Mode toggle enhancing accessibility for all users — built with vanilla HTML, CSS, and JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
        status: "Live",
        metric: "Dark Mode • Full Interaction Suite",
        link: "https://tayyaba32.github.io/socialbook",
        githubLink: "https://github.com/TAYYABA32/socialbook",
        image: "/projects/socialbook.png",
        type: "personal",
      },
  
      
    ],
  },
};
