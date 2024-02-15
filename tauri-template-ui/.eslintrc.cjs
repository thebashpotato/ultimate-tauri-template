module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    ecmaFeatures: {
      jsx: true
    }
  },
  ignorePatterns: ["vite.config.ts"],
  plugins: ["react", "react-hooks", "prettier", "@typescript-eslint/eslint-plugin"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended"
  ],
  rules: {},
  globals: {
    Edit: "writable",
    console: "writable",
    _: "writable",
    $: "writable"
  }
};
