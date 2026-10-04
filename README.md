# 💸 DT Money

Aplicação web para controle de finanças pessoais. Cadastre entradas e saídas, busque transações e acompanhe o resumo do seu saldo em tempo real.

## ✨ Funcionalidades

- Listagem de transações com descrição, categoria, valor e data formatados (pt-BR)
- Cadastro de nova transação (entrada ou saída) em modal, com validação de formulário
- Busca de transações por texto
- Resumo com total de entradas, saídas e saldo
- Atualização do contexto global sem re-renderizações desnecessárias (`use-context-selector`)

## 🛠️ Tecnologias

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [styled-components](https://styled-components.com/)
- [Radix UI](https://www.radix-ui.com/) (Dialog e RadioGroup)
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- [Axios](https://axios-http.com/)
- [use-context-selector](https://github.com/dai-shi/use-context-selector)
- [Phosphor Icons](https://phosphoricons.com/)
- [json-server](https://github.com/typicode/json-server) (API fake)
- ESLint

## 📁 Estrutura

```
src/
├── components/   # Header, Summary, NewTransactionModal
├── contexts/     # TransactionsContext e TransactionsProvider
├── hooks/        # useSummary
├── lib/          # instância do axios
├── pages/        # Transactions (e SearchForm)
├── styles/       # tema e estilos globais
└── utils/        # formatadores de data e moeda
```

## 🚀 Como executar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
# instalar dependências
npm install

# terminal 1: API fake em http://localhost:3333
npm run dev:server

# terminal 2: aplicação em http://localhost:5173
npm run dev
```

> A API precisa estar rodando para a aplicação carregar e salvar transações. Os dados ficam no arquivo `server.json`.

## 📜 Scripts

| Script               | Descrição                                   |
| -------------------- | ------------------------------------------- |
| `npm run dev`        | Inicia o servidor de desenvolvimento (Vite) |
| `npm run dev:server` | Inicia a API fake com json-server (porta 3333) |
| `npm run build`      | Verifica os tipos e gera o build de produção |
| `npm run preview`    | Visualiza o build localmente                |
| `npm run lint`       | Executa o ESLint                            |

## 🔌 API

Endpoint base: `http://localhost:3333`

| Método | Rota            | Descrição                                       |
| ------ | --------------- | ----------------------------------------------- |
| GET    | `/transactions` | Lista transações (`_sort=-createdAt` e `description:contains=texto` para busca) |
| POST   | `/transactions` | Cria uma transação                              |

Formato de uma transação:

```json
{
  "id": "1",
  "description": "Desenvolvimento de site",
  "type": "income",
  "category": "Venda",
  "price": 14000,
  "createdAt": "2022-07-29T19:36:44.505Z"
}
```

`type` pode ser `income` (entrada) ou `outcome` (saída).
