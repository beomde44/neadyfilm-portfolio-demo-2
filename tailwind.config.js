/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        site: {
          bg: "#080808",
          panel: "#11100f",
          panel2: "#171514",
          text: "#efe7da",
          muted: "rgba(239, 231, 218, 0.68)",
          faint: "rgba(239, 231, 218, 0.12)",
          line: "rgba(239, 231, 218, 0.16)",
          accent: "#9a4338",
          accentSoft: "rgba(154, 67, 56, 0.18)",
        },
      },
      maxWidth: {
        site: "1180px",
      },
      borderRadius: {
        card: "22px",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Apple SD Gothic Neo"',
          '"Noto Sans KR"',
          '"Segoe UI"',
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
