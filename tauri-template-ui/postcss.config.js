import tailwindcss from "tailwindcss";

const config = {
  plugins: [
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss()
  ]
};

export default config;
