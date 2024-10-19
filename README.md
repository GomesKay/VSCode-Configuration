<h1 align="center">Minha Configuração do VSCode</h1>

<img style="max-width: 600px; width: 100%;" src="https://github.com/user-attachments/assets/1627d157-c178-403f-a510-18de5fb44fd2" alt="Mario-Programming" />

## ⚙️ Back-end

| Comandos | Descrição | Por que usar? |
| --- | --- | --- |
| `npm init -y` | Faz a criação do _package.json_ | Inicializa o projeto rapidamente com as configurações padrão |
| `npm i typescript -D` | Instala o TypeScript | Adiciona TypeScript como dependência de desenvolvimento |
| `npx tsc -init` | Faz a criação do _tsconfig.json_ | Configura as opções de compilação do TypeScript |
| `npm i @types/node tsx -D` | Adiciona os tipos do Node.js e o suporte para TypeScript | Garante a tipagem do Node.js no TypeScript e permite executar arquivos `.ts` diretamente |
| `npm i fastify` | Instalação do Fastify | Framework rápido e eficiente para criar APIs RESTful |

### Configuração do _tsconfig.json_
> [!Note]
> Consulte a [documentação oficial do tsconfig/bases](https://github.com/tsconfig/bases?tab=readme-ov-file) para mais detalhes.

### Script no _package.json_

```
"dev": "tsx watch src/http/server.ts"
```

---

## 💻 Front-end

| Comandos | Descrição | Por que usar? |
| --- | --- | --- |
| `npm create vite@latest` | Faz a criação da template | Inicializa o projeto Vite com uma configuração padrão |
| `npm install` | Instalação das dependências | Baixa todas as dependências listadas no _package.json_ |
