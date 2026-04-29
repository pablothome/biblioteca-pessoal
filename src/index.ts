const titulos: string[] = [];
const autores: string[] = [];
const anos: number[] = [];
const paginas: number[] = [];
const lido: boolean[] = [];
const avaliacoes: number[] = [];



titulos.push('O Livro do Desassossego', 'Clean Code', '1984', 'Crime e Castigo', 'A Divina Comédia');

autores.push(
  'Fernando Pessoa',
  'Robert C. Martin',
  'George Orwell',
  'Fiódor Dostoiévski',
  'Dante Alighieri'
);

anos.push(1982, 2008, 1949, 1866, 1321);
paginas.push(528, 464, 328, 590, 700);
lido.push(true, true, false, true, false);
avaliacoes.push(5, 4, 0, 5, 0);



function exibirBiblioteca(): void {
  console.log('\n=== MINHA BIBLIOTECA ===');

  titulos.forEach((titulo, i) => {
    const ano = anos[i];
    const autor = autores[i];
    const pagina = paginas[i];
    const foiLido = lido[i];
    const avaliacao = avaliacoes[i];

    if (
      ano === undefined ||
      autor === undefined ||
      pagina === undefined ||
      foiLido === undefined ||
      avaliacao === undefined
    ) return;

    const status = foiLido
      ? `LIDO (${avaliacao}/5)`
      : 'PENDENTE';

    console.log(
      `${i + 1}. "${titulo}" (${ano}) - ${autor} - ${pagina} pag - ${status}`
    );
  });
}


//CADASTRO / REMOÇÃO


function adicionarLivro(
  titulo: string,
  autor: string,
  ano: number,
  paginasLivro: number
): void {
  if (ano <= 0 || paginasLivro <= 0) {
    console.log('Dados inválidos!');
    return;
  }

  titulos.push(titulo);
  autores.push(autor);
  anos.push(ano);
  paginas.push(paginasLivro);
  lido.push(false);
  avaliacoes.push(0);
}

function removerLivro(indice: number): void {
  if (indice < 0 || indice >= titulos.length) {
    console.log('Índice inválido!');
    return;
  }

  titulos.splice(indice, 1);
  autores.splice(indice, 1);
  anos.splice(indice, 1);
  paginas.splice(indice, 1);
  lido.splice(indice, 1);
  avaliacoes.splice(indice, 1);
}


// BUSCAS


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
    .map(livro => livro.titulo);
}


//STATUS DE LEITURA


function marcarComoLido(indice: number, avaliacao: number): void {
  if (indice < 0 || indice >= titulos.length) return;

  if (avaliacao < 1 || avaliacao > 5) return;

  lido[indice] = true;
  avaliacoes[indice] = avaliacao;
}

function listarLidos(): string[] {
  return titulos.filter((_, i) => lido[i] === true);
}

function listarPendentes(): string[] {
  return titulos.filter((_, i) => lido[i] === false);
}


//ESTATÍSTICAS


function totalLivros(): number {
  return titulos.length;
}

function totalLidos(): number {
  return lido.filter(v => v).length;
}

function percentualLidos(): number {
  return totalLivros() ? (totalLidos() / totalLivros()) * 100 : 0;
}

function mediaAvaliacoes(): number {
  const avaliados = avaliacoes.filter(n => n > 0);
  if (avaliados.length === 0) return 0;

  const soma = avaliados.reduce((acc, n) => acc + n, 0);
  return soma / avaliados.length;
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

  if (indice === -1) return 'Nenhum';

  const titulo = titulos[indice];
  return titulo ?? 'Nenhum';
}

function totalPaginasLidas(): number {
  return paginas
    .filter((_, i) => lido[i])
    .reduce((acc, p) => acc + p, 0);
}


//DÉCADAS


function exibirPorDecada(): void {
  console.log('\n=== POR DECADA ===');

  const decadas: Record<string, string[]> = {};

  titulos.forEach((titulo, i) => {
    const ano = anos[i];
    if (ano === undefined) return;

    const decada = Math.floor(ano / 10) * 10 + 's';

    if (!decadas[decada]) {
      decadas[decada] = [];
    }

    decadas[decada].push(titulo);
  });

  Object.entries(decadas)
    .sort(([a], [b]) => Number(a.replace('s', '')) - Number(b.replace('s', '')))
    .forEach(([decada, livros]) => {
      console.log(`${decada}: ${livros.join(', ')}`);
    });
}


//DEMONSTRAÇÃO FINAL

exibirBiblioteca();

console.log('\n=== ESTATISTICAS ===');
console.log(`Total de livros: ${totalLivros()}`);
console.log(`Livros lidos: ${totalLidos()} (${percentualLidos().toFixed(2)}%)`);
console.log(`Media das avaliacoes: ${mediaAvaliacoes().toFixed(2)}`);
console.log(`Livro melhor avaliado: ${livroMaiorAvaliacao()}`);
console.log(`Total de paginas lidas: ${totalPaginasLidas()}`);

exibirPorDecada();

// TESTES (todas funcionalidades)


console.log('\n=== TESTES ===');

adicionarLivro('Harry Potter', 'J.K. Rowling', 1997, 300);
marcarComoLido(titulos.length - 1, 5);

console.log('\nBusca por "code":', buscarPorTitulo('code'));
console.log('Livros de Robert C. Martin:', listarPorAutor('Robert C. Martin'));

console.log('\nLidos:', listarLidos());
console.log('Pendentes:', listarPendentes());

removerLivro(titulos.length - 1);

exibirBiblioteca();