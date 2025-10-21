# Site Institucional GTIT

Um site institucional profissional, dinâmico e elegante, desenvolvido com React e Spring Boot.

## Estrutura do Projeto

O projeto está dividido em duas partes principais:

- **Frontend**: Desenvolvido com React, TypeScript e várias bibliotecas modernas.
- **Backend**: Desenvolvido com Java e Spring Boot.

## Tecnologias Utilizadas

### Frontend
- React com TypeScript
- React Router para navegação
- Framer Motion para animações
- Tailwind CSS para estilização
- Axios para requisições HTTP
- React Hook Form para formulários
- React Icons

### Backend
- Java 17
- Spring Boot 3.x
- Spring Data JPA
- PostgreSQL
- Maven

## Funcionalidades Implementadas

- **Layout Responsivo**: Site totalmente adaptativo para desktop e dispositivos móveis
- **Navegação Suave**: Transições de página fluidas e animações de elementos
- **Design Elegante**: Interface limpa e profissional
- **API Restful**: Backend com endpoints bem estruturados
- **Banco de Dados**: Persistência de dados com PostgreSQL
- **Formulário de Contato**: Sistema de envio de mensagens

## Pré-requisitos

- Node.js (v18+)
- Java Development Kit (JDK) 17+
- PostgreSQL

## Instalação e Execução

### Método Rápido (Recomendado)

Execute o arquivo `start-dev.bat` na raiz do projeto para:
- Configurar o banco de dados
- Iniciar o backend na porta 8080
- Iniciar o frontend na porta 5173 (ou próxima disponível)

### Instalação Manual

#### Frontend

1. Navegue até a pasta do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

O frontend estará disponível em [http://localhost:5173](http://localhost:5173) (ou próxima porta disponível).

#### Backend

1. Configure o banco de dados:
   - Execute o arquivo `setup-database.bat` na raiz do projeto, ou
   - Crie manualmente um banco de dados PostgreSQL chamado `site_institucional`

2. Navegue até a pasta do backend:
```bash
cd backend
```

3. Execute o projeto usando Maven:
```bash
./mvnw spring-boot:run
```

O backend estará disponível em [http://localhost:8080](http://localhost:8080).

## Estrutura de Páginas

- **Home**: Página inicial com apresentação dos principais serviços/produtos.
- **Sobre Nós**: Apresentação da empresa, missão, valores e equipa.
- **Serviços/Produtos**: Páginas detalhadas para cada serviço/produto oferecido.
- **Contacto**: Formulário de contacto e informações de contacto.

## Funcionalidades

- Design responsivo para todos os dispositivos
- Animações suaves para melhor experiência do usuário
- Formulário de contacto funcional
- API RESTful para gerenciar dados
- Carregamento rápido e otimizado

## Deployment

### Frontend
```bash
npm run build
```

### Backend
```bash
./mvnw clean package -Pprod
```

## Contribuição

Para contribuir com este projeto, por favor siga os passos abaixo:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'Add some amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request
