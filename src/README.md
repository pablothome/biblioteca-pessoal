## Biblioteca Pessoal

## Autor

## Pablo Thomé de Lima



## Descrição

Este projeto consiste em um sistema simples de gerenciamento de uma biblioteca pessoal desenvolvido em **TypeScript**.

A aplicação permite cadastrar, remover, buscar e analisar livros utilizando **arrays paralelos**, onde cada índice representa um livro.

O objetivo do projeto é praticar:

* Tipagem com TypeScript (`strict`)
* Manipulação de arrays
* Métodos funcionais (`map`, `filter`, `reduce`, `forEach`)
* Organização de código
* Controle de fluxo

---

## Tecnologias utilizadas

* Node.js 18+
* TypeScript 5+
* JavaScript (ES2020)

---

## Estrutura do projeto

```
biblioteca-pessoal/
├── src/
│   └── index.ts
├── dist/
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

##  Como executar o projeto

### 1. Clonar o repositório

```
git clone <link-do-repositorio>
cd biblioteca-pessoal
```

### 2. Instalar dependências

```
npm install
```

### 3. Compilar o projeto

```
npm run build
```

### 4. Executar

```
npm run dev
```

---

##  Funcionalidades

## Cadastro e remoção

* Adicionar novos livros
* Remover livros por índice

### Consulta

* Exibir biblioteca completa
* Buscar livros por título
* Listar livros por autor

### Status de leitura

* Marcar livro como lido com avaliação (1 a 5)
* Listar livros lidos
* Listar livros pendentes

### Estatísticas

* Total de livros
* Total de livros lidos
* Percentual de leitura
* Média de avaliações
* Livro com maior avaliação
* Total de páginas lidas

### Classificação

* Agrupamento de livros por década

---

## Conceitos aplicados

* Arrays paralelos sincronizados por índice
* Funções com tipagem explícita
* Métodos de array:

  * `forEach`
  * `filter`
  * `map`
  * `reduce`
* Validação de dados de entrada
* Template literals para saída formatada

---

## Exemplo de saída

```
=== MINHA BIBLIOTECA ===
1. "Livro do Desassossego" (1934) - Fernando Pessoa - 528 pag - LIDO (5/5)
2. "Clean Code" (2008) - Robert C. Martin - 464 pag - LIDO (4/5)
3. "1984" (1949) - George Orwell - 328 pag - PENDENTE

=== ESTATÍSTICAS ===
Total de livros: 5
Livros lidos: 3 (60.00%)
Média das avaliações: 4.67
Livro melhor avaliado: Livro do Desassossego
Total de páginas lidas: 1584
```

---

## Observações

 O projeto utiliza arrays paralelos, portanto é essencial manter a sincronização entre os dados.
 As validações garantem integridade dos dados (índices e avaliações).
 O sistema é executado via terminal e não possui interface gráfica.

---

## Status do projeto

 Concluído
 Projeto acadêmico para prática de TypeScript

---
