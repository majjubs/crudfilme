# 🎬 FilmeCRUD

FilmeCRUD é uma aplicação web simples para gerenciar um cadastro de filmes. Com ela, você pode adicionar, editar e excluir filmes, além de visualizar uma lista de filmes cadastrados. O projeto foi desenvolvido utilizando React e Bootstrap para criar uma interface moderna e responsiva.

## 📋 Funcionalidades

- Adicionar novos filmes com título, gênero e diretor.
- Editar informações de filmes já cadastrados.
- Excluir filmes da lista.
- Persistência de dados no `localStorage` do navegador.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Bootstrap**: Framework CSS para estilização e responsividade.
- **React-Bootstrap**: Componentes React baseados no Bootstrap.
- **localStorage**: Para armazenamento local dos dados.

## 🚀 Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passos para rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/filmecrud.git
   cd filmecrud

filmecrud/
├── public/
│   └── index.html          # Arquivo HTML principal
├── src/
│   ├── components/
│   │   ├── MovieForm.js    # Formulário para adicionar/editar filmes
│   │   ├── MovieItem.js    # Componente para exibir um filme na tabela
│   │   └── MovieTable.js   # Tabela para listar os filmes
│   ├── services/
│   │   └── localStorageService.js # Serviço para manipular o localStorage
│   ├── App.js              # Componente principal da aplicação
│   ├── app.css             # Estilos personalizados
│   └── index.js            # Ponto de entrada da aplicação
├── package.json            # Configuração do projeto e dependências
└── README.md               # Documentação do projeto
