module.exports = {
  types: [
    { value: "✨ feat", name: "✨ feat:     Nova funcionalidade" },
    { value: "🐛 fix", name: "🐛 fix:      Correção de bug" },
    { value: "🎨 style", name: "🎨 style:    Formatação / estilo de código" },
    { value: "♻️ refactor", name: "♻️ refactor:  Refatoração de código" },
    { value: "⚡ perf", name: "⚡ perf:     Melhoria de performance" },
    { value: "✅ test", name: "✅ test:     Adicionando testes" },
    { value: "📝 docs", name: "📝 docs:     Mudanças na documentação" },
    {
      value: "🛠️ build",
      name: "🛠️ build:     Alterações de dependências / Configurações de build",
    },
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
}
