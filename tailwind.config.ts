import { type Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    // './app/**/*.{js,ts,jsx,tsx}',
    // './pages/**/*.{js,ts,jsx,tsx}',
    // './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ac-1": "#FB74B5",
        "ac-2": "#BF1065",
        "pm-3": "#A9A9A9",
        "pm-4": "#878787",
        "pm-6": "#3C3C3C",
        "pm-10": "#1E1E1E",
        "pm-11": "#DDD",
        "pm-12": "#777E90",
        "pm-13": "#585858",
        "ct-1": "#090F1B",
        "ct-2": "#030607",
        "bg-1": "#F1F3F5",
        "gt-1": "#A0AEC0",
        body: "#64748B",
        bodydark: "#AEB7C0",
        bodydark1: "#DEE4EE",
        bodydark2: "#8A99AF",
        primary: "#3C50E0",
        secondary: "#80CAEE",
        "primary-black": "#1A232E",
        "secondary-white": "#c7c7c7",
        stroke: "#E2E8F0",
        graydark: "#333A48",
        "admingray-2": "#F7F9FC",
        "admingray-3": "#FAFAFA",
        "admingray-4": "#F1F5F9",

        whiten: "#F1F5F9",
        whiter: "#F5F7FD",
        boxdark: "#24303F",
        "boxdark-2": "#1A222C",
        strokedark: "#2E3A47",
        "form-strokedark": "#3d4d60",
        "form-input": "#1d2a39",
        "meta-1": "#DC3545",
        "meta-2": "#EFF2F7",
        "meta-3": "#10B981",
        "meta-4": "#313D4A",
        "meta-5": "#259AE6",
        "meta-6": "#FFBA00",
        "meta-7": "#FF6766",
        "meta-8": "#F0950C",
        "meta-9": "#E5E7EB",
        success: "#219653",
        danger: "#D34053",
        warning: "#FFA70B",
        twitter: "#1DA1F2",
        facebook: "#1877F2",
        instagram: "#EA4A55",
        discord: "#5562EA",
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
      backgroundImage: {
        "gradient-24":
          "linear-gradient(104.64deg, #030607 0%, #090F1B 70.15%);",
      },
    },
    screens: {
      xsss: "280px",
      xss: "300px",
      xs: "340px",
      smd: "570px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
