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
paginas.push(528, 464, 328, 592, 696);
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

function buscarPorTitulo(termo: string): number[] {
  const resultados: number[] = [];

  titulos.forEach((titulo, i) => {
    if (titulo.toLowerCase().includes(termo.toLowerCase())) {
      resultados.push(i);
    }
  });

  return resultados;
}

function listarPorAutor(autor: string): string[] {
  return titulos
    .map((titulo, i) => ({ titulo, autor: autores[i] }))
    .filter(livro => livro.autor === autor)
    .map(livro => livro.titulo)
}

console.log('\n=== TESTE BUSCAS ===');

// buscar por título
const encontrados = buscarPorTitulo('code');

console.log('Busca por "code":');
encontrados.forEach(i => {
  console.log(`- ${titulos[i]}`);
});

// listar por autor
console.log('\nLivros de Robert C. Martin:');
const livrosAutor = listarPorAutor('Fernando Pessoa');

livrosAutor.forEach(titulo => {
  console.log(`- ${titulo}`);
});

function marcarComoLido(indice: number, avaliaco: number): void {

  if (indice < 0 || indice >= titulos.length) {
    console.log(`Indice inválido!`)
    return;
  }

  if (avaliaco < 1 || avaliaco > 5) {
    console.log(`Avaliação deve ser entre 1 e 5`)
    return
  }

  lido[indice] = true
  avaliacoes[indice] = avaliaco

  console.log(`Livro "${titulos[indice]}" marcado como lido (${avaliaco}/5)`)
}

function listarLidos(): string[] {
  return titulos.filter((_, i) => lido[i])
}

function listarPendentes(): string[] {
  return titulos.filter((_, i) => !lido[i])
}

console.log('\n=== TESTE STATUS DE LEITURA ===');

// marcar livro como lido
marcarComoLido(2, 4); // escolhe um índice válido

// listar lidos
console.log('\nLivros lidos:');
listarLidos().forEach(t => console.log(`- ${t}`));

// listar pendentes
console.log('\nLivros pendentes:');
listarPendentes().forEach(t => console.log(`- ${t}`));

function totalLivros(): number {
  return titulos.length
}

function totalLidos(): number {
  return lido.filter(v => v).length
}

function percentualLidos(): number {
  return (totalLidos() / totalLivros()) * 100
}

function mediaAvaliacoes(): number {

  const avaliados = avaliacoes.filter(nota => nota > 0);

  const soma = avaliados.reduce((acc, nota) => acc + nota, 0);

  return avaliados.length ? soma / avaliados.length : 0;
}

function livroMaiorAvaliacao(): string {

  let maior = 0;
  let indice = -1;

  avaliacoes.forEach((nota, i) => {
    if (nota > maior) {
      maior = nota;
      indice = i;
    }
  });

  return indice >= 0 ? titulos[indice]! : 'Nenhum';
}

function totalPaginasLidas(): number {
  return paginas
    .filter((_, i) => lido[i])
    .reduce((acc, p) => acc + p, 0);
}


console.log('\n=== ESTATÍSTICAS ===');

console.log(`Total de livros: ${totalLivros()}`);
console.log(`Livros lidos: ${totalLidos()} (${percentualLidos().toFixed(2)}%)`);
console.log(`Média das avaliações: ${mediaAvaliacoes().toFixed(2)}`);
console.log(`Livro melhor avaliado: ${livroMaiorAvaliacao()}`);
console.log(`Total de páginas lidas: ${totalPaginasLidas()}`);

function exibirPorDecada(): void {
  console.log('\n=== POR DÉCADA ===');

  const decadas: { [key: string]: string[] } = {};

  titulos.forEach((titulo, i) => {
    const decada = Math.floor(anos[i]! / 10) * 10 + 's';

    if (!decadas[decada]) {
      decadas[decada] = [];
    }

    decadas[decada].push(titulo);
  });

  for (const decada in decadas) {
    console.log(`${decada}: ${decadas[decada]!.join(', ')}`);
  }
}

exibirPorDecada()

console.log('\n==============================');
console.log('📚 DEMONSTRAÇÃO COMPLETA');
console.log('==============================');

exibirBiblioteca();

console.log('\n--- TESTES ---');
adicionarLivro('Harry Potter', 'J.K. Rowling', 1997, 300);
removerLivro(1);
marcarComoLido(2, 4);

console.log('\n--- BUSCAS ---');
console.log(buscarPorTitulo('code'));
console.log(listarPorAutor('Robert C. Martin'));

console.log('\n--- STATUS ---');
console.log('Lidos:', listarLidos());
console.log('Pendentes:', listarPendentes());

console.log('\n--- ESTATÍSTICAS ---');
console.log(`Total: ${totalLivros()}`);
console.log(`Lidos: ${totalLidos()} (${percentualLidos().toFixed(2)}%)`);
console.log(`Média: ${mediaAvaliacoes().toFixed(2)}`);
console.log(`Melhor: ${livroMaiorAvaliacao()}`);
console.log(`Páginas: ${totalPaginasLidas()}`);

exibirPorDecada();

