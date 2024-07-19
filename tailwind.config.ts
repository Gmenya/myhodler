const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        "primary-black": "var(--primary-black)",
        "primary-green": "var(--primary-green)",
        "primary-red": "var(--primary-red)",
        "primary-blue": "var(--primary-blue)",
        "light-gray": "var(--light-gray)",
        disabled: "var(--disabled)",
        scroller: "var(--scroller)",
      },
      fontFamily: {
        sans: ['"CoFoSans"', "sans-serif"],
      },
      height: {
        inherit: "inherit",
      },
    },
    screens: {
      s: "430px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
}

export default config
