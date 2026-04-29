# Biblioteca Pessoal

##  Autor

Pablo Thomé de Lima

---

##  Descrição

Este projeto consiste em um sistema de gerenciamento de uma biblioteca pessoal desenvolvido em **TypeScript**, executado no terminal com Node.js.

A aplicação utiliza **arrays paralelos** para armazenar os dados dos livros, onde cada índice representa um registro completo.

O objetivo do projeto é aplicar conceitos fundamentais de programação, incluindo:

- Tipagem estática com TypeScript (`strict`)
- Manipulação de arrays
- Métodos funcionais (`map`, `filter`, `reduce`, `forEach`)
- Organização e reutilização de código
- Controle de fluxo e validações

---

##  Tecnologias utilizadas

 - Node.js 18+
- TypeScript 5+

---

##  Estrutura do projeto


biblioteca-pessoal/
├── src/
│   └── index.ts
├── dist/
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```



###  Como executar o projeto

### 1. Clonar o repositório


git clone <link-do-repositorio>
cd biblioteca-pessoal


### 2. Instalar dependências


npm install


### 3. Compilar o projeto


npm run build


### 4. Executar a aplicação


npm run dev


---

##  Funcionalidades

###  Cadastro e remoção

 Adicionar novos livros
Remover livros por índice

###  Consulta e busca

Exibir todos os livros cadastrados
Buscar livros por título
Listar livros por autor

###  Controle de leitura

 Marcar livros como lidos com avaliação (1 a 5)
 Listar livros lidos
 Listar livros pendentes

###  Estatísticas

 Total de livros
 Total de livros lidos
 Percentual de leitura
 Média de avaliações (apenas livros lidos)
 Livro com maior avaliação
 Total de páginas lidas

###  Classificação

 Agrupamento de livros por década

---

##  Conceitos aplicados

 Arrays paralelos sincronizados por índice
 Funções com tipagem explícita
 Métodos de array:

   `forEach`
   `filter`
   `map`
   `reduce`
 Validação de dados
 Template literals para saída formatada

---

##  Exemplo de saída

=== MINHA BIBLIOTECA ===
1. "O Livro do Desassossego" (1982) - Fernando Pessoa - 528 pag - LIDO (5/5)
2. "Clean Code" (2008) - Robert C. Martin - 464 pag - LIDO (4/5)
3. "1984" (1949) - George Orwell - 328 pag - PENDENTE
4. "Crime e Castigo" (1866) - Fiódor Dostoiévski - 590 pag - LIDO (5/5)
5. "A Divina Comédia" (1321) - Dante Alighieri - 700 pag - PENDENTE

=== ESTATISTICAS ===
Total de livros: 5
Livros lidos: 3 (60.00%)
Media das avaliacoes: 4.67
Livro melhor avaliado: O Livro do Desassossego
Total de paginas lidas: 1582

=== POR DECADA ===
1320s: A Divina Comédia
1860s: Crime e Castigo
1940s: 1984
1980s: O Livro do Desassossego
2000s: Clean Code

---

## Observações

 O projeto utiliza arrays paralelos, portanto é essencial manter a sincronização entre os dados.
 Todas as funções possuem validações para evitar inconsistências.
 O sistema é executado via terminal (sem interface gráfica).

---

##  Status do projeto

 Concluído
 Projeto acadêmico desenvolvido para prática de TypeScript

---
