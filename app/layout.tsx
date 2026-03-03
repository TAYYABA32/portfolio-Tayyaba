import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AudioProvider } from "@/context/audio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- CONSTANTS ---
const NAME = "Tayyaba Munir";
const ROLE = "Frontend Developer";
const BIO =
  "Frontend Developer with a passion for crafting responsive and user-friendly web applications. Skilled in modern JavaScript frameworks and a strong focus on UI/UX design.";

// FIXED: Renamed to avoid conflict with the global URL class
const BASE_URL = "https://tayyaba32.github.io";

const KEYWORDS = [
  "Frontend Developer",
  "Tayyaba",
  "Web Developer Pakistan",
  "React Developer",
  "Next.js Developer",
  "UI/UX Enthusiast",
  "JavaScript Expert",
  "Tailwind CSS",
  "Portfolio Website",
  "Responsive Design",
  "Web Development",
];

// --- 1. VIEWPORT ---
export const viewport: Viewport = {
  themeColor: "#030303",
  colorScheme: "dark",
};

// --- 2. METADATA (SEO Core) ---
export const metadata: Metadata = {
  // FIXED: Now uses the renamed variable
  metadataBase: new URL(BASE_URL),

  title: {
    default: `${NAME} | ${ROLE}`,
    template: `%s | ${NAME}`,
  },
  description: BIO,
  keywords: KEYWORDS,
  authors: [{ name: NAME, url: BASE_URL }],
  creator: NAME,

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: `${NAME} | ${ROLE}`,
    description: BIO,
    siteName: `${NAME} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${NAME} - ${ROLE}`,
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: `${NAME} | ${ROLE}`,
    description: BIO,
    creator: "@tayyaba32",
    images: ["/og-image.png"],
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // --- 3. STRUCTURED DATA ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: NAME,
    url: BASE_URL,
    jobTitle: ROLE,
    image: `${BASE_URL}/og-image.png`,
    sameAs: [
      "https://github.com/tayyaba32",
      "https://linkedin.com/in/tayyaba-m-03aa4025a",
      "mailto:tayyaba32@gmail.com",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pakistan",
      addressCountry: "PK",
    },
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "UI/UX Design",
      "Frontend Development",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030303] text-gray-200`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AudioProvider>
          {children}
        </AudioProvider>
      </body>
    </html>
  );
}