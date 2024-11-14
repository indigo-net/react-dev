// packages/eslint-config/react.mjs
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  // 기본 ESLint 설정 추가
  js.configs.recommended,

  // Prettier 규칙 추가
  prettier,

  {
    plugins: {
      react,
      reactHooks,
      import: importPlugin,
      "jsx-a11y": jsxA11y,
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "warn",    
      "no-console": "warn",
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off",       // React 17+에서는 불필요
      "react/prop-types": "off",               // TypeScript 사용 시 prop-types 비활성화
      "react/jsx-props-no-spreading": "off",
      "react/require-default-props": "off",
      "import/prefer-default-export": "off",
      "prettier/prettier": "warn",

      "react/function-component-definition": [
        "error",
        { "namedComponents": "arrow-function" }
      ],
    },
  },
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        React: "writable",
        JSX: "writable",
      },
    },
  },
  {
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
  },
];
