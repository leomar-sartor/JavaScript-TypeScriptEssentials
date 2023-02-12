let x = 10; // eslint-disable-line
x = 0b1010; // Binário
const y = 10; //Subtipo Tipo literal - só pode ser 10
const a = 100; // eslint-disable-line

const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};

export function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Vermelho'), pessoa, x, y);

// Module mode
export default 1;
