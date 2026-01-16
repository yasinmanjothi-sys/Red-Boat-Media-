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
                background: "#050505",
                foreground: "#ededed",
                red: {
                    primary: "#FF2A2A",
                    500: "#FF2A2A",
                    600: "#D91E1E",
                    900: "#7f1d1d", // Added for gradients
                }
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-orbitron)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
