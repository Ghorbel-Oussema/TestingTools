module.exports = {
  root: true,
  env: { node: true, es2022: true, browser: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "security", "no-secrets"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:security/recommended",
  ],
  rules: {
    // Détection secrets (tu peux durcir après)
    "no-secrets/no-secrets": "warn",

    // Exemple de règles utiles
    "security/detect-object-injection": "warn",
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "build/",
    "coverage/",
    ".scannerwork/",
  ],
};
