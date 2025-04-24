# CRUD Node.js

Um projeto simples de CRUD (Create, Read, Update, Delete) usando Node.js, Express e MongoDB com Mongoose.

## Rotas

-   `GET /usuarios` — Lista todos os usuários
-   `GET /usuarios/:id` — Busca um usuário por ID
-   `POST /usuarios` — Cria um novo usuário
-   `PUT /usuarios/:id` — Atualiza um usuário existente
-   `DELETE /usuarios/:id` — Remove um usuário

## Estrutura

-   `index.js` — Arquivo principal da aplicação
-   `models/Usuario.js` — Schema do usuário

## Requisitos

-   Node.js >= 14
-   MongoDB (local ou Atlas)
-   npm

## Instalação

1. Clone o repositório:

    ```bash
    git clone <url-do-repositorio>
    cd crud-nodejs
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure o arquivo `.env`:
    ```
    PORT=3000
    MONGO_URL=<sua-string-de-conexao-mongodb>
    ```

## Uso

Para rodar o servidor em modo desenvolvimento:

```bash
npm run dev
```

A API estará disponível em `http://localhost:3000`.

## Licença

MIT
