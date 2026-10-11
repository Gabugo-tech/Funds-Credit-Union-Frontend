import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary — deep trust blue
        primary: {
          50:  "#eff8ff",
          100: "#dbeffe",
          200: "#b9e1fd",
          300: "#7cccfc",
          400: "#38b3f8",
          500: "#0e96e8",
          600: "#0277c6",
          700: "#035fa1",
          800: "#075185",
          900: "#0c436e",
          950: "#082b49",
        },
        // Sky — lighter sky-blue accent
        sky: {
          50:  "#f0faff",
          100: "#e0f4fe",
          200: "#b9eafe",
          300: "#7cd8fd",
          400: "#37c0f9",
          500: "#0da6ea",
          600: "#0185c8",
          700: "#0269a2",
          800: "#065886",
          900: "#0b496f",
          950: "#072e4a",
        },
        // Gold — trust & prosperity accent
        gold: {
          50:  "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
        // Dark mode surfaces
        dark: {
          bg:      "#060d1a",
          surface: "#0a1628",
          card:    "#0e1e35",
          border:  "#162844",
          muted:   "#112038",
        },
        // Light mode surfaces
        light: {
          bg:      "#f0f7ff",
          surface: "#ffffff",
          card:    "#ffffff",
          border:  "#dbeffe",
          muted:   "#f5faff",
        },
        // Status
        success: {
          light: "#22c55e",
          dark:  "#16a34a",
          bg:    "#f0fdf4",
        },
        danger: {
          light: "#ef4444",
          dark:  "#dc2626",
          bg:    "#fef2f2",
        },
        warning: {
          light: "#f59e0b",
          dark:  "#d97706",
          bg:    "#fffbeb",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "glow-blue":  "0 0 24px rgba(2, 119, 198, 0.3)",
        "glow-gold":  "0 0 20px rgba(245, 158, 11, 0.3)",
        "glow-sm":    "0 0 12px rgba(2, 119, 198, 0.2)",
        "card-light": "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)",
        "card-dark":  "0 1px 3px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)",
        "nav":        "0 1px 0 rgba(0,0,0,0.08)",
      },
      backgroundImage: {
        "gradient-blue":       "linear-gradient(135deg, #035fa1 0%, #0da6ea 100%)",
        "gradient-blue-dark":  "linear-gradient(135deg, #082b49 0%, #072e4a 100%)",
        "gradient-gold":       "linear-gradient(135deg, #d97706 0%, #fbbf24 100%)",
        "gradient-trust":      "linear-gradient(135deg, #035fa1 0%, #0da6ea 60%, #fbbf24 100%)",
        "gradient-card":       "linear-gradient(145deg, rgba(3,95,161,0.12) 0%, rgba(13,166,234,0.06) 100%)",
        "mesh":                "radial-gradient(at 20% 50%, rgba(2,119,198,0.15) 0px, transparent 50%), radial-gradient(at 80% 20%, rgba(13,166,234,0.1) 0px, transparent 50%), radial-gradient(at 60% 80%, rgba(251,191,36,0.08) 0px, transparent 50%)",
      },
      animation: {
        "fade-in":    "fadeIn 0.3s ease-out",
        "slide-up":   "slideUp 0.4s ease-out",
        "slide-in-l": "slideInLeft 0.3s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
        "shimmer":    "shimmer 1.5s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%":   { opacity: "0", transform: "translateX(-12px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
