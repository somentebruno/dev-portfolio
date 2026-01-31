import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#0ea5e9", // Vivid Sky Blue
                "background-light": "#f8fafc", // Slate 50
                "background-dark": "#0f172a", // Slate 900
                "surface-light": "#ffffff",
                "surface-dark": "#1e293b", // Slate 800
                "text-main-light": "#0f172a",
                "text-main-dark": "#f1f5f9",
                "text-muted-light": "#64748b",
                "text-muted-dark": "#94a3b8",
                "border-light": "#e2e8f0",
                "border-dark": "#334155",
            },
            fontFamily: {
                display: ["var(--font-inter)", "sans-serif"],
                mono: ["var(--font-fira-code)", "monospace"],
            },
        },
    },
    plugins: [],
} satisfies Config;
