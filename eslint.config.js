const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const security = require("eslint-plugin-security");
const noSecrets = require("eslint-plugin-no-secrets");

module.exports = [
  // Ignore folders
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/.scannerwork/**",
    ],
  },

  // JS/TS rules
  {
    files: ["**/*.{js,cjs,mjs,ts}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      security,
      "no-secrets": noSecrets,
    },
    rules: {
      // Basique
      ...tsPlugin.configs.recommended.rules,

      // Sécurité
      ...security.configs.recommended.rules,
      "security/detect-object-injection": "warn",

      // Secrets
      "no-secrets/no-secrets": "warn",
    },
  },
];
