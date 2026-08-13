import {
  BracketsPurple,
  BracketsYellow,
  Commitlint,
  Eslint,
  FolderOrangeCode,
  FolderUtils,
  FolderVSCode,
  Markdown,
  Node,
  Prettier,
  TypeScript,
} from "@react-symbols/icons"
import type { JSX } from "react"

export interface Item {
  name: string
  children?: string[]
  icon?: JSX.Element
  content?: string
}

const NOT_IMPLEMENTED = "Não implementado"

export const items: Record<string, Item> = {
  crm: {
    name: "CRM",
    children: ["vscode", "src", "package", "readme"],
  },
  vscode: {
    name: ".vscode",
    children: ["settings.json"],
    icon: <FolderVSCode className="size-5" />,
  },
  "settings.json": {
    name: "settings.json",
    icon: <BracketsYellow className="size-5" />,
    content: `{
  // Tailwind
  "tailwind-fold.autoFold": false,

  // Tira o Mini Mapa do VSCode
  "editor.minimap.enabled": false,

  // Inicia com um Novo Arquivo no VSCode
  "workbench.startupEditor": "newUntitledFile",

  // Mostra o caminho das Pastas na Aplicação
  "explorer.compactFolders": false,

  // Markdown Preview Enhanced
  "markdown-preview-enhanced.previewTheme": "none.css",

  // Unir Arquivos de Configuração
  "explorer.fileNesting.enabled": true,
  "explorer.fileNesting.patterns": {
    "package.json": "eslint*, .eslint*, prettier*, .prettier*, .editor*, .cz-config*, package-lock*, tsconfig*, next*, vite*, tailwind*, postcss*, .npmrc, yarn*, .yarn*",
    ".env": ".env*",
  },

  // Terminal
  "terminal.integrated.fontSize": 14,
  "terminal.integrated.fontFamily": "JetBrainsMono Nerd Font",

  // APC (Interface do VSCode)
  "apc.font.family": "Inter",
  "apc.listRow": {
    "height": 24,
  },
  "window.commandCenter": false,
  "workbench.layoutControl.enabled": false,
  "workbench.editor.empty.hint": "hidden",

  // Temas e Icons do VSCode
  "workbench.colorTheme": "Min Dark",
  "workbench.iconTheme": "symbols",
  "workbench.productIconTheme": "fluent-icons",
  "symbols.hidesExplorerArrows": false,
  "symbols.folders.associations": {
    "store": "folder-yellow-code",
    "(private)": "folder-auth",
    "(pages)": "folder-sky-code",
    "(public)": "folder-purple-outline",
  },

  // Configuração do Editor de Código
  "editor.tabSize": 2,
  "editor.fontSize": 14,
  "editor.lineHeight": 20,
  "editor.fontFamily": "JetBrains Mono",
  "editor.rulers": [80, 120],

  // ESLint & Prettier
  "files.autoSave": "afterDelay",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
  },
  "eslint.enable": true,
  "eslint.options": {
    "extensions": [".js", ".jsx", ".ts", ".tsx"],
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
  ],
}`,
  },
  src: {
    name: "src",
    children: ["lib", "index.css"],
    icon: <FolderOrangeCode className="size-5" />,
  },
  lib: {
    name: "lib",
    children: ["utils.ts"],
    icon: <FolderUtils className="size-5" />,
  },
  "utils.ts": {
    name: "utils.ts",
    icon: <TypeScript className="size-5" />,
    content: `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`,
  },
  "index.css": {
    name: "index.css",
    icon: <BracketsPurple className="size-5" />,
    content: `@utility ctn {
  @apply relative mx-auto;
}`,
  },
  package: {
    name: "package.json",
    children: [
      "package.json",
      "eslint.config.js",
      ".prettierrc",
      ".cz-config.cjs",
    ],
    icon: <Node className="size-5" />,
  },
  "package.json": {
    name: "package.json",
    icon: <Node className="size-5" />,
    content: `{
  "scripts": {
    "lint": "eslint . --fix",
    "prettier": "prettier --write .",
    "commit": "git add . && cz"
  },
  "config": {
    "commitizen": {
      "path": "cz-customizable"
    },
    "cz-customizable": {
      "config": ".cz-config.cjs"
    }
  }
}`,
  },
  "eslint.config.js": {
    name: "eslint.config.js",
    icon: <Eslint className="size-5" />,
    content: `import js from "@eslint/js"
import { defineConfig } from "eslint/config"
import prettierConfig from "eslint-config-prettier"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig([
  { ignores: ["dist", "build", "coverage", "node_modules"] },

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },

  tseslint.configs.recommended,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },

  prettierConfig,
])`,
  },
  ".prettierrc": {
    name: ".prettierrc",
    icon: <Prettier className="size-5" />,
    content: `{
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "printWidth": 80,
  "endOfLine": "lf",
  "bracketSpacing": true,
  "plugins": ["prettier-plugin-tailwindcss"]
}`,
  },
  ".cz-config.cjs": {
    name: ".cz-config.cjs",
    icon: <Commitlint className="size-5" />,
    content: `module.exports = {
  types: [
    { value: "✨ feat", name: "✨ feat:     Nova funcionalidade" },
    { value: "🐛 fix", name: "🐛 fix:      Correção de bug" },
    { value: "🎨 style", name: "🎨 style:    Formatação / estilo de código" },
    { value: "♻️ refactor", name: "♻️ refactor:  Refatoração de código" },
    { value: "⚡ perf", name: "⚡ perf:     Melhoria de performance" },
    { value: "✅ test", name: "✅ test:     Adicionando testes" },
    { value: "📝 docs", name: "📝 docs:     Mudanças na documentação" },
    { value: "🛠️ build", name: "🛠️ build:     Alterações de dependências / Configurações de build" },
    { value: "🔧 chore", name: "🔧 chore:    Tarefas de manutenção" },
    { value: "👷 ci", name: "👷 ci:       Alterações em CI/CD" },
  ],

  scopes: [
    "auth",
    "api",
    "database",
    "components",
    "styles",
    "config",
    "pages",
    "routes",
    "services",
    "docs",
    "test",
    "ui",
  ],

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],

  messages: {
    type: "Selecione o tipo de commit:",
    scope: "Qual o escopo dessa mudança?",
    subject: "Escreva uma descrição curta:",
    body: "Descrição mais detalhada (opcional):",
    breaking: "Mudanças que quebram compatibilidade (opcional):",
    footer: "Issues relacionadas (opcional):",
    confirmCommit: "Confirma esse commit?",
  },
}`,
  },
  readme: {
    name: "README.md",
    icon: <Markdown className="size-5" />,
    content: NOT_IMPLEMENTED,
  },
}
