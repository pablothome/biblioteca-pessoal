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