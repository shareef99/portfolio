import eslintConfigPrettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import pluginPromise from "eslint-plugin-promise";
import reactHooks from "eslint-plugin-react-hooks";
import eslint from "@eslint/js";
import * as parser from "@typescript-eslint/parser";
import * as pluginImportX from "eslint-plugin-import-x";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import nextPlugin from "@next/eslint-plugin-next";

export default tseslint.config(
  {
    ignores: [
      "*.sql",
      "*.yaml",
      "**/build/**",
      "**/coverage/**",
      "**/dist/**",
      "**/node_modules/**",
      "eslint.config.js",
      ".github/scripts/**",
      ".next/**",
    ],
  },
  eslint.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  pluginImportX.flatConfigs.recommended,
  pluginImportX.flatConfigs.typescript,
  pluginPromise.configs["flat/recommended"],
  reactHooks.configs["recommended-latest"],
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      parser,
      parserOptions: {
        allowDefaultProject: false,
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      sourceType: "module",
    },
    name: "base",
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs["core-web-vitals"].rules,
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "inline-type-imports",
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          custom: {
            match: false,
            regex: "^I[A-Z]",
          },
          format: ["PascalCase"],
          selector: "interface",
        },
        {
          format: ["camelCase"],
          leadingUnderscore: "forbid",
          modifiers: ["private"],
          selector: "memberLike",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-invalid-void-type": "error",
      "@typescript-eslint/no-meaningless-void-operator": "error",
      "@typescript-eslint/no-restricted-types": [
        "error",
        {
          types: {
            "React.FC": {
              message:
                "Avoid using React.FC. Prefer explicit type annotation for component props and return type.",
            },
            "React.FunctionComponent": {
              message:
                "Avoid using React.FunctionComponent. Prefer explicit type annotation for component props and return type.",
            },
          },
        },
      ],
      "@typescript-eslint/no-shadow": ["error"],
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
      "@typescript-eslint/no-unnecessary-condition": "warn",
      "@typescript-eslint/no-unnecessary-template-expression": "error",
      "@typescript-eslint/no-unnecessary-type-arguments": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-useless-constructor": "error",
      "@typescript-eslint/prefer-function-type": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/prefer-find": "error",
      "@typescript-eslint/prefer-includes": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "arrow-body-style": [
        "error",
        "as-needed",
        {
          requireReturnForObjectLiteral: false,
        },
      ],
      "import-x/extensions": [
        "warn",
        "never",
        {
          ignorePackages: true,
          pattern: {
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
            "d.ts": "never",
          },
        },
      ],
      "import-x/no-commonjs": "warn",
      "import-x/no-named-as-default": "off",
      "import-x/no-self-import": "error",
      "import-x/no-useless-path-segments": "error",
      "import-x/order": [
        "error",
        {
          alphabetize: {
            caseInsensitive: true,
            order: "asc",
          },
          groups: ["builtin", "external", "internal", "parent", "sibling"],
          "newlines-between": "never",
          pathGroups: [
            {
              group: "parent",
              pattern: "{.,..}/**//context/**",
              position: "before",
            },
          ],
        },
      ],
      "import-x/prefer-default-export": "off",
      "import-x/newline-after-import": [
        "error",
        {
          count: 1,
          considerComments: true,
        },
      ],
      "no-nested-ternary": "error",
      "no-unneeded-ternary": "error",
      "promise/prefer-await-to-callbacks": "error",
      "promise/prefer-await-to-then": "error",
      "sort-imports": [
        "warn",
        {
          allowSeparatedGroups: true,
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        },
      ],
    },
  },
  // React files
  {
    files: ["**/*.{jsx,tsx}"],
    name: "React",
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react/hook-use-state": "error",
      "react/button-has-type": "error",
      "react/function-component-definition": "off",
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-curly-brace-presence": ["error", "never"],
      "react/jsx-fragments": ["error", "syntax"],
      "react/jsx-no-leaked-render": "error",
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: false,
          ignoreCase: true,
          noSortAlphabetically: false,
          reservedFirst: false,
          shorthandFirst: false,
        },
      ],
      "react/no-array-index-key": "error",
      "react/self-closing-comp": "error",
    },
  },
  // Keep Prettier last so it won't fight with ESLint
  {
    rules: { ...eslintConfigPrettier.rules },
  }
);
