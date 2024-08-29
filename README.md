# Loja Virtual

## Descrição

Este é um projeto de loja virtual desenvolvido com React. O aplicativo permite a visualização, criação, atualização e exclusão de produtos. Os dados dos produtos são consumidos e manipulados através da [Platzi Fake Store API]([https://fakeapi.platzi.com/en/rest/products/]

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **React Router**: Biblioteca para gerenciamento de rotas.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **CSS**: Utilizado para estilização do site.

## Funcionalidades

- **Visualização de Produtos**: Lista todos os produtos disponíveis.
- **Criação de Produto**: Adiciona novos produtos ao catálogo.
- **Atualização de Produto**: Edita as informações dos produtos existentes.
- **Exclusão de Produto**: Remove produtos do catálogo.

## Requisitos

Antes de executar o projeto, certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.

## Instalação

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/Sheila724/ProvaPratica.git
   ```

2. **Navegue até o Diretório do Projeto**:
   ```bash
   cd nome-do-repositorio
   ```

3. **Instale as Dependências**:
   ```bash
   npm install
   # ou
   yarn install
   ```

4. **Configure a API**:
   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione a URL da sua API no arquivo `.env`:
     ```env
     REACT_APP_API_URL=[https://api.escuelajs.co/api/v1]
     ```

## Executar o Projeto

Para iniciar o servidor de desenvolvimento e visualizar o projeto no navegador:

```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

- **src/**: Contém os arquivos fonte do aplicativo.
  - **axio/**: Bibliotea para requisão HTTP
  - **components/**: Componentes reutilizáveis do React.
  - **Api/**: Funções para interação com a API.
  - **App.js**: Componente principal que define as rotas.
  - **index.js**: Ponto de entrada do aplicativo React.
  - **style/**: Arquivos de estilo CSS.

## Rotas

- **/**: Página inicial que lista todos os produtos.
- **/create**: Página para adicionar um novo produto.
- **/update/:id**: Página para atualizar um produto existente.
- **/delete/:id**: Endpoint para deletar um produto (geralmente chamado via API).

## Funcionalidades da API

- **GET `/posts`**: Obtém a lista de produtos.
- **GET `/posts/:id`**: Obtém detalhes de um produto específico.
- **POST `/posts`**: Cria um novo produto.
- **PUT `/posts/:id`**: Atualiza um produto existente.
- **DELETE `/posts/:id`**: Remove um produto.

## Contribuição

Sinta-se à vontade para contribuir para o projeto! Para isso:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção (`git checkout -b minha-feature`).
3. Faça suas alterações e adicione testes, se possível.
4. Envie um pull request para o branch principal.

## Contato

Para mais informações ou dúvidas, entre em contato com:

- **Nome**: Sheila Alves
- **Email**: sheilynhaalves@gmail.com
- **GitHub**: [Sheila724](https://github.com/Sheila724)
