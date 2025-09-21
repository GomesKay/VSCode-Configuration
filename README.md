<h1 align="center">Minha Configuração do VSCode</h1>

<img style="max-width: 600px; width: 100%;" src="https://github.com/user-attachments/assets/1627d157-c178-403f-a510-18de5fb44fd2" alt="Mario-Programming" />

## ⚙️ Back-end

| Comandos | Descrição | Por que usar? |
| --- | --- | --- |
| `npm init -y` | Faz a criação do _package.json_ | Inicializa o projeto rapidamente com as configurações padrão |
| `npm i typescript -D` | Instala o TypeScript | Adiciona TypeScript como dependência de desenvolvimento |
| `npx tsc --init` | Faz a criação do _tsconfig.json_ | Configura as opções de compilação do TypeScript |
| `npm i @types/node tsx -D` | Adiciona os tipos do Node.js e o suporte para TypeScript | Garante a tipagem do Node.js no TypeScript e permite executar arquivos `.ts` diretamente |

### Configuração do _tsconfig.json_
> [!Note]
> Consulte a [documentação oficial do tsconfig/bases](https://github.com/tsconfig/bases?tab=readme-ov-file) para mais detalhes.

### Scripts no _package.json_

```
"scripts": {
  "dev": "tsx watch src/server.ts",
  "lint": "eslint . --ext .ts",
  "lint:fix": "eslint . --ext .ts --fix"
},
```

---

## 💻 Front-end

| Comandos | Descrição | Por que usar? |
| --- | --- | --- |
| `npm create vite@latest` | Faz a criação da template | Inicializa o projeto Vite com uma configuração padrão |
| `npm install` | Instalação das dependências | Baixa todas as dependências listadas no _package.json_ |

### Scripts no _package.json_

```
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint . --ext .ts,.tsx",
  "lint:fix": "eslint . --ext .ts,.tsx --fix",
  "preview": "vite preview",
  "prettier": "prettier --write .",
  "prettier:check": "prettier --check ."
},
```

## 🖥️ VSCode

```
{
  // Tailwind
  "tailwind-fold.autoFold": false,

  // Tira o Mini Mapa do VSCode
  "editor.minimap.enabled": false,

  // Inicia com um Novo Arquivo no VSCode
  "workbench.startupEditor": "newUntitledFile",

  // Mostra o caminho das Pastas na Aplicação
  "explorer.compactFolders": false,

  // PrismaORM
  "[prisma]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "Prisma.prisma"
  },

  // Unir Arquivos de Configuração
  "explorer.fileNesting.enabled": true,
  "explorer.fileNesting.patterns": {
    "package.json": ".eslint*, eslint*, .prettier*, prettier*, tsconfig*, vite*, package-lock*",
    "tailwind.config*": "tailwind.config*, postcss.config*",
    ".env.local": ".env*",
    ".env": ".env*"
  },

  // Terminal
  "terminal.integrated.fontSize": 14,
  "terminal.integrated.fontFamily": "JetBrainsMono Nerd Font",
  "terminal.integrated.env.windows": {},

  // APC (Interface do VSCode)
  "apc.font.family": "Inter",
  "apc.listRow": {
    "height": 24
  },
  "window.commandCenter": false,
  "workbench.layoutControl.enabled": false,

  // Tema e Icons do VSCode
  "workbench.iconTheme": "symbols",
  "workbench.colorTheme": "Rosé Pine",
  "workbench.productIconTheme": "fluent-icons",
  "symbols.hidesExplorerArrows": false,
  "symbols.folders.associations": {
    "controllers": "folder-sky"
  },
  "symbols.files.associations": {
    "*.module.ts": "nest",
    "*.service.ts": "nest-service",
    "prisma.module.ts": "nest",
    "prisma.service.ts": "nest-service"
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
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "eslint.enable": true,
  "eslint.options": {
    "extensions": [".js", ".jsx", ".ts", ".tsx"]
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "prettier.semi": false,
  "prettier.singleQuote": false,
  "prettier.tabWidth": 2,
  "prettier.printWidth": 80,
  "prettier.proseWrap": "preserve",
  "prettier.endOfLine": "auto",
  "prettier.bracketSpacing": true
}
```
