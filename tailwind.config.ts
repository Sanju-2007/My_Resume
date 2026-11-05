import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#FAFAF8",
          pure: "#FFFFFF",
          subtle: "#F3F3F1",
          elevated: "#F8F8F6",
        },
        ink: {
          primary: "#171717",
          secondary: "#737373",
          muted: "#A3A3A3",
          border: "#E7E7E2",
          divider: "#EEEEEC",
        },
        dark: {
          canvas: "#111111",
          surface: "#181818",
          card: "#1F1F1F",
          border: "#292929",
          muted: "#888888",
        },
        cobalt: {
          DEFAULT: "#315EFB",
          hover: "#2247D6",
          subtle: "#EDF2FF",
          glow: "rgba(49, 94, 251, 0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        serif: ["var(--font-serif)", "Newsreader", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "SF Mono", "Menlo", "monospace"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px -1px rgba(0, 0, 0, 0.02)",
        card: "0 4px 20px -2px rgba(23, 23, 23, 0.05)",
        float: "0 20px 40px -15px rgba(23, 23, 23, 0.08)",
        "dark-card": "0 8px 30px rgba(0, 0, 0, 0.4)",
      },
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
        '32': 'repeat(32, minmax(0, 1fr))',
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
        widest: "0.15em",
      },
    },
  },
  plugins: [],
};

export default config;

