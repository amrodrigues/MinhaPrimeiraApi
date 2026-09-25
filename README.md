# Gerenciamento de Produtos (.NET 8 + Angular)

## Descrição

Aplicação full?stack desenvolvida para o gerenciamento de produtos, com operações completas de CRUD (Criar, Ler, Atualizar e Deletar). O projeto utiliza Angular no front?end (com componentes standalone) e .NET 8 Web API com Entity Framework Core e SQLite no back?end.

## Pré?requisitos

Antes de iniciar, certifique?se de ter instalado em sua máquina:

- Node.js (versão LTS recomendada) e npm
- .NET 8 SDK
- Visual Studio Code (ou Visual Studio)

## Instalação

Siga as instruções abaixo para instalar o projeto, incluindo quaisquer pré-requisitos.

## Como executar o projeto localmente

1. **Backend (.NET 8)**

   Abra a pasta raiz do back?end no terminal ou no Visual Studio Code e execute:

   ```bash
   dotnet restore
   dotnet build
   dotnet run
   ```
   A API ficará disponível nas portas configuradas (ver `Properties/launchSettings.json`). Em ambientes de desenvolvimento costuma ser algo como `https://localhost:7294` ou `https://localhost:5001`.

2. **Front?end (Angular)**

   Abra a pasta do front?end `Frontend/frontend` no terminal ou no VS Code e execute:

   ```bash
   npm install
   npm start
   ```
   (ou use `ng serve` / `npm run dev` conforme o projeto)

   Abra o navegador em `http://localhost:4200`. Verifique se o serviço Angular aponta para a URL correta da API (.NET).

### Dicas

- Se o front-end e o backend estiverem em portas diferentes, configure um _proxy_ (ex.: `proxy.conf.json`, `vite.config.js` ou `package.json`) para evitar problemas de CORS durante o desenvolvimento.
- Extensões úteis no VS Code: _Debugger for Chrome_, _Live Server_, _ESLint_.

## Funcionalidades

- Listagem em tempo real dos produtos carregados do SQLite.
- Busca por ID de produto.
- Cadastro de novos produtos com validação de nome e preço.
- Edição inline com atualização imediata da interface e persistência no banco.
- Exclusão de produtos.

## Contribuição

[Instruções para contribuir com o projeto, incluindo diretrizes para submissão de issues ou pull requests.]

## Licença

Projeto de uso livre para fins educacionais e portfólio.

## Contato

[Insira informações de contato ou o link do repositório/maintainer aqui.]

### Mudanças Realizadas:

1. **Estrutura das Seções**: Adicionadas cabeçalhos para definir claramente as seções e melhorar a legibilidade.
2. **Formatação**: Uso de marcadores e texto em negrito para comandos a fim de realçar a clareza.
3. **Consistência**: Garantido o uso consistente da linguagem e formatação em todo o documento.
4. **Adicionado Contexto**: Inclusão de espaços reservados para seções como Descrição, Instalação, Uso, Contribuição, Licença e Contato, para fornecer uma estrutura de README completa.
5. **Novas Funcionalidades**: Inclusão de uma seção detalhando as funcionalidades do projeto para melhor entendimento do que a aplicação oferece.

Sinta-se à vontade para preencher os espaços reservados com informações relevantes específicas para o seu projeto.
