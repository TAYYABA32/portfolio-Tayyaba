export type ThemePalette = {
  id: string;
  label: string;
  cssVars: Record<string, string>;
};

export const SYSTEM_PALETTES: ThemePalette[] = [
  // DO NOT TOUCH Default
  {
    id: "cyan_ops",
    label: "CYAN_OPS",
    cssVars: {
      "--sys-base-main": "#030303",
      "--sys-base-deep": "#020202",
      "--sys-base-card": "#050505",
      "--sys-base-rack": "#080808",
      "--sys-base-hover": "#0a0a0a",
      "--sys-base-active": "#0c0c0c",
      "--sys-base-tag": "#111111",

      "--sys-border-faint": "rgba(255, 255, 255, 0.05)",
      "--sys-border-dim": "rgba(255, 255, 255, 0.1)",
      "--sys-border-bright": "rgba(255, 255, 255, 0.2)",

      "--sys-accent-main": "#06b6d4",
      "--sys-accent-bright": "#22d3ee",
      "--sys-accent-sec": "#a855f7",
      "--sys-accent-glow": "rgba(6, 182, 212, 0.15)",

      "--sys-status-success": "#22c55e",
      "--sys-status-error": "#ef4444",
      "--sys-status-error-bg": "rgba(239, 68, 68, 0.05)",

      "--sys-text-main": "#e5e7eb",
      "--sys-text-sec": "#9ca3af",
      "--sys-text-muted": "#6b7280",
      "--sys-text-dim": "#4b5563",
    },
  },

  // REFINED: cyber violet without visual noise
  {
    id: "neon_purge",
    label: "NEON_PURGE",
    cssVars: {
      "--sys-base-main": "#07040d",
      "--sys-base-deep": "#030207",
      "--sys-base-card": "#0e0818",
      "--sys-base-rack": "#150b24",
      "--sys-base-hover": "#1c0f30",
      "--sys-base-active": "#24133d",
      "--sys-base-tag": "#2b174a",

      "--sys-border-faint": "rgba(233, 213, 255, 0.06)",
      "--sys-border-dim": "rgba(233, 213, 255, 0.12)",
      "--sys-border-bright": "rgba(233, 213, 255, 0.28)",

      "--sys-accent-main": "#c026d3",
      "--sys-accent-bright": "#e879f9",
      "--sys-accent-sec": "#818cf8",
      "--sys-accent-glow": "rgba(192, 38, 211, 0.18)",

      "--sys-status-success": "#34d399",
      "--sys-status-warning": "#fbbf24",
      "--sys-status-error": "#fb7185",
      "--sys-status-error-bg": "rgba(251, 113, 133, 0.06)",

      "--sys-text-main": "#f5eaff",
      "--sys-text-sec": "#dbc7ff",
      "--sys-text-muted": "#b79ce0",
      "--sys-text-dim": "#8a6fb3",

      "--sys-focus-ring": "rgba(232, 121, 249, 0.4)",
      "--sys-shadow-soft": "rgba(0, 0, 0, 0.4)",
    },
  },

  // REFINED: terminal-grade green, not cheap hacker green
  {
    id: "emerald_net",
    label: "EMERALD_NET",
    cssVars: {
      "--sys-base-main": "#020806",
      "--sys-base-deep": "#010403",
      "--sys-base-card": "#04100b",
      "--sys-base-rack": "#061a12",
      "--sys-base-hover": "#09261a",
      "--sys-base-active": "#0c3222",
      "--sys-base-tag": "#072015",

      "--sys-border-faint": "rgba(110, 231, 183, 0.05)",
      "--sys-border-dim": "rgba(110, 231, 183, 0.1)",
      "--sys-border-bright": "rgba(110, 231, 183, 0.22)",

      "--sys-accent-main": "#10b981",
      "--sys-accent-bright": "#6ee7b7",
      "--sys-accent-sec": "#60a5fa",
      "--sys-accent-glow": "rgba(16, 185, 129, 0.16)",

      "--sys-status-success": "#4ade80",
      "--sys-status-warning": "#facc15",
      "--sys-status-error": "#f87171",
      "--sys-status-error-bg": "rgba(248, 113, 113, 0.06)",

      "--sys-text-main": "#ecfdf5",
      "--sys-text-sec": "#b7f7d8",
      "--sys-text-muted": "#7dd3a7",
      "--sys-text-dim": "#3bbf8a",

      "--sys-focus-ring": "rgba(110, 231, 183, 0.35)",
      "--sys-shadow-soft": "rgba(0, 0, 0, 0.45)",
    },
  },

  // REFINED: cult red, controlled and brutal
  {
    id: "crimson_sect",
    label: "CRIMSON_SECT",
    cssVars: {
      "--sys-base-main": "#120303",
      "--sys-base-deep": "#070101",
      "--sys-base-card": "#1f0606",
      "--sys-base-rack": "#2c0909",
      "--sys-base-hover": "#3a0c0c",
      "--sys-base-active": "#480f0f",
      "--sys-base-tag": "#2f0808",

      "--sys-border-faint": "rgba(254, 205, 211, 0.05)",
      "--sys-border-dim": "rgba(254, 205, 211, 0.1)",
      "--sys-border-bright": "rgba(254, 205, 211, 0.26)",

      "--sys-accent-main": "#e11d48",
      "--sys-accent-bright": "#fb7185",
      "--sys-accent-sec": "#f59e0b",
      "--sys-accent-glow": "rgba(225, 29, 72, 0.18)",

      "--sys-status-success": "#22c55e",
      "--sys-status-warning": "#fbbf24",
      "--sys-status-error": "#991b1b",
      "--sys-status-error-bg": "rgba(153, 27, 27, 0.06)",

      "--sys-text-main": "#fff1f2",
      "--sys-text-sec": "#fecaca",
      "--sys-text-muted": "#fda4af",
      "--sys-text-dim": "#f87171",

      "--sys-focus-ring": "rgba(251, 113, 133, 0.35)",
      "--sys-shadow-soft": "rgba(0, 0, 0, 0.5)",
    },
  },
  {
    id: "obsidian_ice",
    label: "OBSIDIAN_ICE",
    cssVars: {
      "--sys-base-main": "#050607",
      "--sys-base-deep": "#020304",
      "--sys-base-card": "#0a0d0f",
      "--sys-base-rack": "#101418",
      "--sys-base-hover": "#151a1f",
      "--sys-base-active": "#1b2127",
      "--sys-base-tag": "#12161a",

      "--sys-border-faint": "rgba(226, 232, 240, 0.05)",
      "--sys-border-dim": "rgba(226, 232, 240, 0.1)",
      "--sys-border-bright": "rgba(226, 232, 240, 0.2)",

      "--sys-accent-main": "#38bdf8",
      "--sys-accent-bright": "#7dd3fc",
      "--sys-accent-sec": "#94a3b8",
      "--sys-accent-glow": "rgba(56, 189, 248, 0.15)",

      "--sys-status-success": "#22c55e",
      "--sys-status-warning": "#eab308",
      "--sys-status-error": "#ef4444",
      "--sys-status-error-bg": "rgba(239, 68, 68, 0.06)",

      "--sys-text-main": "#e5e7eb",
      "--sys-text-sec": "#cbd5e1",
      "--sys-text-muted": "#94a3b8",
      "--sys-text-dim": "#64748b",

      "--sys-focus-ring": "rgba(125, 211, 252, 0.4)",
      "--sys-shadow-soft": "rgba(0, 0, 0, 0.45)",
    },
  },
  {
    id: "amber_grid",
    label: "AMBER_GRID",
    cssVars: {
      "--sys-base-main": "#090807",
      "--sys-base-deep": "#040302",
      "--sys-base-card": "#14100c",
      "--sys-base-rack": "#1d160f",
      "--sys-base-hover": "#271c13",
      "--sys-base-active": "#312217",
      "--sys-base-tag": "#20160f",

      "--sys-border-faint": "rgba(253, 230, 138, 0.05)",
      "--sys-border-dim": "rgba(253, 230, 138, 0.1)",
      "--sys-border-bright": "rgba(253, 230, 138, 0.25)",

      "--sys-accent-main": "#f59e0b",
      "--sys-accent-bright": "#fbbf24",
      "--sys-accent-sec": "#fb7185",
      "--sys-accent-glow": "rgba(245, 158, 11, 0.18)",

      "--sys-status-success": "#22c55e",
      "--sys-status-warning": "#facc15",
      "--sys-status-error": "#dc2626",
      "--sys-status-error-bg": "rgba(220, 38, 38, 0.06)",

      "--sys-text-main": "#fffbeb",
      "--sys-text-sec": "#fde68a",
      "--sys-text-muted": "#fcd34d",
      "--sys-text-dim": "#d97706",

      "--sys-focus-ring": "rgba(251, 191, 36, 0.4)",
      "--sys-shadow-soft": "rgba(0, 0, 0, 0.5)",
    },
  },
  {
    id: "steel_wave",
    label: "STEEL_WAVE",
    cssVars: {
      "--sys-base-main": "#06090d",
      "--sys-base-deep": "#030507",
      "--sys-base-card": "#0c1218",
      "--sys-base-rack": "#121a22",
      "--sys-base-hover": "#18232d",
      "--sys-base-active": "#1f2d38",
      "--sys-base-tag": "#141e26",

      "--sys-border-faint": "rgba(148, 163, 184, 0.05)",
      "--sys-border-dim": "rgba(148, 163, 184, 0.1)",
      "--sys-border-bright": "rgba(148, 163, 184, 0.22)",

      "--sys-accent-main": "#60a5fa",
      "--sys-accent-bright": "#93c5fd",
      "--sys-accent-sec": "#22d3ee",
      "--sys-accent-glow": "rgba(96, 165, 250, 0.16)",

      "--sys-status-success": "#4ade80",
      "--sys-status-warning": "#facc15",
      "--sys-status-error": "#f87171",
      "--sys-status-error-bg": "rgba(248, 113, 113, 0.06)",

      "--sys-text-main": "#e2e8f0",
      "--sys-text-sec": "#cbd5e1",
      "--sys-text-muted": "#94a3b8",
      "--sys-text-dim": "#64748b",

      "--sys-focus-ring": "rgba(147, 197, 253, 0.4)",
      "--sys-shadow-soft": "rgba(0, 0, 0, 0.45)",
    },
  },
  {
    id: "void_gold",
    label: "VOID_GOLD",
    cssVars: {
      "--sys-base-main": "#060504",
      "--sys-base-deep": "#020201",
      "--sys-base-card": "#0f0c0a",
      "--sys-base-rack": "#16110e",
      "--sys-base-hover": "#1e1713",
      "--sys-base-active": "#261c17",
      "--sys-base-tag": "#1a1411",

      "--sys-border-faint": "rgba(253, 224, 71, 0.05)",
      "--sys-border-dim": "rgba(253, 224, 71, 0.1)",
      "--sys-border-bright": "rgba(253, 224, 71, 0.24)",

      "--sys-accent-main": "#facc15",
      "--sys-accent-bright": "#fde047",
      "--sys-accent-sec": "#fb7185",
      "--sys-accent-glow": "rgba(250, 204, 21, 0.2)",

      "--sys-status-success": "#22c55e",
      "--sys-status-warning": "#eab308",
      "--sys-status-error": "#dc2626",
      "--sys-status-error-bg": "rgba(220, 38, 38, 0.06)",

      "--sys-text-main": "#fffbeb",
      "--sys-text-sec": "#fde68a",
      "--sys-text-muted": "#fcd34d",
      "--sys-text-dim": "#ca8a04",

      "--sys-focus-ring": "rgba(253, 224, 71, 0.45)",
      "--sys-shadow-soft": "rgba(0, 0, 0, 0.55)",
    },
  },
  {
    id: "ashen_rose",
    label: "ASHEN_ROSE",
    cssVars: {
      "--sys-base-main": "#0a0709",
      "--sys-base-deep": "#040203",
      "--sys-base-card": "#151013",
      "--sys-base-rack": "#1e171c",
      "--sys-base-hover": "#281f25",
      "--sys-base-active": "#32262f",
      "--sys-base-tag": "#20181d",

      "--sys-border-faint": "rgba(251, 207, 232, 0.05)",
      "--sys-border-dim": "rgba(251, 207, 232, 0.1)",
      "--sys-border-bright": "rgba(251, 207, 232, 0.24)",

      "--sys-accent-main": "#ec4899",
      "--sys-accent-bright": "#f9a8d4",
      "--sys-accent-sec": "#a855f7",
      "--sys-accent-glow": "rgba(236, 72, 153, 0.16)",

      "--sys-status-success": "#22c55e",
      "--sys-status-warning": "#facc15",
      "--sys-status-error": "#be123c",
      "--sys-status-error-bg": "rgba(190, 18, 60, 0.06)",

      "--sys-text-main": "#fdf2f8",
      "--sys-text-sec": "#fbcfe8",
      "--sys-text-muted": "#f9a8d4",
      "--sys-text-dim": "#db2777",

      "--sys-focus-ring": "rgba(249, 168, 212, 0.4)",
      "--sys-shadow-soft": "rgba(0, 0, 0, 0.5)",
    },
  },
];
