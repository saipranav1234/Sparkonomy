import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dashboard-purple": "#8B5CF6",
        "dashboard-light-purple": "#EDE9FE",
        "dashboard-text-dark": "#374151",
        "dashboard-text-light": "#6B7280",
        "status-paid": "#10B981",
        "status-partially-paid": "#F59E0B",
        "status-overdue": "#EF4444",
        "status-awaited": "#FCD34D",
        "status-disputed": "#EF4444",
        "status-unpaid": "#EF4444",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
