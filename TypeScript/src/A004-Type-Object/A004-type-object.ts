// Evitar usar object
const objetoA: {
  //Tipagem do objeto
  //Não permitem que o valor seja alterado
  readonly chaveA: string;
  chaveB: string;
  //Opcional
  chaveC?: string;
  //Index Signature - Permite usar uma chave do tipo string com valor desconhecido (objetoA.chaveD)
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveB = 'Outro valor';
objetoA.chaveC = 'Novo valor';
objetoA.chaveD = 'Nova chave';

console.log(objetoA);

// Module mode
export default 1;
