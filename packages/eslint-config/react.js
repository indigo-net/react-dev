const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");


/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "turbo",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  plugins: ["only-warn", "react", "react-hooks", "import", "jsx-a11y", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "import/prefer-default-export": "off",
    "prettier/prettier": "warn",
  },
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    ".*.js",
    "node_modules/",
    "dist/",
  ],
  overrides: [
    { files: ["*.js?(x)", "*.ts?(x)"] },
  ],
};
