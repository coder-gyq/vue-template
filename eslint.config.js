import globals from "globals";
import pluginJs from "@eslint/js";
import tsEslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import eslintPluginJsonc from "eslint-plugin-jsonc";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,ts,vue}"],
  },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  ...compat.extends("plugin:prettier/recommended"),
  ...eslintPluginJsonc.configs["flat/recommended-with-jsonc"],
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tsEslint.parser } },
  },
  {
    ignores: ["**/dist/**"],
  },
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
];
