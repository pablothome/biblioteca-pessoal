const titulos: string[] = [];
const autores: string[] = [];
const anos: number[] = [];
const paginas: number[] = [];
const lido: boolean[] = [];
const avaliacoes: number[] = [];

titulos.push('Livro do Desassossego', 'Clean Code', '1984', 'Crime e Castigo', 'A Divina Comédia');

autores.push(
  'Fernando Pessoa',
  'Robert C. Martin',
  'George Orwell',
  'Fiódor Dostoiévski',
  'Dante Alighieri'
);

anos.push(1934, 2008, 1949, 1866, 1472);
paginas.push(528, 464, 328,  592, 696);
lido.push(true, true, false, true, false);
avaliacoes.push(5, 4, 0, 5, 0);

function exibirBiblioteca(): void {
  console.log('\n=== MINHA BIBLIOTECA ===');

  titulos.forEach((titulo, i) => {
    const status = lido[i]
      ? `LIDO (${avaliacoes[i]}/5)`
      : 'PENDENTE';

    console.log(
      `${i + 1}. "${titulo}" (${anos[i]}) - ${autores[i]} - ${paginas[i]} pag - ${status}`
    );
  });
}

exibirBiblioteca();

function adicionarLivro(
  titulo: string,
  autor: string,
  ano: number,
  paginasLivro: number
): void {

  if (ano <= 0 || paginasLivro <= 0) {
    console.log('❌ Dados inválidos!');
    return;
  }

  titulos.push(titulo);
  autores.push(autor);
  anos.push(ano);
  paginas.push(paginasLivro);
  lido.push(false);
  avaliacoes.push(0);

  console.log(`✅ Livro "${titulo}" adicionado com sucesso!`);
}

function removerLivro(indice: number): void {

  if (indice < 0 || indice >= titulos.length) {
    console.log('❌ Índice inválido!');
    return;
  }

  const tituloRemovido = titulos[indice];

  titulos.splice(indice, 1);
  autores.splice(indice, 1);
  anos.splice(indice, 1);
  paginas.splice(indice, 1);
  lido.splice(indice, 1);
  avaliacoes.splice(indice, 1);

  console.log(`🗑️ Livro "${tituloRemovido}" removido!`);
}

console.log('\n=== TESTE CADASTRO / REMOÇÃO ===');

exibirBiblioteca();

// adicionar
adicionarLivro('Harry Potter', 'J.K. Rowling', 1997, 300);
adicionarLivro('Código Limpo 2', 'Robert C. Martin', 2020, 500);

// remover (ex: remove o terceiro livro)
removerLivro(2);

exibirBiblioteca();