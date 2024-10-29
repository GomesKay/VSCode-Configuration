<h1 align="center">Minha Configuração do VSCode</h1>

<img style="max-width: 600px; width: 100%;" src="https://github.com/user-attachments/assets/1627d157-c178-403f-a510-18de5fb44fd2" alt="Mario-Programming" />

## ⚙️ Back-end

| Comandos | Descrição | Por que usar? |
| --- | --- | --- |
| `npm init -y` | Faz a criação do _package.json_ | Inicializa o projeto rapidamente com as configurações padrão |
| `npm i typescript -D` | Instala o TypeScript | Adiciona TypeScript como dependência de desenvolvimento |
| `npx tsc -init` | Faz a criação do _tsconfig.json_ | Configura as opções de compilação do TypeScript |
| `npm i @types/node tsx -D` | Adiciona os tipos do Node.js e o suporte para TypeScript | Garante a tipagem do Node.js no TypeScript e permite executar arquivos `.ts` diretamente |
| `npm i fastify` | Instalação do Fastify | Framework rápido e eficiente para criar APIs com foco em performance |
| `npm i -D --save-exact @biomejs/biome` | Instalação do Biome | Formatador de código, linter e ferramenta de análise rápida |

### Configuração do _tsconfig.json_
> [!Note]
> Consulte a [documentação oficial do tsconfig/bases](https://github.com/tsconfig/bases?tab=readme-ov-file) para mais detalhes.

### Script no _package.json_

```
"dev": "tsx watch src/http/server.ts"
```

### Configuração do _biome.json_

```
{
  "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
  "organizeImports": {
    "enabled": true
  },
  "formatter": {
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 80
  },
  "javascript": {
    "formatter": {
      "arrowParentheses": "asNeeded",
      "jsxQuoteStyle": "double",
      "quoteStyle": "double",
      "semicolons": "asNeeded",
      "trailingCommas": "es5"
    }
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "files": {
    "ignore": ["node_modules"]
  }
}
```

---

## 💻 Front-end

| Comandos | Descrição | Por que usar? |
| --- | --- | --- |
| `npm create vite@latest` | Faz a criação da template | Inicializa o projeto Vite com uma configuração padrão |
| `npm install` | Instalação das dependências | Baixa todas as dependências listadas no _package.json_ |
| `npm install -D tailwindcss postcss autoprefixer` | Instala o TailwindCSS e suas ferramentas | Adiciona TailwindCSS, PostCSS e Autoprefixer como dependências de desenvolvimento |
| `npx tailwindcss init -p` | Cria os arquivos de configuração do TailwindCSS e PostCSS | Gera o arquivo _tailwind.config.js_ e _postcss.config.js_ para personalizar as configurações do Tailwind |
| `npm install -D prettier prettier-plugin-tailwindcss` | Instala o Prettier e o plugin TailwindCSS para Prettier | Prettier formata o código, enquanto o plugin organiza as classes do TailwindCSS automaticamente em uma ordem específica |

### TailwindCSS

> [!NOTE]
> Consulte a [documentação oficial do TailwindCSS](https://tailwindcss.com/docs/guides/vite) para mais detalhes.

> [!NOTE]
> Consulte a [documentação oficial do TailwindCSS + Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) para mais detalhes.

### Configuração do _.prettierrc_

```
{
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "printWidth": 80,
  "endOfLine": "lf",
  "bracketSpacing": true,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```
