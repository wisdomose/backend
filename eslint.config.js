import tsParser from "@typescript-eslint/parser";
import onlyWarn from "eslint-plugin-only-warn";
import prettierPlugin from "eslint-plugin-prettier";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

/**
 * A custom ESLint configuration for libraries that use Typescript.
 * @type {import("eslint").Linter.Config}
 * */

export default [
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: { prettier: prettierPlugin },
  },
  {
    plugins: {
      onlyWarn,
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        node: true,
        es2021: true,
      },
    },
  },
  {
    ignores: [
      "dist/**",
      "build/**",
      "node_modules",
      "dist",
      "build",
      "public",
      "**/*.test.ts",
    ],
  },
];
