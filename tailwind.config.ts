import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        noir: "#050505",
        graphite: "#1a1a1d",
        ivory: "#f4f4f2",
        platinum: "#b9bcc2",
        gold: "#b79f72"
      },
      boxShadow: {
        premium: "0 20px 45px rgba(0, 0, 0, 0.35)",
        soft: "0 12px 28px rgba(0, 0, 0, 0.22)"
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at top, rgba(183,159,114,0.2), transparent 45%)"
      }
    }
  },
  plugins: []
};

export default config;
