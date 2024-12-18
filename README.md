# XPTO

Repositório criado para o xxxx

### Pré-requisitos

- **[Node.JS](http://nodejs.org/download/)** - Versão 20 ou superior;

### Pacotes do projeto:

- [Cypress](https://www.cypress.io/)
- [mustache](https://www.npmjs.com/package/mustache)
- [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter)

### Instalação

1. Baixe o projeto e vá até a pasta do projeto:

   ```sh
   $ cd <nome_repositorio>/
   ```

2. Informe o comando abaixo para realizar a instalação das dependências:

   ```sh
   $ npm install
   ```

## Configuração

**Abaixo temos a estrutura básica do projeto (por pastas):**

```bash

├── .github
│   ├── templates
│   │   ├── summary.md (modelo de sumário para integração com Github Actions)
│   ├── worflows
│   │   ├── main.yml
│   │   ├── workflow.yml
├── cypress
│   ├── e2e (cenários web)
│   │   ├── wikipedia
│   |   │   ├── home.cy.js
│   ├── fixture (massa de dados de stubs e spies)
│   ├── pages (mapeamento de elementos de página)
│   │   ├── home-page.js
│   │   ├── search-result-page.js
│   ├── support
│   │   ├── commands.js (custom commands)
│   │   ├── e2e.js (configuração dos testes e2e)
│   │   ├── test-summary.js (cria sumários por navegador - caso ocorra problemas no Github Actions)
├── .gitignore
├── cypress.config.js (configurações do Cypress)
├── package.json (dependências e scripts disponíveis para execução do projeto)
├── README.md
```

## Executando os testes

1. Para rodar `TODOS` os testes, basta executar o seguinte comando:

   ```sh
   $ npm run cypress:run
   ```

## Contribuições

-
