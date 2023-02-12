enum Cores {
  VERMELHO = 10, // 10
  AZUL = 100, // 100
  AMARELO = 200, // 200
}

//Merge de Enuns
enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

export function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.VERDE);
escolhaACor(123456);
//Retorna undefined (ALERTA);
